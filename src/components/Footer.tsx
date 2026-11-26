import { siteConfig } from '../config/site'

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-page py-12 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <img
              src="./brand/nuvia-it-logo-completo-escuro.svg"
              alt={siteConfig.name}
              className="h-12 w-auto"
            />
            <p className="mt-2 text-sm text-white/65">{siteConfig.tagline}</p>
            <p className="mt-4 text-xs leading-relaxed text-white/60">
              A NuviaIT aproxima empresas de soluções tecnológicas que façam sentido para sua rotina, ajudando na escolha de ferramentas para uma operação mais produtiva e conectada.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-cyan">
              Navegação
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white/75">
              <li>
                <a href="#inicio" className="hover:text-white">
                  Início
                </a>
              </li>
              <li>
                <a href="#solucoes" className="hover:text-white">
                  Soluções
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-white">
                  Contato
                </a>
              </li>
              <li>
                <a href="/privacidade.html" className="hover:text-white">
                  Política de Privacidade
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-cyan">
              Contato
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white/75">
              <li>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                  {siteConfig.email}
                </a>
              </li>
              {siteConfig.whatsapp.configured ? (
                <li>WhatsApp: {siteConfig.whatsapp.display}</li>
              ) : null}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-cyan">
              Aviso
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/75">
              A NuviaIT é uma empresa independente e não representa a Microsoft.
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/50">
          <p>© NuviaIT. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}