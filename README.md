# MBL - Site Oficial

Projeto em React e TypeScript que implementa o portal do **Movimento Brasil Livre**. O objetivo é disponibilizar notícias, eventos e outras iniciativas do MBL em um site moderno e responsivo.

## ✨ Visão Geral
- Frontend construído com [Vite](https://vitejs.dev/) e [React](https://react.dev/).
- Estilização com [TailwindCSS](https://tailwindcss.com/).
- Roteamento via [React Router](https://reactrouter.com/) e componentes em [TypeScript](https://www.typescriptlang.org/).
- Projeto organizado por domínios para facilitar a escalabilidade.

## Índice
1. [Tecnologias](#-tecnologias)
2. [Estrutura do Projeto](#-estrutura-do-projeto)
3. [Requisitos](#-requisitos)
4. [Como Rodar](#-como-rodar)
5. [Scripts Disponíveis](#-scripts-disponiveis)
6. [Contribuição](#-contribuição)

## 🚀 Tecnologias
- **React 19**
- **TypeScript**
- **Vite 6**
- **TailwindCSS**
- **React Router**
- **Axios** para comunicação HTTP
- **Splide** para carrosséis de imagem

## 📁 Estrutura do Projeto
```bash
src/
├── assets/      # Imagens e fontes
├── components/  # Componentes reutilizáveis
├── layouts/     # Layouts gerais
├── pages/       # Páginas de rotas
├── routes/      # Definição de rotas
├── types/       # Tipagens globais
└── main.tsx     # Entrada da aplicação
```

## 🔧 Requisitos
- [Node.js](https://nodejs.org/) 18 ou superior
- [Yarn](https://yarnpkg.com/) 1.22 ou superior

## ▶️ Como Rodar
1. Clone este repositório.
2. Instale as dependências:
   ```bash
   yarn
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   yarn dev
   ```

O site será executado em `http://localhost:5173` (ou porta definida pelo Vite).

## 🔬 Scripts Disponíveis
- `yarn dev` &ndash; inicia o ambiente de desenvolvimento
- `yarn build` &ndash; gera a aplicação para produção
- `yarn preview` &ndash; visualiza a build gerada
- `yarn lint` &ndash; executa o ESLint
- `yarn lint:scss` &ndash; executa o Stylelint
