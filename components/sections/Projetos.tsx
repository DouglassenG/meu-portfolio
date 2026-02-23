import ProjectCard from "../ui/ProjectCard";

const projects = [
  {
    id: 2,
    src: "/projetos/astrologia_do_norte.png",
    title: "Astrologia do Norte",
    objetivo:
      "Plataforma web sofisticada para consultas astrológicas, focada em uma experiência visual imersiva e mística.",
    tecnologia: "Next.js 15, React 19, Tailwind CSS, Framer Motion, TypeScript",
    resultado:
      "Aumento de 300% na velocidade de carregamento através de Code Splitting e otimização de ativos com Vite.",
    githubUrl: "https://github.com/DouglassenG/",
    siteUrl: "https://astrologia-do-norte.vercel.app/",
    accentColor: "#7C3AED", // Violet
  },
  {
    id: 5,
    src: "/projetos/calculadora_imc.png",
    title: "Calculadora IMC",
    objetivo:
      "Ferramenta de saúde para cálculo rápido de Índice de Massa Corporal com feedback visual instantâneo.",
    tecnologia: "React, JavaScript, CSS Modules, Responsive Design",
    resultado:
      "Interface intuitiva que guia o usuário através dos parâmetros de saúde de forma clara e objetiva.",
    githubUrl: "https://github.com/DouglassenG/",
    siteUrl: "#",
    accentColor: "#10B981", // Emerald
  },
  {
    id: 3,
    src: "/projetos/clone_disney+.png",
    title: "Clone Disney+",
    objetivo:
      "Recriação da interface do Disney+ para estudo de layouts complexos e consumo de APIs de streaming.",
    tecnologia: "React, Styled Components, Firebase, TMDB API",
    resultado:
      "Fidelidade visual de 95% em relação à plataforma original, com navegação fluida entre categorias.",
    githubUrl: "https://github.com/DouglassenG/",
    siteUrl: "#",
    accentColor: "#1E40AF", // Blue
  },
  {
    id: 4,
    src: "/projetos/efood.png",
    title: "Efood",
    objetivo:
      "Plataforma de delivery completa, desde a seleção de restaurantes até o checkout seguro.",
    tecnologia: "React, Redux, TypeScript, Styled Components",
    resultado:
      "Fluxo de compra otimizado resultando em uma experiência de usuário sem fricção.",
    githubUrl: "https://github.com/DouglassenG/",
    siteUrl: "#",
    accentColor: "#EF4444", // Red
  },
  {
    id: 6,
    src: "/projetos/github_api.png",
    title: "Github API",
    objetivo:
      "Explorador de perfis e repositórios do GitHub utilizando a API oficial da plataforma.",
    tecnologia: "React, Fetch API, Tailwind CSS, GitHub API",
    resultado:
      "Visualização clara de métricas de desenvolvedores com busca em tempo real.",
    githubUrl: "https://github.com/DouglassenG/",
    siteUrl: "#",
    accentColor: "#374151", // Gray-700
  },
  {
    id: 1,
    src: "/projetos/kr_studio.jpg",
    title: "KR Studio",
    objetivo:
      "Landing page premium para estúdio de design, focada em portfólio visual e conversão.",
    tecnologia: "HTML5, SCSS, JavaScript, Gulp",
    resultado:
      "Design minimalista que destaca os trabalhos do estúdio com alta performance.",
    githubUrl: "https://github.com/DouglassenG/",
    siteUrl: "#",
    accentColor: "#D97706", // Amber
  },
  {
    id: 7,
    src: "/projetos/minhas_tarefas.png",
    title: "Minhas Tarefas",
    objetivo:
      "Gerenciador de tarefas produtivo com sistema de categorias e prioridades.",
    tecnologia: "React, Redux Toolkit, Styled Components",
    resultado:
      "Interface organizada que facilita a gestão do dia a dia do usuário.",
    githubUrl: "https://github.com/DouglassenG/",
    siteUrl: "#",
    accentColor: "#3B82F6", // Blue-500
  },
  {
    id: 9,
    src: "/projetos/sorteador.png",
    title: "Sorteador",
    objetivo:
      "Aplicação simples e eficaz para realização de sorteios numéricos.",
    tecnologia: "HTML, CSS, JavaScript, Less",
    resultado:
      "Ferramenta leve e funcional para sorteios rápidos em qualquer dispositivo.",
    githubUrl: "https://github.com/DouglassenG/",
    siteUrl: "#",
    accentColor: "#F59E0B", // Amber-500
  },
  {
    id: 10,
    src: "/projetos/todo_vue.png",
    title: "Todo Vue",
    objetivo:
      "Aplicação de lista de tarefas desenvolvida para explorar o ecossistema Vue.js.",
    tecnologia: "Vue.js 3, Composition API, Vite",
    resultado:
      "Demonstração de reatividade e gerenciamento de estado eficiente no Vue.",
    githubUrl: "https://github.com/DouglassenG/",
    siteUrl: "#",
    accentColor: "#42B883", // Vue Green
  },
  {
    id: 11,
    src: "/projetos/universo_hamburguer.png",
    title: "Universo Hamburguer",
    objetivo: "Cardápio digital interativo para hamburgueria artesanal.",
    tecnologia: "HTML, CSS, JavaScript, jQuery",
    resultado:
      "Experiência de escolha de produtos visualmente apetitosa e direta.",
    githubUrl: "https://github.com/DouglassenG/",
    siteUrl: "#",
    accentColor: "#854D0E", // Brown-800
  },
];

const Projetos = () => {
  return (
    <section className="relative py-24 px-4 sm:px-8 md:px-16 lg:px-24 flex flex-col items-center overflow-hidden">
      {/* Background decoration to match modern UI */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] opacity-50" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] opacity-50" />
      </div>

      <div className="mb-16 text-center space-y-4 max-w-2xl">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase italic">
          Projetos <span className="text-accent">Selecionados</span>
        </h2>
        <div className="h-1.5 w-24 bg-accent mx-auto rounded-full" />
        <p className="text-lg text-muted-foreground font-medium">
          Uma vitrine de soluções digitais que unem design impactante e
          tecnologia de ponta.
        </p>
      </div>

      <div className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
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
            accentColor={project.accentColor}
          />
        ))}
      </div>
    </section>
  );
};

export default Projetos;
