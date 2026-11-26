export type LeadPayload = {
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

export type LeadResponse = {
  ok: boolean
  message?: string
  errors?: Partial<Record<keyof LeadPayload, string>>
}

export async function submitLead(payload: LeadPayload): Promise<LeadResponse> {
  const baseUrl = import.meta.env.VITE_API_URL?.trim() || ''
  const endpoint = `${baseUrl.replace(/\/$/, '')}/api/lead`

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  let data: LeadResponse | null = null
  try {
    data = await response.json()
  } catch {
    data = null
  }

  if (!response.ok || !data?.ok) {
    return {
      ok: false,
      message: data?.message || 'Não foi possível enviar sua solicitação agora. Tente novamente em instantes.',
      errors: data?.errors,
    }
  }

  return {
    ok: true,
    message: data.message || 'Solicitação enviada com sucesso.',
  }
}