/* eslint-disable @next/next/no-img-element */
"use client";

import { Button } from "./button";
import {
  Github,
  ExternalLink,
  Code2,
  Target,
  CheckCircle2,
} from "lucide-react";

interface ProjectCardProps {
  imageSrc: string;
  title: string;
  objetivo: string;
  tecnologia: string;
  resultado: string;
  githubUrl?: string;
  siteUrl?: string;
  accentColor?: string; // Hex or tailwind color for the project's signature
}

const ProjectCard = ({
  imageSrc,
  title,
  objetivo,
  tecnologia,
  resultado,
  githubUrl,
  siteUrl,
  accentColor = "var(--accent)",
}: ProjectCardProps) => {
  return (
    <div
      className="group relative flex flex-col h-full rounded-2xl overflow-hidden border border-border/40 bg-card/50 backdrop-blur-md transition-all duration-500 hover:shadow-2xl hover:shadow-[var(--project-color)]/20 hover:-translate-y-2"
      style={{ "--project-color": accentColor } as React.CSSProperties}
    >
      {/* Dynamic Hover Border */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-[var(--project-color)]/40 rounded-2xl transition-colors duration-500 pointer-events-none z-10" />

      {/* Image Section - Focus on Visibility */}
      <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-1 opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover object-top transform transition-transform duration-700 group-hover:scale-110"
        />
                {/* Project Title Overlay on Image (Mobile/Tablet focus) */}
                <div className="absolute bottom-4 left-6 z-2">
                  <h3 className="text-xl md:text-2xl font-black text-foreground drop-shadow-lg tracking-tight uppercase italic">
                    {title}
                  </h3>
                </div>
              </div>
        
              {/* Content Section - Balanced Grid */}
              <div className="flex flex-col flex-grow p-6 space-y-5">
                
                {/* Objective & Result Split */}
                <div className="grid grid-cols-1 gap-4 text-pretty">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-[var(--project-color)]/90 font-bold text-[10px] uppercase tracking-widest">
                      <Target size={14} />
                      <span>Objetivo</span>
                    </div>
                    <p className="text-sm text-foreground/75 font-medium leading-relaxed line-clamp-3">
                      {objetivo}
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-emerald-400 font-bold text-[10px] uppercase tracking-widest">
                      <CheckCircle2 size={14} />
                      <span>Resultado</span>
                    </div>
                    <p className="text-sm text-foreground/75 font-medium leading-relaxed line-clamp-3">
                      {resultado}
                    </p>
                  </div>
                </div>
        
                {/* Technologies - Pill style */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-foreground/40 font-bold text-[10px] uppercase tracking-widest">
                    <Code2 size={14} />
                    <span>Tecnologias</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {tecnologia.split(",").map((tech) => (
                      <span 
                        key={tech.trim()}
                        className="px-2.5 py-1 text-[10px] font-bold bg-secondary/30 border border-border/20 text-foreground/80 rounded-full backdrop-blur-sm"
                      >
                        {tech.trim()}
                      </span>
                    ))}
                  </div>
                </div>

        {/* Actions - Pushed to bottom */}
        <div className="flex items-center gap-3 pt-4 mt-auto border-t border-border/20">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button
                variant="outline"
                className="w-full h-10 gap-2 border-border/50 bg-background/50 hover:bg-[var(--project-color)] hover:text-white hover:border-[var(--project-color)] transition-all duration-300"
              >
                <Github size={16} />
                <span className="hidden sm:inline">Código</span>
              </Button>
            </a>
          )}
          {siteUrl && (
            <a
              href={siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button className="w-full h-10 gap-2 bg-[var(--project-color)] text-white hover:brightness-110 shadow-lg shadow-[var(--project-color)]/20 transition-all duration-300">
                <ExternalLink size={16} />
                <span className="hidden sm:inline">Demo</span>
              </Button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

// Exemplo de uso
