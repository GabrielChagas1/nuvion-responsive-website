import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { HowItWorks } from './components/HowItWorks'
import { Solutions } from './components/Solutions'
import { CookieBanner } from './components/CookieBanner'
import { Reveal } from './components/Reveal'
import { WhatsAppButton } from './components/WhatsAppButton'

export default function App() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-navy focus:shadow-lg"
      >
        Pular para o conteúdo
      </a>

      <Header />

      <main id="conteudo">
        <Reveal>
          <Hero />
        </Reveal>
        <Reveal delay={80}>
          <Solutions />
        </Reveal>
        <Reveal delay={120}>
          <HowItWorks />
        </Reveal>
        <Reveal delay={160}>
          <About />
        </Reveal>
        <Reveal delay={200}>
          <Contact />
        </Reveal>
      </main>

      <Footer />
      <WhatsAppButton />
      <CookieBanner />
    </>
  )
}