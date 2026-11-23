# NuviaIT - Site institucional (protótipo Etapa 1)

Protótipo visual da landing page institucional da NuviaIT. Esta etapa entrega a estrutura visual, responsividade, acessibilidade básica, SEO inicial e o formulário com validação no navegador. **O envio real por e-mail ainda não está implementado.**

## Pré-requisitos

- Node.js 18 ou superior.
- npm 9 ou superior.

## Instalação

```bash
npm install
```

## Execução local

```bash
npm run dev
```

Abra o endereço exibido no terminal, normalmente `http://localhost:5173`.

## Scripts disponíveis

- `npm run dev` - inicia o servidor de desenvolvimento.
- `npm run build` - verifica tipos e gera a build de produção em `dist/`.
- `npm run typecheck` - verifica tipos TypeScript.
- `npm run lint` - executa o ESLint.
- `npm run preview` - serve a build de produção localmente.

## Estrutura

```text
src/
  components/
  config/
  styles/
public/
  brand/
  privacidade.html
  robots.txt
  sitemap.xml
```

## Publicação no GitHub Pages

O frontend pode ser publicado com GitHub Pages usando o workflow em `.github/workflows/deploy.yml`.

Atenção: o GitHub Pages é gratuito para repositórios públicos, mas os termos do GitHub informam que ele não deve ser usado como hospedagem gratuita para executar um negócio online, site de e-commerce ou plataforma comercial. Para um site institucional comercial da NuviaIT, confirme os termos atuais ou prefira um plano pago/provedor com uso comercial permitido.

1. Crie um repositório no GitHub e envie o projeto.
2. No repositório, acesse **Settings > Pages**.
3. Em **Build and deployment**, selecione **GitHub Actions**.
4. Faça um push na branch `main` ou execute o workflow manualmente em **Actions**.
5. O site ficará disponível em `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`.

O build usa caminhos relativos (`base: './'`), então funciona em subpasta do GitHub Pages. Se você usar um domínio próprio na raiz, pode alterar `base` para `/` em `vite.config.ts`.

Observação: esta etapa publica apenas o frontend. O formulário ainda não envia dados por e-mail.

## Dados fictícios e pendências

Os valores abaixo são provisórios e devem ser substituídos antes de publicar:

- WhatsApp: `src/config/site.ts` (`whatsapp.number` e `whatsapp.display`).
- E-mail de contato: `src/config/site.ts` (`email`).
- Domínio: `src/config/site.ts` (`domain`), `public/robots.txt` e `public/sitemap.xml`.
- Logo e favicon finais: `public/brand/`.
- Política de Privacidade: `public/privacidade.html`.
- Textos institucionais e confirmação dos serviços oferecidos.

Não publique este protótipo sem revisar esses itens.

## Próximos passos

Etapa 2: implementar endpoint seguro para leads, validação no servidor, envio de e-mail, rate limiting e proteção anti-spam.

Etapa 3: revisão de acessibilidade, responsividade, SEO, segurança e instruções de publicação.