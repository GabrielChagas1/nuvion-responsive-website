import { AppsIcon, CloudIcon, CollaborationIcon, MailIcon, ShieldIcon } from './icons'
import { Reveal } from './Reveal'

const solutions = [
  {
    title: 'Microsoft 365',
    description: 'Aplicativos e serviços para a rotina de trabalho da empresa.',
    icon: AppsIcon,
  },
  {
    title: 'E-mail corporativo',
    description: 'Comunicação profissional com domínio da empresa, conforme o plano contratado.',
    icon: MailIcon,
  },
  {
    title: 'Produtividade e colaboração',
    description: 'Ferramentas para criar documentos, organizar arquivos e trabalhar em equipe.',
    icon: CollaborationIcon,
  },
  {
    title: 'Armazenamento em nuvem',
    description: 'Opções para armazenar, acessar e compartilhar arquivos.',
    icon: CloudIcon,
  },
  {
    title: 'Segurança',
    description: 'Recursos de segurança disponíveis nos planos Microsoft, respeitando as diferenças entre licenças.',
    icon: ShieldIcon,
  },
]

export function Solutions() {
  return (
    <section id="solucoes" className="section bg-white" aria-labelledby="solutions-title">
      <div className="container-page">
        <h2 id="solutions-title" className="section-title">
          Soluções para a rotina da sua empresa
        </h2>
        <p className="section-lead">
          Opções organizadas para ajudar gestores a entenderem o que cada solução pode oferecer, sem prometer recursos que não estejam incluídos em todos os planos.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map(({ title, description, icon: Icon }, index) => (
            <Reveal key={title} delay={index * 70}>
              <article className="card">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-navy">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}