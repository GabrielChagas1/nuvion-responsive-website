import { useEffect, useState } from 'react'
import { loadGoogleTagManager } from '../services/analytics'

const STORAGE_KEY = 'nuviait-cookie-consent'

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY)

    if (stored === 'accepted' || stored === 'rejected') {
      if (stored === 'accepted') {
        loadGoogleTagManager()
      }
    } else {
      setIsVisible(true)
    }
  }, [])

  function accept() {
    window.localStorage.setItem(STORAGE_KEY, 'accepted')
    setIsVisible(false)
    loadGoogleTagManager()
  }

  function reject() {
    window.localStorage.setItem(STORAGE_KEY, 'rejected')
    setIsVisible(false)
  }

  if (!isVisible) {
    return null
  }

  return (
    <div className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl sm:inset-x-auto sm:right-4 sm:left-auto">
      <p className="text-sm font-semibold text-navy">Cookies e privacidade</p>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        Usamos cookies e ferramentas de análise para entender como o site é utilizado e melhorar a experiência. Você pode aceitar ou recusar o rastreamento.
      </p>
      <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:justify-end">
        <button
          type="button"
          onClick={reject}
          className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-navy transition-colors hover:bg-slate-50"
        >
          Recusar
        </button>
        <button
          type="button"
          onClick={accept}
          className="rounded-lg bg-brand-blue px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-deep-blue"
        >
          Aceitar
        </button>
      </div>
    </div>
  )
}