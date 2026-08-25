# Tech-Blog

Um blog fictício desenvolvido com **Next.js** como parte de um projeto acadêmico da **EBAC**, com foco na aplicação de conceitos de desenvolvimento web moderno, roteamento dinâmico, geração estática de páginas e SEO.

## 🌐 Projeto

O **Tech-Blog** é uma plataforma de conteúdo voltada para tecnologia, programação e desenvolvimento.

O projeto possui diferentes categorias de artigos:

* 🇧🇷 Brasil
* 🤖 Inteligência Artificial
* 💻 Linguagens de Programação
* 🚀 Inovações
* 📰 Artigos Principais

A aplicação permite navegar pelas categorias e acessar individualmente cada artigo por meio de uma URL amigável baseada em seu título.

## 🔗 Links

**Deploy:**
https://techblog-ashen.vercel.app/

**Repositório:**
https://github.com/gbc84389-tech/Tech-Blog

## 🖥️ Demonstração

A aplicação possui:

* Página inicial com os principais artigos
* Navegação entre categorias
* Cards de artigos
* Página individual para cada artigo
* URLs amigáveis utilizando `slug`
* Metadados dinâmicos para os artigos
* Páginas geradas estaticamente
* Página 404 para artigos inexistentes
* Layout responsivo

## 🛠️ Tecnologias utilizadas

### Front-end

* [Next.js](https://nextjs.org/)
* [React](https://react.dev/)
* [TypeScript](https://www.typescriptlang.org/)
* HTML5
* CSS3
* CSS Modules

### Bibliotecas

* [Slugify](https://www.npmjs.com/package/slugify)

### Ferramentas

* Git
* GitHub
* Vercel
* Visual Studio Code
* npm

## 📁 Estrutura do projeto

```text
TechBlog/
├── app/
│   ├── artigos/
│   │   ├── [slug]/
│   │   │   ├── page.tsx
│   │   │   └── DetalheArtigo.module.css
│   │   │
│   │   ├── brasil/
│   │   │   └── page.tsx
│   │   │
│   │   ├── ia/
│   │   │   └── page.tsx
│   │   │
│   │   ├── inovacoes/
│   │   │   └── page.tsx
│   │   │
│   │   └── linguagem/
│   │       └── page.tsx
│   │
│   ├── components/
│   │   ├── Card/
│   │   ├── Grid/
│   │   ├── Header/
│   │   └── Title/
│   │
│   ├── lib/
│   │   ├── ArtigosPrincipal.ts
│   │   ├── ArtigosBrasil.ts
│   │   ├── ArtigosIA.ts
│   │   ├── ArtigosInovacao.ts
│   │   └── ArtigosLinguagem.ts
│   │
│   ├── types/
│   │   └── types.ts
│   │
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── public/
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
```

## 🧭 Rotas

A aplicação utiliza o **App Router** do Next.js.

### Página inicial

```text
/
```

Apresenta os principais artigos do blog.

### Categorias

```text
/artigos/brasil
/artigos/ia
/artigos/inovacoes
/artigos/linguagem
```

Cada rota apresenta os artigos pertencentes à respectiva categoria.

### Artigos individuais

```text
/artigos/[slug]
```

Cada artigo possui uma URL dinâmica baseada no título.

Por exemplo:

```text
/artigos/como-a-tecnologia-esta-transformando-o-mercado-de-trabalho
```

O `slug` é gerado utilizando a biblioteca `slugify`, transformando o título em uma URL amigável.

## ⚡ Estratégia de geração estática

Uma das principais características do projeto é a utilização de **Static Site Generation (SSG)**.

As páginas individuais dos artigos utilizam:

```ts
generateStaticParams()
```

Essa função percorre os artigos disponíveis e gera previamente os caminhos que serão utilizados pela aplicação.

Exemplo:

```ts
export function generateStaticParams() {
  return artigos.map((artigo) => ({
    slug: slugify(artigo.titulo, {
      lower: true,
      strict: true,
    }),
  }));
}
```

Com isso, durante o processo de build, o Next.js consegue gerar previamente as páginas dos artigos.

### Resultado

Durante o build, as páginas são identificadas como:

```text
● (SSG) prerendered as static HTML
```

Isso significa que as páginas dos artigos são pré-renderizadas como HTML estático antes de serem entregues ao usuário.

Essa estratégia proporciona:

* Melhor desempenho
* Menor processamento por requisição
* Melhor experiência de navegação
* URLs amigáveis
* Conteúdo pré-renderizado
* Melhor potencial para SEO

## 🔍 Busca do artigo pelo slug

Ao acessar uma página individual, o `slug` presente na URL é comparado com o título dos artigos.

O título também passa pelo `slugify` para garantir que a comparação utilize o mesmo formato da URL.

```ts
const clicado = artigos.find(
  (artigo) =>
    slugify(artigo.titulo, {
      lower: true,
      strict: true,
    }) === slug
);
```

Caso nenhum artigo seja encontrado, a aplicação utiliza:

```ts
notFound();
```

Assim, o usuário é direcionado para a página de conteúdo não encontrado.

## 🏷️ SEO e Metadata

As páginas individuais dos artigos utilizam o sistema de Metadata do Next.js.

A função:

```ts
generateMetadata()
```

permite gerar informações específicas para cada artigo, como:

* Título da página
* Descrição
* Informações utilizadas por mecanismos de busca
* Informações utilizadas ao compartilhar a página

A metadata é construída dinamicamente de acordo com o artigo acessado.

Exemplo:

```ts
export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const artigo = artigos.find(
    (artigo) =>
      slugify(artigo.titulo, {
        lower: true,
        strict: true,
      }) === slug
  );

  if (!artigo) {
    return {
      title: "Artigo não encontrado",
    };
  }

  return {
    title: artigo.titulo,
    description: artigo.descricao,
  };
}
```

## 📊 Dados dos artigos

Os artigos são armazenados em arquivos TypeScript dentro da pasta:

```text
app/lib/
```

As categorias possuem seus próprios conjuntos de dados:

```text
ArtigosPrincipal
ArtigosBrasil
ArtigosIA
ArtigosInovacao
ArtigosLinguagem
```

Cada artigo possui informações como:

```ts
{
  id: number;
  titulo: string;
  autor: string;
  datapublicacao: string;
  conteudoartigo: string;
  descricao: string;
}
```

Essa organização facilita a manutenção e separação dos conteúdos por categoria.

## 🧩 Componentização

O projeto utiliza componentes reutilizáveis para evitar repetição de código.

Entre eles estão:

### `Card`

Responsável pela apresentação individual dos artigos.

### `Grid`

Responsável por organizar os cards de artigos.

### `Title`

Componente reutilizável para os títulos das páginas.

### `Header`

Responsável pela navegação principal da aplicação.

Essa estrutura permite manter o código mais organizado, reutilizável e fácil de manter.

## 📱 Responsividade

O layout foi desenvolvido utilizando CSS e CSS Modules, buscando adaptar a interface para diferentes tamanhos de tela.

Os estilos dos componentes são isolados através de arquivos:

```text
*.module.css
```

Isso evita conflitos de estilos entre diferentes componentes da aplicação.

## 🚀 Como executar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/gbc84389-tech/Tech-Blog.git
```

### 2. Acesse a pasta do projeto

```bash
cd Tech-Blog
```

Caso o projeto esteja dentro de uma subpasta:

```bash
cd TechBlog
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Execute o projeto em desenvolvimento

```bash
npm run dev
```

A aplicação estará disponível normalmente em:

```text
http://localhost:3000
```

## 🏗️ Build de produção

Para gerar a versão de produção:

```bash
npm run build
```

Para iniciar a aplicação após o build:

```bash
npm start
```

Durante o build, o Next.js gera as páginas estáticas definidas através de `generateStaticParams()`.

## ☁️ Deploy

O projeto foi publicado utilizando a **Vercel**, plataforma otimizada para aplicações Next.js.

### Deploy

https://techblog-ashen.vercel.app/

O repositório do GitHub está conectado ao projeto, permitindo realizar novos deploys a partir das alterações enviadas para o repositório.

## 📚 Objetivos do projeto

Este projeto foi desenvolvido com o objetivo de praticar e consolidar conhecimentos em:

* Next.js
* React
* TypeScript
* App Router
* Roteamento dinâmico
* Dynamic Routes
* Static Site Generation (SSG)
* `generateStaticParams`
* `generateMetadata`
* SEO
* Slugs e URLs amigáveis
* Componentização
* CSS Modules
* Organização de projetos
* Git e GitHub
* Deploy com Vercel

## 🎓 Contexto acadêmico

Projeto desenvolvido como parte dos estudos de **Engenharia Front-End pela EBAC**, com foco na utilização prática do framework Next.js e de seus recursos de renderização e roteamento.

## 👨‍💻 Autor

**Gustavo Borges Camargos**

Estudante de **Sistemas de Informação** e **Engenharia Front-End**, com foco em desenvolvimento web e tecnologias modernas para construção de aplicações.

---

⭐ Se este projeto foi útil ou interessante para você, considere deixar uma estrela no repositório!
