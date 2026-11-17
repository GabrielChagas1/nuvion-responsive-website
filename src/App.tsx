import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { HowItWorks } from './components/HowItWorks'
import { Solutions } from './components/Solutions'
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
        <Hero />
        <Solutions />
        <HowItWorks />
        <About />
        <Contact />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  )
}