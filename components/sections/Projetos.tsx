import ProjectCard from "../ui/ProjectCard";

const projects = [
  {
    id: 1,
    src: "/projetos/astrologia_do_norte.png",
    title: "Astrologia do Norte",
    githubUrl: "#",
    siteUrl: "#",
    hoverColor: "#2c3e50",
  },
  {
    id: 6,
    src: "/projetos/kr_studio.jpg",
    title: "KR Studio",
    githubUrl: "https://github.com/DouglassenG/kr_studio",
    siteUrl: "https://github.com/DouglassenG/kr_studio",
    hoverColor: "#34495e",
  },
  {
    id: 11,
    src: "/projetos/universo_hamburguer.png",
    title: "Universo Hamburguer",
    githubUrl: "#",
    siteUrl: "#",
    hoverColor: "#e67e22",
  },
  {
    id: 3,
    src: "/projetos/clone_disney+.png",
    title: "Clone Disney+",
    githubUrl: "#",
    siteUrl: "#",
    hoverColor: "#1d3557",
  },
  {
    id: 7,
    src: "/projetos/minhas_tarefas.png",
    title: "Minhas Tarefas",
    githubUrl: "#",
    siteUrl: "#",
    hoverColor: "#8e44ad",
  },
  {
    id: 5,
    src: "/projetos/github_api.png",
    title: "Github API",
    githubUrl: "#",
    siteUrl: "#",
    hoverColor: "#2c3e50",
  },
  {
    id: 2,
    src: "/projetos/calculadora_imc.png",
    title: "Calculadora IMC",
    githubUrl: "#",
    siteUrl: "#",
    hoverColor: "#16a085",
  },
  {
    id: 8,
    src: "/projetos/projeto_2.png",
    title: "Projeto 2",
    githubUrl: "#",
    siteUrl: "#",
    hoverColor: "#2980b9",
  },
  {
    id: 9,
    src: "/projetos/sorteador.png",
    title: "Sorteador",
    githubUrl: "#",
    siteUrl: "#",
    hoverColor: "#27ae60",
  },
  {
    id: 10,
    src: "/projetos/todo_vue.png",
    title: "Todo Vue",
    githubUrl: "#",
    siteUrl: "#",
    hoverColor: "#1abc9c",
  },
  {
    id: 4,
    src: "/projetos/efood.png",
    title: "Efood",
    githubUrl: "#",
    siteUrl: "#",
    hoverColor: "#c0392b",
  },
];

const Projetos = () => {
  return (
    <section className="py-20 px-4 md:px-20 flex flex-col items-center">
      <div className="mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
          Projetos
        </h2>
        <p className="text-lg text-foreground mt-2">
          Confira alguns dos meus projetos.
        </p>
      </div>

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            imageSrc={project.src}
            title={project.title}
            githubUrl={project.githubUrl}
            siteUrl={project.siteUrl}
            hoverColor={project.hoverColor}
          />
        ))}
      </div>
    </section>
  );
};

export default Projetos;
