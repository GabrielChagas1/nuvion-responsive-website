import { useEffect, useId, useState } from 'react'
import { siteConfig } from '../config/site'
import { CloseIcon, MenuIcon } from './icons'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const menuId = useId()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!isOpen) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  return (
    <header
      className={[
        'sticky top-0 z-50 border-b border-white/10 bg-navy/95 backdrop-blur transition-shadow duration-300',
        isScrolled ? 'shadow-xl shadow-black/30' : '',
      ].join(' ')}
    >
      <div className="container-page flex h-20 items-center justify-between gap-4">
        <a
          href="#inicio"
          className="flex min-w-0 items-center gap-3 text-white"
          onClick={() => setIsOpen(false)}
        >
          <img
            src="./brand/nuvia-it-navbar-escuro.svg"
            alt={siteConfig.name}
            className="h-10 w-auto"
          />
          <span className="hidden h-5 w-px bg-white/25 sm:block" aria-hidden="true" />
          <span className="hidden truncate text-xs font-medium text-brand-cyan sm:block">
            {siteConfig.tagline}
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
          {siteConfig.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contato"
            className="hidden rounded-lg bg-brand-blue px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-deep-blue sm:inline-flex"
          >
            Solicitar orçamento
          </a>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/20 text-white md:hidden"
            aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isOpen}
            aria-controls={menuId}
            onClick={() => setIsOpen((value) => !value)}
          >
            {isOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isOpen ? (
        <nav
          id={menuId}
          className="border-t border-white/10 bg-navy px-5 py-4 md:hidden"
          aria-label="Navegação mobile"
        >
          <ul className="flex flex-col gap-1">
            {siteConfig.navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-white/85 transition-colors hover:bg-white/10"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contato"
            className="mt-3 block rounded-lg bg-brand-blue px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-deep-blue"
            onClick={() => setIsOpen(false)}
          >
            Solicitar orçamento
          </a>

        </nav>
      ) : null}
    </header>
  )
}