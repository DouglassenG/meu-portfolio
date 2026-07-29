// Exemplo de uso
import ProjectCard from "../ui/ProjectCard";

const projects = [
  {
    id: 1,
    src: "/projetos/dokei.png",
    title: "Dokei",
    objetivo:
      "Plataforma SaaS completa para Microempreendedores Individuais (MEIs) brasileiros, simplificando a gestão fiscal e financeira diante da reforma tributária.",
    tecnologia: "Next.js 14, TypeScript, Tailwind CSS, Prisma, Clerk, Vercel",
    resultado:
      "Sistema em produção com autenticação segura, dashboard responsivo, assistente IA integrada e fluxo financeiro completo do cadastro ao relatório.",
    githubUrl: "https://github.com/DouglassenG/dokei",
    siteUrl: "https://dokei-web-xhrp.vercel.app/",
  },
  {
    id: 2,
    src: "/projetos/industrial_dashboard.png",
    title: "Dashboard Industrial",
    objetivo:
      "Painel de monitoramento em tempo real para indicadores de produção industrial, com visualização de dados interativa e responsiva.",
    tecnologia: "React, TypeScript, Recharts, Tailwind CSS, Vite",
    resultado:
      "Dashboard de alta performance com gráficos dinâmicos e layout adaptável, entregando leitura instantânea de KPIs operacionais.",
    githubUrl: "https://github.com/DouglassenG/industrial_dashboard",
    siteUrl: "https://industrial-dashboard-web.vercel.app/",
  },
  {
    id: 3,
    src: "/projetos/agenda-medica.jpeg",
    title: "Agenda Médica",
    objetivo:
      "Sistema de agendamento médico com autenticação, gerenciamento de consultas e interface responsiva.",
    tecnologia: "Python, Flask, SQLite, Docker, Pytest, Tabulator.js",
    resultado:
      "Aplicação containerizada com Docker Compose, cobertura de 8 testes automatizados e interface glassmorphism funcional.",
    githubUrl: "https://github.com/DouglassenG/agenda-medica",
    siteUrl: "",
  },
  {
    id: 4,
    src: "/projetos/astrologia_do_norte.png",
    title: "Astrologia do Norte",
    objetivo:
      "Plataforma web sofisticada para consultas astrológicas, focada em uma experiência visual imersiva e mística.",
    tecnologia: "Next.js 15, React 19, Tailwind CSS, Framer Motion, TypeScript",
    resultado:
      "Aumento de 300% na velocidade de carregamento através de Code Splitting e otimização de ativos com Vite.",
    githubUrl: "https://github.com/DouglassenG/astrologia_do_norte",
    siteUrl: "https://astrologia-do-norte.vercel.app/",
  },
  {
    id: 5,
    src: "/projetos/kr_studio.jpg",
    title: "KR Studio",
    objetivo:
      "Uma presença digital elegante e performática. Este projeto representa a interface web do KR Studio, focando em serviços e portfólio visual.",
    tecnologia: "HTML5, SCSS, JavaScript, Gulp",
    resultado:
      "Otimização de assets e o uso do Vite para o bundle resultaram em um carregamento inicial (LCP) inferior a 1.5s.",
    githubUrl: "https://github.com/DouglassenG/kr_studio",
    siteUrl: "https://kr-studio.vercel.app/",
  },
  {
    id: 6,
    src: "/projetos/clone_disney+.png",
    title: "Clone Disney+",
    objetivo:
      "Recriação da interface do Disney+ para estudo de layouts complexos e consumo de APIs de streaming.",
    tecnologia: "React, Styled Components, Firebase, TMDB API",
    resultado:
      "Fidelidade visual de 95% em relação à plataforma original, com navegação fluida entre categorias.",
    githubUrl: "https://github.com/DouglassenG/clone_disneyplus",
    siteUrl: "https://clone-disneyplus-ruby-kappa.vercel.app/",
  },
  {
    id: 7,
    src: "/projetos/efood.png",
    title: "Efood",
    objetivo:
      "Plataforma de delivery completa, desde a seleção de restaurantes até o checkout seguro.",
    tecnologia: "React, Redux, TypeScript, Styled Components",
    resultado:
      "Fluxo de compra otimizado resultando em uma experiência de usuário sem fricção.",
    githubUrl: "https://github.com/DouglassenG/efood",
    siteUrl: "https://efood-green-xi.vercel.app/",
  },
  {
    id: 8,
    src: "/projetos/universo_hamburguer.png",
    title: "Universo Hamburguer",
    objetivo: "Cardápio digital interativo para hamburgueria artesanal.",
    tecnologia: "HTML, CSS, JavaScript, jQuery",
    resultado:
      "Experiência de escolha de produtos visualmente apetitosa e direta.",
    githubUrl: "https://github.com/DouglassenG/universo_hamburguer",
    siteUrl: "https://universo-hamburguer.vercel.app/",
  },
  {
    id: 9,
    src: "/projetos/github_api.png",
    title: "Github API",
    objetivo:
      "Explorador de perfis e repositórios do GitHub utilizando a API oficial da plataforma.",
    tecnologia: "React, Fetch API, Tailwind CSS, GitHub API",
    resultado:
      "Visualização clara de métricas de desenvolvedores com busca em tempo real.",
    githubUrl: "https://github.com/DouglassenG/github_perfil",
    siteUrl: "https://github-perfil-dmsr.vercel.app/",
  },
  {
    id: 10,
    src: "/projetos/minhas_tarefas.png",
    title: "Minhas Tarefas",
    objetivo:
      "Gerenciador de tarefas produtivo com sistema de categorias e prioridades.",
    tecnologia: "React, Redux Toolkit, Styled Components",
    resultado:
      "Interface organizada que facilita a gestão do dia a dia do usuário.",
    githubUrl: "https://github.com/DouglassenG/minhas-tarefas",
    siteUrl: "https://minhas-tarefas-one-gamma.vercel.app/",
  },
  {
    id: 11,
    src: "/projetos/calculadora_imc.png",
    title: "Calculadora IMC",
    objetivo:
      "Ferramenta de saúde para cálculo rápido de Índice de Massa Corporal com feedback visual instantâneo.",
    tecnologia: "React, JavaScript, CSS Modules, Responsive Design",
    resultado:
      "Interface intuitiva que guia o usuário através dos parâmetros de saúde de forma clara.",
    githubUrl: "https://github.com/DouglassenG/projeto_react_imc",
    siteUrl: "https://projeto-react-imc-nine.vercel.app/",
  },
  {
    id: 12,
    src: "/projetos/sorteador.png",
    title: "Sorteador",
    objetivo:
      "Aplicação simples e eficaz para realização de sorteios numéricos.",
    tecnologia: "HTML, CSS, JavaScript, Less",
    resultado:
      "Ferramenta leve e funcional para sorteios rápidos em qualquer dispositivo.",
    githubUrl: "https://github.com/DouglassenG/sorteador_grunt",
    siteUrl: "https://sorteador-grunt-two-smoky.vercel.app/",
  },
  {
    id: 13,
    src: "/projetos/todo_vue.png",
    title: "Todo Vue",
    objetivo:
      "Aplicação de lista de tarefas desenvolvida para explorar o ecossistema Vue.js.",
    tecnologia: "Vue.js 3, Composition API, Vite",
    resultado:
      "Demonstração de reatividade e gerenciamento de estado eficiente no Vue.",
    githubUrl: "https://github.com/DouglassenG/todo-vue",
    siteUrl: "https://todo-vue-rose-beta.vercel.app/",
  },
];

const Projetos = () => {
  return (
    <section className="relative py-24 px-4 sm:px-8 md:px-16 lg:px-24 flex flex-col items-center overflow-hidden min-h-screen">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[10%] right-[5%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] left-[5%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />
      </div>

      <div className="mb-20 text-center space-y-6 max-w-3xl">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-foreground uppercase">
          Projetos <span className="text-accent">Destaque</span>
        </h2>
        <div className="h-1.5 w-24 bg-accent mx-auto rounded-full" />
        <p className="text-lg md:text-xl text-muted-foreground font-medium max-w-2xl mx-auto">
          Uma seleção cuidadosa de projetos que demonstram minha expertise em
          construir interfaces modernas, performáticas e escaláveis.
        </p>
      </div>

      <div className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            imageSrc={project.src}
            title={project.title}
            objetivo={project.objetivo}
            tecnologia={project.tecnologia}
            resultado={project.resultado}
            githubUrl={project.githubUrl}
            siteUrl={project.siteUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default Projetos;
