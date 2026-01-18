# 🚀 Meu Portfólio - Douglas Michelini

![Status](https://img.shields.io/badge/Status-Em_Evolução-blue)
![React](https://img.shields.io/badge/Framework-React-61DAFB?logo=react&logoColor=black)
![JavaScript](https://img.shields.io/badge/Code-JavaScript-F7DF1E?logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/Style-CSS_Modules%2FStyled-blue?logo=css3&logoColor=white)

> A vitrine digital da minha carreira. Uma Single Page Application (SPA) desenvolvida para apresentar minha evolução técnica, projetos de destaque e competências como Desenvolvedor Web.

## 🎯 Motivação e Propósito

Como desenvolvedor em constante aprendizado, é essencial ter um espaço centralizado que reflita minha capacidade técnica atual. O propósito deste repositório é ir além de um currículo estático.

Este projeto resolve o desafio de **Personal Branding** (Marca Pessoal), criando uma interface imersiva onde recrutadores e clientes podem interagir com meus projetos (Live Demos), entender meu background (About Me) e entrar em contato diretamente, tudo envolto em boas práticas de código React.

## 🖼️ Demonstração Visual

https://meu-portfolio-gules-five.vercel.app/

## 🛠️ Tecnologias Utilizadas

A stack foi escolhida para garantir performance e manutenibilidade:

* **[React.js](https://react.dev/):** Biblioteca principal para construção da interface baseada em componentes reutilizáveis.
* **[React Router](https://reactrouter.com/):** (Se aplicável) Gerenciamento de navegação sem recarregamento de página (SPA).
* **[CSS3 / Styled Components]:** Estratégia de estilização para design responsivo e temas visuais.
* **[Vite / Webpack]:** Ferramenta de build para otimização de assets e Hot Module Replacement (HMR).

## ✨ Funcionalidades

A aplicação é composta por seções estratégicas:

1.  **Home/Hero:** Apresentação de impacto com breve introdução e CTA (Call to Action).
2.  **Showcase de Projetos:** Grid interativo exibindo os principais repositórios, com links para código e demo.
3.  **Tech Stack:** Visualização organizada das tecnologias dominadas (ícones/listas).
4.  **Responsividade:** Layout fluido que se adapta a Mobile, Tablet e Desktop.

## 📂 Estrutura de Arquivos

A organização do código segue o padrão de componentização do React, facilitando a escalabilidade:

```text
meu-portfolio/
├── public/              # Assets estáticos (favicon, manifest)
├── src/
│   ├── assets/          # Imagens, vetores e ícones
│   │   └── img/
│   ├── components/      # Componentes UI isolados (Button, Card, Navbar)
│   │   ├── Header/
│   │   └── ProjectCard/
│   ├── pages/           # Visualizações das rotas (Home, About, Contact)
│   ├── styles/          # Estilização global e variáveis de tema
│   ├── App.jsx          # Componente Raiz e Configuração de Rotas
│   └── main.jsx         # Ponto de entrada (Entry Point)
├── package.json         # Dependências e Scripts
└── README.md            # Documentação
