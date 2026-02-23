import ProjectCard from "../ui/ProjectCard";

const projects = [
  {
    id: 2,
    src: "/projetos/astrologia_do_norte.png",
    title: "Astrologia do Norte",
    objetivo:
      "É um projeto de interface web focado em criar uma experiência visual elegante e performática para usuários interessados em astrologia. O projeto utiliza a arquitetura moderna do Next.js (App Router) para garantir SEO otimizado e carregamento rápido, combinado com componentes visuais sofisticados. ",
    tecnologia:
      "Next.js (App Router), React, Tailwind CSS, Framer Motion, TypeScript",
    resultado:
      "A utilização da ferramenta Vite como bundler, aliada ao Code Splitting (divisão de código) do React, otimizou o empacotamento dos assets e deixou o carregamento 3x mais rápido ao abrir a página inicial e a galeria de signos da aplicação, comparado a setups tradicionais.",
  },
  {
    id: 5,
    src: "/projetos/calculadora_imc.png",
    title: "Calculadora IMC",
    objetivo: "Placeholder para objetivo",
    tecnologia: "Placeholder para tecnologia",
    resultado: "Placeholder para resultado",
  },
  {
    id: 3,
    src: "/projetos/clone_disney+.png",
    title: "Clone Disney+",
    objetivo: "Placeholder para objetivo",
    tecnologia: "Placeholder para tecnologia",
    resultado: "Placeholder para resultado",
  },
  {
    id: 4,
    src: "/projetos/efood.png",
    title: "Efood",
    objetivo: "Placeholder para objetivo",
    tecnologia: "Placeholder para tecnologia",
    resultado: "Placeholder para resultado",
  },
  {
    id: 6,
    src: "/projetos/github_api.png",
    title: "Github API",
    objetivo: "Placeholder para objetivo",
    tecnologia: "Placeholder para tecnologia",
    resultado: "Placeholder para resultado",
  },
  {
    id: 1,
    src: "/projetos/kr_studio.jpg",
    title: "KR Studio",
    objetivo: "Placeholder para objetivo",
    tecnologia: "Placeholder para tecnologia",
    resultado: "Placeholder para resultado",
  },
  {
    id: 7,
    src: "/projetos/minhas_tarefas.png",
    title: "Minhas Tarefas",
    objetivo: "Placeholder para objetivo",
    tecnologia: "Placeholder para tecnologia",
    resultado: "Placeholder para resultado",
  },
  {
    id: 8,
    src: "/projetos/projeto_2.png",
    title: "Projeto 2",
    objetivo: "Placeholder para objetivo",
    tecnologia: "Placeholder para tecnologia",
    resultado: "Placeholder para resultado",
  },
  {
    id: 9,
    src: "/projetos/sorteador.png",
    title: "Sorteador",
    objetivo: "Placeholder para objetivo",
    tecnologia: "Placeholder para tecnologia",
    resultado: "Placeholder para resultado",
  },
  {
    id: 10,
    src: "/projetos/todo_vue.png",
    title: "Todo Vue",
    objetivo: "Placeholder para objetivo",
    tecnologia: "Placeholder para tecnologia",
    resultado: "Placeholder para resultado",
  },
  {
    id: 11,
    src: "/projetos/universo_hamburguer.png",
    title: "Universo Hamburguer",
    objetivo: "Placeholder para objetivo",
    tecnologia: "Placeholder para tecnologia",
    resultado: "Placeholder para resultado",
    githubUrl: "",
    siteUrl: "",
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

      <div className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-2 gap-8">
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
