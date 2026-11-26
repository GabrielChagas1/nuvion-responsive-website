const steps = [
  {
    number: '01',
    title: 'Entendemos sua necessidade',
    description: 'O cliente informa o tamanho da equipe e o que procura.',
  },
  {
    number: '02',
    title: 'Indicamos uma opção',
    description: 'A equipe avalia a necessidade e orienta sobre as alternativas disponíveis.',
  },
  {
    number: '03',
    title: 'Acompanhamos a contratação',
    description: 'A equipe retorna com informações e próximos passos.',
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="section bg-surface" aria-labelledby="how-title">
      <div className="container-page">
        <h2 id="how-title" className="section-title">
          Como podemos ajudar
        </h2>
        <p className="section-lead">
          Um processo simples e consultivo, focado em entender a necessidade da empresa antes de indicar uma alternativa.
        </p>

        <ol className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <li key={step.number} className="relative">
              <div className="flex items-start gap-4">
                <span className="flex h-14 w-14 flex-none items-center justify-center rounded-2xl bg-navy text-lg font-bold text-brand-cyan">
                  {step.number}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-navy">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}