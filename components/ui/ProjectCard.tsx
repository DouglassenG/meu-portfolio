/* eslint-disable @next/next/no-img-element */
"use client";

import { Button } from "./button";
import { Github } from "lucide-react";

interface ProjectCardProps {
  imageSrc: string;
  title: string;
  objetivo: string;
  tecnologia: string;
  resultado: string;
  githubUrl?: string;
  siteUrl?: string;
}

const ProjectCard = ({
  imageSrc,
  title,
  objetivo,
  tecnologia,
  resultado,
  githubUrl,
  siteUrl,
}: ProjectCardProps) => {
  return (
    <div className="flex flex-col rounded-lg overflow-hidden shadow-md border-2 border-transparent bg-card text-card-foreground p-4 sm:p-6 transition-all duration-300 hover:brightness-90">
      <h3 className="text-lg sm:text-xl font-bold mb-4 text-center">{title}</h3>
      <div className="relative w-full h-48 sm:h-64 mb-4">
        <img
          src={imageSrc}
          alt={title}
          className="object-cover w-full h-full rounded-md"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-grow mb-4">
        {/* Right column: Objective and Result */}
        <div className="md:col-start-2">
          <h4 className="font-semibold text-base sm:text-lg">
            Objetivo do Projeto
          </h4>
          <p className="text-sm text-muted-foreground mb-4">{objetivo}</p>

          <h4 className="font-semibold text-base sm:text-lg">Resultado</h4>
          <p className="text-sm text-muted-foreground">{resultado}</p>
        </div>

        {/* Left column: Technologies */}
        <div className="md:col-start-1 md:row-start-1">
          <h4 className="font-semibold text-base sm:text-lg">
            Tecnologia Utilizada
          </h4>
          <p className="text-sm text-muted-foreground">{tecnologia}</p>
        </div>
      </div>

      <div className="flex justify-center space-x-4 mt-auto">
        {githubUrl && (
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm" className="card-btn-github">
              <Github className="mr-2 h-4 w-4" /> GITHUB
            </Button>
          </a>
        )}
        {siteUrl && (
          <a href={siteUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="secondary" size="sm" className="card-btn-site">
              Visite o projeto
            </Button>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;

// Exemplo de uso fsdlfjaslkdjflkasj
