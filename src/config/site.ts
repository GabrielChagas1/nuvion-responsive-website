export const siteConfig = {
  name: 'NuviaIT',
  tagline: 'Nuvia, sua via para a Nuvem',
  domain: 'https://nuviait.com.br',
  whatsapp: {
    number: '',
    display: '',
    message: 'Olá! Conheci a NuviaIT pelo site e gostaria de saber mais sobre as soluções Microsoft para minha empresa.',
    configured: false,
  },
  email: 'atendimento@nuviait.com.br',
  navigation: [
    { label: 'Início', href: '#inicio' },
    { label: 'Soluções', href: '#solucoes' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Contato', href: '#contato' },
  ],
} as const

export function whatsappUrl(message: string = siteConfig.whatsapp.message): string {
  if (!siteConfig.whatsapp.configured || !siteConfig.whatsapp.number) {
    return ''
  }

  return `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(message)}`
}