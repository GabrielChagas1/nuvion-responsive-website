# Projeto NuviaIT --- Briefing para desenvolvimento do site institucional

> **Documento de referência para usar no OpenCode.**\
> Objetivo: orientar a criação de um site institucional simples,
> profissional, responsivo e seguro para a NuviaIT, marca comercial em
> fase de definição para uma operação de revenda de soluções Microsoft.

------------------------------------------------------------------------

## 1. Contexto do projeto

A NuviaIT será a marca comercial utilizada na comunicação com os
clientes. A identidade visual enviada é uma **referência inicial e
provisória**, ainda não aprovada como identidade definitiva.

A empresa pretende atuar na comercialização de soluções Microsoft para
empresas, começando com foco em Microsoft 365 e licenças para pequenas e
médias empresas.

O site deve transmitir:

-   Profissionalismo e credibilidade.
-   Clareza na comunicação.
-   Proximidade e atendimento consultivo.
-   Segurança e confiança.
-   Tecnologia aplicada a necessidades reais de negócio.

**Importante:** a NuviaIT deve ser apresentada como uma revenda/empresa
independente. Não utilizar linguagem, elementos ou afirmações que deem a
entender que a NuviaIT é a própria Microsoft ou que possui certificações,
títulos, status de parceiro ou autorizações que ainda não tenham sido
confirmados.

Não inventar clientes, depoimentos, números, certificações, preços,
condições comerciais ou garantias.

## 2. Objetivo principal do site

O site não será uma plataforma complexa nem um e-commerce nesta primeira
versão.

Seu objetivo é transformar visitantes em oportunidades comerciais
(leads), oferecendo duas formas de contato:

1.  **WhatsApp:** botão de contato fácil de encontrar, com mensagem
    inicial pré-preenchida.
2.  **Formulário:** visitante informa seus dados e a necessidade da
    empresa; a equipe recebe a solicitação por e-mail.

O visitante deve conseguir entender rapidamente o que a empresa oferece
e como solicitar atendimento.

## 3. Público-alvo inicial

Pequenas e médias empresas, inicialmente sem limitar o atendimento a uma
cidade ou região.

Exemplos de necessidades que o site pode abordar:

-   Contratação de licenças Microsoft 365.
-   E-mail profissional corporativo.
-   Aplicativos de produtividade, como Word, Excel, PowerPoint e
    Outlook.
-   Comunicação e colaboração com Microsoft Teams.
-   Armazenamento e compartilhamento de arquivos com OneDrive e
    SharePoint.
-   Orientação para escolher o plano adequado.

A comunicação deve ser compreensível para gestores e empreendedores que
não são especialistas em tecnologia.

## 4. Identidade visual e direção de design

Usar a imagem de referência da marca enviada pelo usuário como
inspiração visual, não como um manual de marca definitivo.

### Elementos observados na referência

-   Nome provisório: **NUVION**.
-   Símbolo: laço/infinito com aparência de fluxo contínuo.
-   Cores predominantes: azul-marinho muito escuro, azul intenso,
    azul-ciano e branco.
-   Estilo: tecnológico, elegante, minimalista e corporativo.
-   Tipografia sugerida na referência: Montserrat.
-   Assinatura apresentada: "Technology with Purpose." (pode ser usada
    provisoriamente, mas deve ser fácil de alterar).

### Direção visual sugerida

-   Fundo branco ou cinza muito claro nas áreas de conteúdo.
-   Azul-marinho para cabeçalho, rodapé e seções de destaque.
-   Azul e ciano para botões, links e pequenos destaques.
-   Bastante espaço em branco e hierarquia visual clara.
-   Ícones simples e consistentes.
-   Animações discretas, apenas quando contribuírem para a experiência.
-   Evitar excesso de gradientes, brilhos, efeitos futuristas e
    elementos decorativos.
-   Evitar copiar o layout da imagem de referência literalmente.

### Paleta inicial aproximada

Os valores abaixo são sugestões aproximadas inspiradas na imagem e podem
ser ajustados:

-   Azul-marinho: `#06152F`
-   Azul profundo: `#073B8C`
-   Azul: `#0866E8`
-   Ciano: `#08B8E8`
-   Branco: `#FFFFFF`
-   Cinza de fundo: `#F4F6FA`
-   Texto principal: `#172033`
-   Texto secundário: `#647084`

Garantir contraste suficiente entre texto e fundo, inclusive nos botões
e estados de foco.

### Logo

Não redesenhar ou inventar uma versão definitiva do logo. Criar a
estrutura visual de modo que o arquivo da marca possa ser substituído
facilmente depois.

Preparar local para os arquivos, por exemplo:

-   `public/brand/logo.svg`
-   `public/brand/logo-light.svg`
-   `public/brand/favicon.svg`

Se os arquivos finais ainda não existirem, usar uma versão textual
temporária "NUVION" com tipografia adequada. Não usar a prancha completa
de identidade visual como se fosse o logo do cabeçalho.

## 5. Estrutura da página

Criar inicialmente uma **landing page de página única**, com navegação
por âncoras.

### 5.1 Cabeçalho

-   Logo ou nome NUVION.
-   Links: Início, Soluções, Sobre e Contato.
-   Botão de destaque: "Solicitar orçamento".
-   Cabeçalho responsivo com menu mobile acessível.
-   Ao clicar nos links, rolar suavemente até a seção correspondente.

### 5.2 Seção principal (Hero)

Objetivo: explicar rapidamente o valor da empresa e incentivar o
contato.

Texto-base sugerido:

**Título:**\
Tecnologia que conecta sua empresa a novas possibilidades.

**Subtítulo:**\
Soluções Microsoft para ajudar sua equipe a trabalhar com mais
produtividade, colaboração e segurança.

**Botões:** - "Solicitar orçamento" --- leva ao formulário. - "Falar
pelo WhatsApp" --- abre a conversa comercial.

Não afirmar que todos os serviços de implantação, suporte ou consultoria
estão disponíveis antes de confirmar a operação. Usar linguagem prudente
e editável.

### 5.3 Seção de soluções

Apresentar cards objetivos, sem preços nesta primeira versão:

1.  **Microsoft 365**\
    Aplicativos e serviços para a rotina de trabalho da empresa.

2.  **E-mail corporativo**\
    Comunicação profissional com domínio da empresa, conforme o plano
    contratado.

3.  **Produtividade e colaboração**\
    Ferramentas para criar documentos, organizar arquivos e trabalhar em
    equipe.

4.  **Armazenamento em nuvem**\
    Opções para armazenar, acessar e compartilhar arquivos.

5.  **Segurança**\
    Recursos de segurança disponíveis nos planos Microsoft, respeitando
    as diferenças entre licenças.

Cada card deve ter ícone, título, descrição curta e linguagem comercial
clara. Não prometer recursos que não estejam incluídos em todos os
planos.

### 5.4 Seção "Como podemos ajudar"

Explicar o processo em três etapas:

1.  **Entendemos sua necessidade:** o cliente informa o tamanho da
    equipe e o que procura.
2.  **Indicamos uma opção:** a equipe avalia a necessidade e orienta
    sobre as alternativas disponíveis.
3.  **Acompanhamos a contratação:** a equipe retorna com informações e
    próximos passos.

Evitar prometer prazo de resposta específico até que exista um
compromisso operacional definido.

### 5.5 Seção institucional

Texto-base editável:

"A NuviaIT nasce com o propósito de aproximar empresas de soluções
tecnológicas que façam sentido para sua rotina. Nosso foco é entender
cada necessidade e ajudar na escolha de ferramentas que contribuam para
uma operação mais produtiva e conectada."

Não inventar história, tempo de mercado, tamanho da equipe ou
experiência institucional.

### 5.6 Seção de contato

Título sugerido: **Vamos conversar sobre a tecnologia da sua empresa?**

Texto de apoio:\
"Conte um pouco sobre o que sua empresa precisa. Nossa equipe poderá
avaliar sua solicitação e entrar em contato."

O formulário deve conter:

-   Nome --- obrigatório.
-   Empresa --- obrigatório.
-   E-mail corporativo ou de contato --- obrigatório.
-   WhatsApp com DDD --- obrigatório.
-   Solução de interesse --- seleção opcional:
    -   Microsoft 365.
    -   E-mail corporativo.
    -   Produtividade e colaboração.
    -   Armazenamento em nuvem.
    -   Segurança.
    -   Ainda não sei / preciso de orientação.
-   Quantidade aproximada de usuários --- opcional:
    -   1 a 4.
    -   5 a 10.
    -   11 a 25.
    -   26 a 50.
    -   Mais de 50.
-   Mensagem --- opcional.
-   Consentimento de privacidade --- obrigatório, com link para a
    Política de Privacidade.

Comportamento esperado:

-   Validar os campos no navegador para facilitar o preenchimento.
-   Validar novamente todos os dados no servidor.
-   Mostrar estado de envio, sucesso e erro.
-   Evitar que o usuário envie várias vezes por acidente.
-   Após o envio, apresentar uma confirmação clara.
-   Não exibir dados de outros leads no navegador.

### 5.7 Rodapé

-   Nome e marca NuviaIT.
-   Links para Início, Soluções, Contato e Política de Privacidade.
-   Canal de contato, quando fornecido.
-   Identificação jurídica somente depois que razão social, CNPJ e dados
    forem confirmados.
-   Aviso de que a NuviaIT é uma empresa independente e não representa a
    Microsoft, caso necessário para evitar confusão de marca.

## 6. WhatsApp

Criar um botão flutuante e botões de contato nas seções principais.

O número deve ser configurado em um único local, por exemplo em
variáveis de configuração, e não repetido em vários componentes.

Usar link no padrão `https://wa.me/55DDDNUMERO`, somente depois de o
número real ser fornecido.

Mensagem inicial sugerida:

"Olá! Conheci a NuviaIT pelo site e gostaria de saber mais sobre as
soluções Microsoft para minha empresa."

**Não inventar número de WhatsApp.** Enquanto o número não for
informado, deixar uma configuração vazia e sinalizar no README o que
precisa ser preenchido.

## 7. Requisitos técnicos

Priorizar simplicidade, manutenção fácil e segurança. Não criar uma
arquitetura maior do que a necessidade do MVP.

### Stack sugerida

-   Frontend: React + TypeScript + Vite.
-   Estilização: Tailwind CSS.
-   Backend: ASP.NET Core Web API, somente para receber e processar o
    formulário.
-   Versão do .NET: usar uma versão LTS suportada no ambiente de
    desenvolvimento.
-   Envio de e-mail: serviço transacional confiável, configurado
    exclusivamente no backend por variáveis de ambiente.
-   Hospedagem: escolher opções compatíveis com a stack e com o
    orçamento; documentar a configuração necessária.

Se for possível atender ao formulário com uma função server-side simples
e segura, explicar a alternativa antes de adicionar infraestrutura
desnecessária. Não criar banco de dados, CRM, autenticação ou painel
administrativo nesta primeira versão.

### Organização sugerida

Separar componentes por responsabilidade. Exemplo:

``` text
src/
  components/
    Header/
    Footer/
    Hero/
    Solutions/
    HowItWorks/
    About/
    Contact/
    WhatsAppButton/
  pages/
  services/
  config/
  styles/
  assets/
```

A API, se implementada separadamente:

``` text
api/
  Controllers/ ou Endpoints/
  Services/
  Validators/
  Configuration/
```

Manter o projeto organizado, mas sem criar camadas e abstrações sem
necessidade.

## 8. Segurança e privacidade --- requisitos obrigatórios

O site deve ser simples, mas não pode tratar segurança como algo
opcional.

### Formulário e API

-   Nunca colocar chaves secretas, credenciais SMTP, tokens ou segredos
    no frontend.
-   Guardar segredos em variáveis de ambiente ou no gerenciador de
    segredos da hospedagem.
-   Nunca versionar arquivos `.env` com valores reais.
-   Criar `.env.example` apenas com nomes de variáveis e valores
    fictícios.
-   Validar e limitar o tamanho de todos os campos no servidor.
-   Normalizar e validar e-mail e telefone.
-   Tratar entradas como dados não confiáveis; evitar injeção de
    conteúdo em e-mails e logs.
-   Aplicar rate limiting no endpoint do formulário.
-   Implementar campo honeypot ou mecanismo equivalente contra spam.
-   Considerar CAPTCHA apenas se houver volume relevante de spam; não
    adicionar complexidade sem necessidade.
-   Restringir CORS ao domínio oficial em produção.
-   Usar HTTPS em produção.
-   Retornar mensagens genéricas ao usuário; não expor stack traces,
    detalhes internos ou credenciais.
-   Não registrar conteúdo sensível desnecessário nos logs.
-   Não permitir que o endpoint seja usado como serviço aberto de envio
    de e-mails para destinatários arbitrários.
-   Definir destinatário(s) do formulário no backend, por configuração.
-   Proteger o endpoint contra envios automatizados e abuso.

### Privacidade e LGPD

-   Criar uma Política de Privacidade simples e verdadeira, revisável
    antes da publicação.
-   Informar quais dados são coletados, para qual finalidade e como
    solicitar correção ou exclusão.
-   Coletar apenas os dados necessários para responder à solicitação.
-   Incluir consentimento claro no formulário e registrar a versão/data
    do consentimento, se tecnicamente viável.
-   Não incluir checkbox de marketing obrigatório para simplesmente
    responder a um pedido de orçamento.
-   Não instalar ferramentas de rastreamento ou cookies não essenciais
    sem avaliar consentimento e transparência.
-   Definir quem terá acesso aos leads e por quanto tempo os dados serão
    mantidos.

A implementação técnica não substitui uma revisão jurídica da Política
de Privacidade e das práticas de tratamento de dados.

### Qualidade

-   Layout responsivo para celular, tablet e desktop.
-   HTML semântico e acessível.
-   Navegação por teclado e foco visível.
-   Rótulos associados aos campos do formulário.
-   Contraste adequado.
-   Imagens otimizadas e carregamento eficiente.
-   Metadados básicos de SEO, título e descrição.
-   Página de erro e feedback de formulário compreensíveis.
-   Não deixar botões sem ação.
-   Não publicar links, telefone, e-mail, endereço ou CNPJ fictícios.

## 9. Fora do escopo da primeira versão

Não desenvolver agora:

-   CRM ou painel administrativo.
-   Login e cadastro de usuários.
-   E-commerce ou pagamento online.
-   Gestão de licenças.
-   Emissão automática de propostas.
-   Integração com sistemas Microsoft ou APIs de parceiros.
-   Chatbot ou inteligência artificial.
-   Blog completo ou CMS.
-   Banco de dados, a menos que seja demonstrada uma necessidade
    concreta para não perder leads.

Esses itens podem ser avaliados em versões futuras.

## 10. SEO e divulgação

Preparar a página para buscas relacionadas a:

-   Microsoft 365 para empresas.
-   Licenças Microsoft para empresas.
-   E-mail corporativo.
-   Soluções de produtividade para empresas.
-   Microsoft 365 para pequenas e médias empresas.

Requisitos iniciais:

-   Título e descrição únicos.
-   Estrutura correta de títulos H1, H2 e H3.
-   URLs simples, caso novas páginas sejam criadas.
-   Open Graph para compartilhamento.
-   Favicon.
-   Sitemap e robots.txt quando aplicável.
-   Desempenho e experiência mobile adequados.

Não prometer primeira posição no Google.

## 11. Critérios de aceite

A primeira versão só estará pronta quando:

-   [ ] A página apresentar corretamente a NuviaIT e suas soluções.
-   [ ] A identidade visual seguir a referência provisória.
-   [ ] O site funcionar em celular e desktop.
-   [ ] Todos os links de navegação levarem ao destino correto.
-   [ ] O botão de WhatsApp funcionar com o número real configurado.
-   [ ] O formulário validar os dados no cliente e no servidor.
-   [ ] O envio chegar ao endereço de e-mail configurado.
-   [ ] O usuário receber confirmação de sucesso ou uma mensagem útil de
    erro.
-   [ ] O endpoint possuir proteção básica contra spam e abuso.
-   [ ] Não existirem segredos no código do frontend ou no repositório.
-   [ ] A Política de Privacidade estiver disponível e revisada.
-   [ ] Não houver textos fictícios, números inventados ou afirmações
    comerciais não confirmadas.
-   [ ] O projeto possuir instruções para rodar localmente e publicar.

## 12. Instruções de trabalho para o OpenCode

Leia este documento inteiro antes de alterar ou criar arquivos.

Trabalhe como um desenvolvedor sênior, priorizando uma solução simples,
segura, acessível e fácil de manter.

### Forma de execução

1.  Primeiro, inspecione a pasta do projeto e identifique se já existe
    código.
2.  Apresente uma proposta curta de estrutura e arquitetura antes de
    fazer alterações grandes.
3.  Identifique informações que ainda faltam, como número de WhatsApp,
    e-mail de recebimento dos leads e domínio. Não invente esses dados.
4.  Desenvolva em etapas pequenas e verificáveis.
5.  Antes de adicionar bibliotecas, serviços pagos ou infraestrutura,
    explique por que são necessários e apresente uma alternativa mais
    simples quando existir.
6.  Não implemente funcionalidades fora do escopo sem autorização.
7.  Não invente informações institucionais, certificações, preços,
    depoimentos ou promessas.
8.  Escreva código tipado, organizado e com tratamento de erros.
9.  Crie testes para validações importantes, principalmente do endpoint
    de leads.
10. Execute build, lint e testes disponíveis e corrija os problemas
    encontrados.
11. Atualize o README com pré-requisitos, instalação, execução local,
    variáveis de ambiente, testes e publicação.
12. Ao concluir cada etapa, informe o que foi criado, como testar e o
    que ainda depende de informação do usuário.

### Ordem sugerida de implementação

**Etapa 1 --- Estrutura visual** - Criar o projeto frontend. -
Implementar cabeçalho, hero, soluções, seção institucional, contato e
rodapé. - Aplicar a identidade visual provisória. - Tornar a página
responsiva. - Usar conteúdo realista, sem afirmações não confirmadas. -
Nesta etapa, o formulário pode ficar visualmente pronto, mas não deve
simular um envio real.

**Etapa 2 --- Captação** - Implementar endpoint seguro para receber
leads. - Validar os campos no servidor. - Configurar envio de e-mail. -
Implementar rate limiting e proteção anti-spam. - Exibir estados de
carregamento, sucesso e falha. - Testar o fluxo completo.

**Etapa 3 --- Revisão e publicação** - Revisar acessibilidade,
responsividade, SEO e segurança. - Conferir configuração de produção e
variáveis de ambiente. - Preparar instruções de publicação. - Confirmar
que os contatos reais foram configurados antes de publicar.

**Comece pela Etapa 1. Não avance para a Etapa 2 até que a estrutura
visual seja apresentada e validada.**

------------------------------------------------------------------------

## 13. Informações pendentes para publicação

Preencher quando estiverem definidas:

  -----------------------------------------------------------------------
  Informação                          Status
  ----------------------------------- -----------------------------------
  Nome comercial NuviaIT               Provisório

  Logo final                          Pendente

  Número de WhatsApp comercial        Pendente

  E-mail para receber leads           Pendente

  Domínio do site                     Pendente

  Razão social e CNPJ para            Pendente
  identificação legal                 

  Texto final da Política de          Pendente de revisão
  Privacidade                         

  Confirmação dos serviços            Pendente
  efetivamente oferecidos             

  Confirmação de condições e          Pendente
  autorização comercial do canal      
  Microsoft                           
  -----------------------------------------------------------------------

**Diretriz final:** entregar primeiro um site pequeno, bonito, rápido,
confiável e que gere contatos. A prioridade é colocar uma primeira
versão profissional no ar sem criar complexidade desnecessária.
