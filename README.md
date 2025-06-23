# 🧾 Dashboard Blackrun – React + Vite

Este projeto é um dashboard moderno de vendas feito com **React + Vite**, focado em performance, escalabilidade e organização. Ele utiliza uma arquitetura de pastas baseada em **domínios (features)**, seguindo as melhores práticas de desenvolvimento frontend.

## 🚀 Tecnologias

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/)
- [Zustand](https://zustand-demo.pmnd.rs/) ou [Redux Toolkit](https://redux-toolkit.js.org/) (opcional)
- [Axios](https://axios-http.com/)
- [Recharts](https://recharts.org/en-US) ou [Victory](https://formidable.com/open-source/victory/) para gráficos
- [TailwindCSS](https://tailwindcss.com/) para estilos

---

## 📁 Estrutura de Pastas

```bash
src/
├── assets/              # Imagens, ícones, fontes, estilos globais
├── components/          # Componentes genéricos reutilizáveis (ex: Button, Card)
│   └── ui/              # Elementos visuais puros e desacoplados
├── features/            # Domínios do app (cada feature tem seus próprios arquivos)
│   ├── sales/           # Funcionalidades relacionadas a vendas
│   │   ├── components/  # Componentes específicos da feature
│   │   ├── pages/       # Páginas relacionadas
│   │   ├── hooks/       # Hooks locais da feature
│   │   ├── services/    # Lógica de dados (API, mock, etc)
│   │   └── salesSlice.ts # (se usar Zustand ou Redux)
│   └── users/           # Exemplo de outra feature
├── layouts/             # Layouts reutilizáveis com header/sidebar
├── pages/               # Páginas principais conectadas ao sistema de rotas
├── routes/              # Definição de rotas do app
├── store/               # Estado global (Zustand, Redux, etc)
├── hooks/               # Hooks reutilizáveis e independentes
├── utils/               # Funções auxiliares (formatDate, calcularTotal, etc)
├── services/            # Configuração de serviços globais (ex: axios instance)
├── constants/           # Constantes globais do sistema
├── config/              # Configurações gerais (tema, ambiente)
└── main.jsx             # Entrada principal da aplicação
```

## ⚡️ Instalando Dependências do Projeto

- [Yarn]

Para iniciar o Projeto local:
    yarn install
    yarn dev

Extensões necessárias:
    ESLint
    Prettier ESLint
