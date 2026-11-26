export type LeadInput = {
  nome: string
  empresa: string
  email: string
  whatsapp: string
  solucao: string
  usuarios: string
  mensagem: string
  privacidade: boolean
  website: string
}

export type LeadValidationResult = {
  ok: boolean
  errors: Partial<Record<keyof LeadInput, string>>
  data?: LeadInput
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function asString(value: unknown): string {
  return typeof value === 'string' ? value.trim() : ''
}

function asBoolean(value: unknown): boolean {
  return value === true
}

function onlyDigits(value: string): string {
  return value.replace(/\D/g, '')
}

export function validateLead(input: unknown): LeadValidationResult {
  const raw = typeof input === 'object' && input !== null ? input as Record<string, unknown> : {}

  const data: LeadInput = {
    nome: asString(raw.nome),
    empresa: asString(raw.empresa),
    email: asString(raw.email),
    whatsapp: asString(raw.whatsapp),
    solucao: asString(raw.solucao),
    usuarios: asString(raw.usuarios),
    mensagem: asString(raw.mensagem),
    privacidade: asBoolean(raw.privacidade),
    website: asString(raw.website),
  }

  const errors: Partial<Record<keyof LeadInput, string>> = {}

  if (data.nome.length < 2) {
    errors.nome = 'Informe seu nome.'
  }

  if (data.empresa.length < 2) {
    errors.empresa = 'Informe o nome da empresa.'
  }

  if (!emailPattern.test(data.email)) {
    errors.email = 'Informe um e-mail válido.'
  }

  const phone = onlyDigits(data.whatsapp)
  if (phone.length < 10 || phone.length > 11) {
    errors.whatsapp = 'Informe o WhatsApp com DDD.'
  }

  if (data.mensagem.length > 1000) {
    errors.mensagem = 'A mensagem deve ter no máximo 1000 caracteres.'
  }

  if (!data.privacidade) {
    errors.privacidade = 'É necessário aceitar a Política de Privacidade.'
  }

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors }
  }

  return { ok: true, errors: {}, data }
}