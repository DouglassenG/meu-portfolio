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
      className="group relative flex flex-col h-full rounded-2xl overflow-hidden border border-border/20 bg-background/20 backdrop-blur-xl transition-all duration-500 hover:shadow-2xl hover:shadow-[var(--project-color)]/10 hover:-translate-y-2"
      style={{ "--project-color": accentColor } as React.CSSProperties}
    >
      {/* Dynamic Hover Border */}
      <div className="absolute inset-0 border border-transparent group-hover:border-[var(--project-color)]/30 rounded-2xl transition-colors duration-500 pointer-events-none z-10" />

      {/* Image Section - Focus on Visibility */}
      <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden border-b border-border/10">
        <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent z-1 opacity-20" />
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover object-top transform transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Content Section - Balanced Grid */}
      <div className="flex flex-col flex-grow p-6 space-y-5">
        {/* Project Title - Cleaner and aligned with Hero style */}
        <div className="flex items-center gap-3">
          <div className="h-8 w-1 rounded-full bg-[var(--project-color)]" />
          <h3 className="text-xl md:text-2xl font-bold text-foreground tracking-tight">
            {title}
          </h3>
        </div>
        
        {/* Objective & Result Split */}
        <div className="grid grid-cols-1 gap-4 text-pretty">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[var(--project-color)]/80 font-bold text-[10px] uppercase tracking-widest">
              <Target size={14} />
              <span>Objetivo</span>
            </div>
            <p className="text-sm text-foreground/70 font-medium leading-relaxed line-clamp-3">
              {objetivo}
            </p>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-emerald-400/80 font-bold text-[10px] uppercase tracking-widest">
              <CheckCircle2 size={14} />
              <span>Resultado</span>
            </div>
            <p className="text-sm text-foreground/70 font-medium leading-relaxed line-clamp-3">
              {resultado}
            </p>
          </div>
        </div>

        {/* Technologies - Pill style */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-foreground/30 font-bold text-[10px] uppercase tracking-widest">
            <Code2 size={14} />
            <span>Tecnologias</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {tecnologia.split(",").map((tech) => (
              <span 
                key={tech.trim()}
                className="px-2.5 py-1 text-[10px] font-bold bg-foreground/5 border border-foreground/10 text-foreground/60 rounded-full"
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
