declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    dataLayer?: unknown[]
  }
}

export function loadGoogleTagManager(containerId = 'GTM-5CQVHFRX'): void {
  if (typeof window === 'undefined') {
    return
  }

  if (document.getElementById('gtm-script')) {
    return
  }

  window.dataLayer = window.dataLayer || []
  window.gtag =
    window.gtag ||
    function (...args: unknown[]) {
      window.dataLayer?.push(args)
    }

  window.gtag('js', new Date())

  const script = document.createElement('script')
  script.id = 'gtm-script'
  script.async = true
  script.src = `https://www.googletagmanager.com/gtm.js?id=${containerId}`
  document.head.appendChild(script)
}

export function trackGenerateLead(): void {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
    return
  }

  window.gtag('event', 'generate_lead', {
    currency: 'BRL',
  })
}