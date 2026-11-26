import { siteConfig, whatsappUrl } from '../config/site'
import { AppsIcon, CheckIcon } from './icons'

const heroHighlights = ['Microsoft 365', 'Azure', 'Copilot']

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-navy text-white"
      aria-labelledby="hero-title"
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(8,184,232,0.18),transparent_42%)]"
        aria-hidden="true"
      />

      <div className="container-page relative grid gap-12 py-20 sm:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-32">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-cyan">
            {siteConfig.tagline}
          </span>

          <h1 id="hero-title" className="mt-6 max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Tecnologia que conecta sua empresa a novas possibilidades.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
            Soluções Microsoft para ajudar sua equipe a trabalhar com mais produtividade, colaboração e segurança.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#contato" className="btn-primary">
              Solicitar orçamento
            </a>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Falar pelo WhatsApp
            </a>
          </div>

          <p className="mt-6 text-xs leading-relaxed text-white/50">
            {siteConfig.prototypeNotice}
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-card backdrop-blur-sm sm:p-8">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-cyan/15 text-brand-cyan">
              <AppsIcon className="h-6 w-6" />
            </span>
            <div>
              <p className="text-sm font-semibold text-white">Ambiente de trabalho conectado</p>
              <p className="text-xs text-white/60">Protótipo visual da proposta NuviaIT</p>
            </div>
          </div>

          <ul className="mt-6 space-y-3">
            {heroHighlights.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-white/85">
                <CheckIcon className="h-5 w-5 flex-none text-brand-cyan" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-2xl border border-white/10 bg-navy-soft/80 p-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-cyan">
              Como funciona
            </p>
            <p className="mt-2 text-sm leading-relaxed text-white/75">
              A NuviaIT entende sua necessidade, orienta sobre alternativas disponíveis e acompanha os próximos passos da contratação.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}