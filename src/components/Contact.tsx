import { FormEvent, ReactNode, useState } from 'react'
import { siteConfig, whatsappUrl } from '../config/site'
import { submitLead, type LeadPayload } from '../services/leadApi'

type FormValues = {
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

type FormErrors = Partial<Record<keyof FormValues, string>>

const solutionOptions = [
  'Microsoft 365',
  'E-mail corporativo',
  'Produtividade e colaboração',
  'Armazenamento em nuvem',
  'Segurança',
  'Ainda não sei / preciso de orientação',
]

const userRangeOptions = ['1 a 4', '5 a 10', '11 a 25', '26 a 50', 'Mais de 50']

const initialValues: FormValues = {
  nome: '',
  empresa: '',
  email: '',
  whatsapp: '',
  solucao: '',
  usuarios: '',
  mensagem: '',
  privacidade: false,
  website: '',
}

function onlyDigits(value: string): string {
  return value.replace(/\D/g, '')
}

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {}

  if (values.nome.trim().length < 2) {
    errors.nome = 'Informe seu nome.'
  }

  if (values.empresa.trim().length < 2) {
    errors.empresa = 'Informe o nome da empresa.'
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Informe um e-mail válido.'
  }

  const phone = onlyDigits(values.whatsapp)
  if (phone.length < 10 || phone.length > 11) {
    errors.whatsapp = 'Informe o WhatsApp com DDD.'
  }

  if (values.mensagem.trim().length > 1000) {
    errors.mensagem = 'A mensagem deve ter no máximo 1000 caracteres.'
  }

  if (!values.privacidade) {
    errors.privacidade = 'É necessário aceitar a Política de Privacidade.'
  }

  return errors
}

function inputClassName(hasError: boolean): string {
  return [
    'w-full rounded-lg border bg-white px-4 py-3 text-sm text-ink placeholder:text-muted/70',
    'focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20',
    hasError ? 'border-red-400' : 'border-slate-300',
  ].join(' ')
}

function Field({
  id,
  label,
  required,
  error,
  children,
}: {
  id: string
  label: string
  required?: boolean
  error?: string
  children: ReactNode
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-navy">
        {label}
        {required ? <span className="text-brand-blue"> *</span> : null}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-red-600" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  )
}

export function Contact() {
  const [values, setValues] = useState<FormValues>(initialValues)
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  function update<K extends keyof FormValues>(field: K, value: FormValues[K]) {
    setValues((current) => ({ ...current, [field]: value }))
    setErrors((current) => {
      if (!current[field]) {
        return current
      }

      const next = { ...current }
      next[field] = undefined
      return next
    })
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const nextErrors = validate(values)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setStatus('idle')
      return
    }

    setStatus('submitting')

    const payload: LeadPayload = {
      nome: values.nome.trim(),
      empresa: values.empresa.trim(),
      email: values.email.trim(),
      whatsapp: values.whatsapp.trim(),
      solucao: values.solucao,
      usuarios: values.usuarios,
      mensagem: values.mensagem.trim(),
      privacidade: values.privacidade,
      website: values.website,
    }

    const result = await submitLead(payload)

    if (result.ok) {
      setValues(initialValues)
      setErrors({})
      setStatus('success')
      return
    }

    if (result.errors) {
      setErrors(result.errors)
    }
    setStatus('error')
  }

  return (
    <section id="contato" className="section bg-surface" aria-labelledby="contact-title">
      <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h2 id="contact-title" className="section-title">
            Vamos conversar sobre a tecnologia da sua empresa?
          </h2>
          <p className="section-lead">
            Conte um pouco sobre o que sua empresa precisa. Nossa equipe poderá avaliar sua solicitação e entrar em contato.
          </p>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
            <p className="text-sm font-semibold text-navy">Canal de contato</p>
            <p className="mt-3 text-sm text-muted">
              E-mail:{' '}
              <a href={`mailto:${siteConfig.email}`} className="font-medium text-brand-blue hover:underline">
                {siteConfig.email}
              </a>
            </p>
            <p className="mt-1 text-sm text-muted">WhatsApp: {siteConfig.whatsapp.display}</p>
          </div>
        </div>

        <form className="card" noValidate onSubmit={handleSubmit}>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field id="nome" label="Nome" required error={errors.nome}>
              <input
                id="nome"
                type="text"
                autoComplete="name"
                value={values.nome}
                onChange={(event) => update('nome', event.target.value)}
                className={inputClassName(Boolean(errors.nome))}
                aria-invalid={Boolean(errors.nome)}
                aria-describedby={errors.nome ? 'nome-error' : undefined}
              />
            </Field>

            <Field id="empresa" label="Empresa" required error={errors.empresa}>
              <input
                id="empresa"
                type="text"
                autoComplete="organization"
                value={values.empresa}
                onChange={(event) => update('empresa', event.target.value)}
                className={inputClassName(Boolean(errors.empresa))}
                aria-invalid={Boolean(errors.empresa)}
                aria-describedby={errors.empresa ? 'empresa-error' : undefined}
              />
            </Field>

            <Field id="email" label="E-mail corporativo ou de contato" required error={errors.email}>
              <input
                id="email"
                type="email"
                autoComplete="email"
                value={values.email}
                onChange={(event) => update('email', event.target.value)}
                className={inputClassName(Boolean(errors.email))}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
            </Field>

            <Field id="whatsapp" label="WhatsApp com DDD" required error={errors.whatsapp}>
              <input
                id="whatsapp"
                type="tel"
                autoComplete="tel"
                inputMode="tel"
                placeholder="(11) 99999-9999"
                value={values.whatsapp}
                onChange={(event) => update('whatsapp', event.target.value)}
                className={inputClassName(Boolean(errors.whatsapp))}
                aria-invalid={Boolean(errors.whatsapp)}
                aria-describedby={errors.whatsapp ? 'whatsapp-error' : undefined}
              />
            </Field>

            <Field id="solucao" label="Solução de interesse">
              <select
                id="solucao"
                value={values.solucao}
                onChange={(event) => update('solucao', event.target.value)}
                className={inputClassName(false)}
              >
                <option value="">Selecione uma opção</option>
                {solutionOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </Field>

            <Field id="usuarios" label="Quantidade aproximada de usuários">
              <select
                id="usuarios"
                value={values.usuarios}
                onChange={(event) => update('usuarios', event.target.value)}
                className={inputClassName(false)}
              >
                <option value="">Selecione uma faixa</option>
                {userRangeOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </Field>
          </div>

          <div className="mt-5">
            <Field id="mensagem" label="Mensagem" error={errors.mensagem}>
              <textarea
                id="mensagem"
                rows={5}
                value={values.mensagem}
                onChange={(event) => update('mensagem', event.target.value)}
                className={inputClassName(Boolean(errors.mensagem))}
                aria-invalid={Boolean(errors.mensagem)}
                aria-describedby={errors.mensagem ? 'mensagem-error' : undefined}
              />
            </Field>
          </div>

          <div className="mt-5">
            <label className="flex items-start gap-3 text-sm text-muted">
              <input
                id="privacidade"
                type="checkbox"
                checked={values.privacidade}
                onChange={(event) => update('privacidade', event.target.checked)}
                className="mt-1 h-4 w-4 rounded border-slate-300 text-brand-blue focus:ring-brand-cyan"
                aria-invalid={Boolean(errors.privacidade)}
                aria-describedby={errors.privacidade ? 'privacidade-error' : undefined}
              />
              <span>
                Li e aceito a{' '}
                <a
                  href="/privacidade.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-brand-blue hover:underline"
                >
                  Política de Privacidade
                </a>
                .
              </span>
            </label>
            {errors.privacidade ? (
              <p id="privacidade-error" className="mt-2 text-sm text-red-600" role="alert">
                {errors.privacidade}
              </p>
            ) : null}
          </div>

          <div className="hidden" aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input
              id="website"
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={values.website}
              onChange={(event) => update('website', event.target.value)}
            />
          </div>

          {status === 'success' ? (
            <div className="mt-6 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800" role="status">
              Solicitação enviada com sucesso. Nossa equipe entrará em contato.
              <div className="mt-3">
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-semibold text-emerald-900 underline"
                >
                  Continuar no WhatsApp
                </a>
              </div>
            </div>
          ) : null}

          {status === 'error' ? (
            <div className="mt-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800" role="alert">
              Não foi possível enviar sua solicitação agora. Tente novamente em instantes ou fale pelo WhatsApp.
            </div>
          ) : null}

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <button type="submit" className="btn-primary" disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Enviando...' : 'Enviar solicitação'}
            </button>
            <p className="text-xs text-muted">* Campos obrigatórios.</p>
          </div>
        </form>
      </div>
    </section>
  )
}