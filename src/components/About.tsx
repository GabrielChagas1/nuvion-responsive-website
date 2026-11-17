const principles = [
  {
    title: 'Clareza',
    description: 'Comunicação compreensível para gestores e empreendedores que não são especialistas em tecnologia.',
  },
  {
    title: 'Proximidade',
    description: 'Atendimento consultivo para entender cada necessidade antes de indicar uma alternativa.',
  },
  {
    title: 'Segurança',
    description: 'Cuidado com dados, privacidade e com a transparência sobre o que cada plano oferece.',
  },
]

export function About() {
  return (
    <section id="sobre" className="section bg-white" aria-labelledby="about-title">
      <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <h2 id="about-title" className="section-title">
            Sobre a Nuvion
          </h2>
          <p className="section-lead">
            A Nuvion nasce com o propósito de aproximar empresas de soluções tecnológicas que façam sentido para sua rotina. Nosso foco é entender cada necessidade e ajudar na escolha de ferramentas que contribuam para uma operação mais produtiva e conectada.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            A Nuvion é uma empresa independente. Não representamos a Microsoft nem afirmamos certificações, títulos ou autorizações que ainda não tenham sido confirmados.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {principles.map((principle) => (
            <div key={principle.title} className="card">
              <h3 className="text-base font-semibold text-navy">{principle.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{principle.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}