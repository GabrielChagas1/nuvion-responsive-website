import { type LeadInput, validateLead } from '../lib/validate'

type LeadEnv = {
  RESEND_API_KEY?: string
  LEAD_TO_EMAIL?: string
  LEAD_FROM_EMAIL?: string
  ALLOWED_ORIGIN?: string
}

type RateLimitEntry = {
  count: number
  resetAt: number
}

const rateLimitStore = new Map<string, RateLimitEntry>()
const RATE_LIMIT_WINDOW_MS = 60_000
const RATE_LIMIT_MAX_REQUESTS = 5

function getAllowedOrigin(request: Request, env: LeadEnv): string {
  const allowed = env.ALLOWED_ORIGIN?.trim() || '*'
  const origin = request.headers.get('Origin')

  if (allowed === '*') {
    return '*'
  }

  return origin === allowed ? origin : 'null'
}

function corsHeaders(request: Request, env: LeadEnv): HeadersInit {
  return {
    'Access-Control-Allow-Origin': getAllowedOrigin(request, env),
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
  }
}

function jsonResponse(
  request: Request,
  env: LeadEnv,
  status: number,
  body: Record<string, unknown>,
): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      ...corsHeaders(request, env),
    },
  })
}

function getClientIp(request: Request): string {
  return (
    request.headers.get('CF-Connecting-IP') ||
    request.headers.get('X-Forwarded-For')?.split(',')[0]?.trim() ||
    'unknown'
  )
}

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimitStore.get(ip)

  if (!entry || now > entry.resetAt) {
    rateLimitStore.set(ip, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    })
    return false
  }

  if (entry.count >= RATE_LIMIT_MAX_REQUESTS) {
    return true
  }

  entry.count += 1
  return false
}

async function sendLeadEmail(env: LeadEnv, data: LeadInput): Promise<void> {
  const apiKey = env.RESEND_API_KEY?.trim()
  const to = env.LEAD_TO_EMAIL?.trim()
  const from = env.LEAD_FROM_EMAIL?.trim() || 'onboarding@resend.dev'

  if (!apiKey || !to || !data) {
    throw new Error('E-mail service is not configured.')
  }

  const text = [
    'Novo lead recebido pelo site NuviaIT',
    '',
    `Nome: ${data.nome}`,
    `Empresa: ${data.empresa}`,
    `E-mail: ${data.email}`,
    `WhatsApp: ${data.whatsapp}`,
    `Solução de interesse: ${data.solucao || 'Não informado'}`,
    `Quantidade de usuários: ${data.usuarios || 'Não informado'}`,
    '',
    'Mensagem:',
    data.mensagem || 'Não informada',
  ].join('\n')

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject: `Novo lead: ${data.empresa}`,
      text,
    }),
  })

  if (!response.ok) {
    throw new Error('Unable to send lead email.')
  }
}

export async function onRequestOptions(context: { request: Request; env: LeadEnv }): Promise<Response> {
  return new Response(null, {
    status: 204,
    headers: corsHeaders(context.request, context.env),
  })
}

export async function onRequestPost(context: { request: Request; env: LeadEnv }): Promise<Response> {
  const { request, env } = context

  const ip = getClientIp(request)
  if (isRateLimited(ip)) {
    return jsonResponse(request, env, 429, {
      ok: false,
      message: 'Muitas tentativas. Tente novamente em instantes.',
    })
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return jsonResponse(request, env, 400, {
      ok: false,
      message: 'Dados inválidos.',
    })
  }

  const validation = validateLead(body)

  if (!validation.ok || !validation.data) {
    return jsonResponse(request, env, 400, {
      ok: false,
      message: 'Verifique os campos obrigatórios.',
      errors: validation.errors,
    })
  }

  // Honeypot: responde sucesso sem enviar e-mail.
  if (validation.data.website !== '') {
    return jsonResponse(request, env, 200, { ok: true })
  }

  try {
    await sendLeadEmail(env, validation.data)
  } catch {
    return jsonResponse(request, env, 500, {
      ok: false,
      message: 'Não foi possível enviar sua solicitação agora. Tente novamente em instantes.',
    })
  }

  return jsonResponse(request, env, 200, { ok: true })
}

export async function onRequest(context: { request: Request; env: LeadEnv }): Promise<Response> {
  return jsonResponse(context.request, context.env, 405, {
    ok: false,
    message: 'Método não permitido.',
  })
}