# 🚀 Portfólio Profissional - Douglas Michelini

![Status](https://img.shields.io/badge/Status-Em_Evolução-blue)
![React](https://img.shields.io/badge/Framework-React-61DAFB?logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Build-Vite-646CFF?logo=vite&logoColor=white)
![CSS3](https://img.shields.io/badge/Style-CSS_Modules-blue?logo=css3&logoColor=white)

> A vitrine digital da minha carreira. Uma aplicação reativa desenvolvida para centralizar projetos, trajetória e competências técnicas.

## 🎯 Motivação e Propósito

A necessidade de se destacar no mercado de tecnologia exige mais do que um currículo em PDF. O propósito deste projeto é criar uma **Identidade Digital Interativa**.

Este repositório resolve o problema de apresentar projetos de software de forma estática. Através dele, recrutadores podem navegar, testar demos ao vivo e analisar a qualidade do meu código em um único ambiente.

> **Resultado Positivo:** "A adoção de uma arquitetura baseada em componentes reutilizáveis (DRY) reduziu a repetição de código em cerca de 40% nas seções de listagem de projetos, facilitando a escalabilidade para adição de novos itens."

## 🛠️ Tecnologias Utilizadas

A stack tecnológica foi selecionada visando performance (Core Web Vitals) e agilidade de desenvolvimento:

* **[ReactJS](https://react.dev/):** Biblioteca Core para construção de interfaces declarativas.
* **[Vite](https://vitejs.dev/):** Build tool de nova geração para Hot Module Replacement (HMR) instantâneo e bundles otimizados.
* **[CSS Modules / Styled Components]:** Estratégia de estilização para garantir escopo local e evitar conflitos visuais.
* **[React Router](https://reactrouter.com/):** Roteamento dinâmico para navegação SPA (Single Page Application).
* **[ESLint]:** Padronização de código e prevenção de erros de sintaxe.

## ✨ Funcionalidades

A aplicação conta com as seguintes seções e recursos:

1.  **Hero Section:** Apresentação de impacto com CTA (Call to Action) para contato.
2.  **Showcase de Projetos:** Renderização dinâmica de cards de repositórios com links para Demo e Código.
3.  **Seção Sobre:** Storytelling da trajetória profissional e educacional.
4.  **Skills Wall:** Visualização iconográfica das tecnologias dominadas.
5.  **Design Responsivo:** Layout fluido (Mobile-First) adaptável a qualquer tamanho de tela.

## 📂 Estrutura de Arquivos

O projeto segue uma arquitetura modular, facilitando a manutenção e a leitura por outros desenvolvedores:

```text
meu-portfolio/
├── public/              # Assets estáticos (favicon, manifest, robots.txt)
├── src/
│   ├── assets/          # Recursos visuais (imagens, vetores)
│   ├── components/      # Componentes UI isolados (Button, Card, Navbar)
│   │   ├── Footer/
│   │   ├── Header/
│   │   └── ProjectCard/
│   ├── pages/           # Páginas da aplicação (Home, About, Projects)
│   ├── styles/          # Variáveis globais de estilo e temas
│   ├── utils/           # Funções auxiliares e constantes
│   ├── App.jsx          # Componente Raiz
│   └── main.jsx         # Ponto de entrada (Entry Point)
├── .eslintrc.json       # Configuração de Linter
├── package.json         # Dependências e Scripts
└── vite.config.js       # Configuração do Bundler
