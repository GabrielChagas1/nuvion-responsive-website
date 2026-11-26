import { siteConfig, whatsappUrl } from '../config/site'
import { WhatsAppIcon } from './icons'

export function WhatsAppButton() {
  if (!siteConfig.whatsapp.configured) {
    return null
  }

  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a NuviaIT pelo WhatsApp"
      title="Falar pelo WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-navy shadow-lg transition-transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2 focus:ring-offset-[#25D366]"
    >
      <WhatsAppIcon className="h-5 w-5" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  )
}