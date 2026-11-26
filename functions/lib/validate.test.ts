import { describe, expect, it } from 'vitest'
import { validateLead } from './validate'

describe('validateLead', () => {
  it('accepts a complete valid lead', () => {
    const result = validateLead({
      nome: 'Gabriel',
      empresa: 'NuviaIT',
      email: 'gabriel@example.com',
      whatsapp: '(11) 99999-9999',
      solucao: 'Microsoft 365',
      usuarios: '5 a 10',
      mensagem: 'Preciso de licenças.',
      privacidade: true,
      website: '',
    })

    expect(result.ok).toBe(true)
    expect(result.errors).toEqual({})
    expect(result.data?.email).toBe('gabriel@example.com')
  })

  it('rejects missing required fields', () => {
    const result = validateLead({
      nome: '',
      empresa: '',
      email: 'invalido',
      whatsapp: '123',
      privacidade: false,
    })

    expect(result.ok).toBe(false)
    expect(result.errors.nome).toBeTruthy()
    expect(result.errors.empresa).toBeTruthy()
    expect(result.errors.email).toBeTruthy()
    expect(result.errors.whatsapp).toBeTruthy()
    expect(result.errors.privacidade).toBeTruthy()
  })

  it('rejects messages longer than 1000 characters', () => {
    const result = validateLead({
      nome: 'Gabriel',
      empresa: 'NuviaIT',
      email: 'gabriel@example.com',
      whatsapp: '(11) 99999-9999',
      mensagem: 'a'.repeat(1001),
      privacidade: true,
    })

    expect(result.ok).toBe(false)
    expect(result.errors.mensagem).toBeTruthy()
  })
})