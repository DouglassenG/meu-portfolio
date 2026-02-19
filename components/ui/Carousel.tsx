"use client";

import { useState } from "react";
import { Button } from "./button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProjectCard from "./ProjectCard";

interface Project {
  id: number;
  src: string;
  title: string;
  objetivo: string;
  tecnologia: string;
  resultado: string;
  githubUrl?: string;
  siteUrl?: string;
}

const projects: Project[] = [
  {
    id: 2,
    src: "/projetos/astrologia_do_norte.png",
    title: "Astrologia do Norte",
    objetivo:
      "É um projeto de interface web focado em criar uma experiência visual elegante e performática para usuários interessados em astrologia. O projeto utiliza a arquitetura moderna do Next.js (App Router) para garantir SEO otimizado e carregamento rápido, combinado com componentes visuais sofisticados. ",
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
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? projects.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === projects.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="overflow-hidden relative">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {projects.map((project) => (
            <div className="w-full flex-shrink-0" key={project.id}>
              <ProjectCard
                imageSrc={project.src}
                title={project.title}
                objetivo={project.objetivo}
                tecnologia={project.tecnologia}
                resultado={project.resultado}
                githubUrl={project.githubUrl}
                siteUrl={project.siteUrl}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-4 sm:hidden">
        <Button
          onClick={goToPrevious}
          className="sm:absolute sm:left-0 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2 bg-transparent hover:bg-transparent text-white"
          variant="outline"
          size="icon"
        >
          <ChevronLeft className="h-8 w-8" />
        </Button>
        <Button
          onClick={goToNext}
          className="sm:absolute sm:right-0 sm:transform sm:translate-x-1/2 sm:-translate-y-1/2 bg-transparent hover:bg-transparent text-white"
          variant="outline"
          size="icon"
        >
          <ChevronRight className="h-8 w-8" />
        </Button>
      </div>
      {/* New absolute buttons for desktop/tablet, hidden on mobile */}
      <Button
        onClick={goToPrevious}
        className="hidden sm:block absolute left-[-3rem] top-1/2 -translate-y-1/2 transform bg-transparent hover:bg-transparent text-white z-10"
        variant="outline"
        size="icon-lg"
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>
      <Button
        onClick={goToNext}
        className="hidden sm:block absolute right-[-3rem] top-1/2 -translate-y-1/2 transform bg-transparent hover:bg-transparent text-white z-10"
        variant="outline"
        size="icon-lg"
      >
        <ChevronRight className="h-8 w-8" />
      </Button>
    </div>
  );
};

export default Carousel;
