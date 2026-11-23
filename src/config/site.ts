export const siteConfig = {
  name: 'NuviaIT',
  tagline: 'Technology with Purpose.',
  domain: 'https://www.nuviait.example',
  whatsapp: {
    number: '5511000000000',
    display: '(11) 00000-0000',
    message: 'Olá! Conheci a NuviaIT pelo site e gostaria de saber mais sobre as soluções Microsoft para minha empresa.',
  },
  email: 'contato@nuviait.example',
  navigation: [
    { label: 'Início', href: '#inicio' },
    { label: 'Soluções', href: '#solucoes' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Contato', href: '#contato' },
  ],
  prototypeNotice:
    'Protótipo visual: contatos, endereço, CNPJ e logo ainda são provisórios ou fictícios e devem ser substituídos antes da publicação.',
} as const

export function whatsappUrl(message: string = siteConfig.whatsapp.message): string {
  return `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(message)}`
}