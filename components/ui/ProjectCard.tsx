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
  accentColor?: string;
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
      className="group relative flex flex-col h-full rounded-3xl overflow-hidden border border-border/10 bg-card/40 backdrop-blur-xl transition-all duration-500 hover:shadow-2xl hover:shadow-[var(--project-color)]/5 hover:-translate-y-2"
      style={{ "--project-color": accentColor } as React.CSSProperties}
    >
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-40 h-40 bg-[var(--project-color)]/10 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      {/* Image Section */}
      <div className="relative h-56 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
        />
        {/* Technology Badge Overlay */}
        <div className="absolute bottom-4 left-4 z-20 flex flex-wrap gap-1.5 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
           <span className="px-2 py-0.5 text-[9px] font-bold bg-background/80 backdrop-blur-md text-foreground rounded-full border border-border/10">
             Featured Project
           </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-grow p-7 space-y-6">
        {/* Title & Header */}
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-[var(--project-color)] animate-pulse" />
            <h3 className="text-2xl font-bold text-foreground tracking-tight group-hover:text-[var(--project-color)] transition-colors duration-300">
              {title}
            </h3>
          </div>
          <div className="h-1 w-12 bg-border/10 rounded-full group-hover:w-full group-hover:bg-[var(--project-color)]/20 transition-all duration-700" />
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 gap-5">
          <div className="space-y-2.5">
            <div className="flex items-center gap-2 text-muted-foreground font-bold text-[10px] uppercase tracking-[0.2em]">
              <Target size={14} className="text-[var(--project-color)]" />
              <span>Objetivo</span>
            </div>
            <p className="text-sm text-foreground/80 leading-relaxed font-medium">
              {objetivo}
            </p>
          </div>

          <div className="space-y-2.5">
            <div className="flex items-center gap-2 text-muted-foreground font-bold text-[10px] uppercase tracking-[0.2em]">
              <CheckCircle2 size={14} className="text-emerald-500" />
              <span>Impacto</span>
            </div>
            <p className="text-sm text-foreground/70 leading-relaxed italic">
              {resultado}
            </p>
          </div>
        </div>

        {/* Technologies - Pill style */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-muted-foreground font-bold text-[10px] uppercase tracking-[0.2em]">
            <Code2 size={14} />
            <span>Stack</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {tecnologia.split(",").map((tech) => (
              <span
                key={tech.trim()}
                className="px-3 py-1 text-[10px] font-bold bg-secondary/50 text-foreground/70 rounded-full border border-border/10 hover:border-[var(--project-color)]/30 hover:text-foreground transition-all duration-300"
              >
                {tech.trim()}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 pt-6 mt-auto border-t border-border/10">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button
                variant="outline"
                className="w-full h-11 gap-2 rounded-xl border-border/10 bg-background/50 hover:bg-foreground hover:text-background transition-all duration-300"
              >
                <Github size={18} />
                <span className="font-semibold text-xs">REPOSITÓRIO</span>
              </Button>
            </a>
          )}
          {siteUrl && siteUrl !== "#" && (
            <a
              href={siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button 
                className="w-full h-11 gap-2 rounded-xl bg-accent text-accent-foreground hover:brightness-110 shadow-lg shadow-accent/10 transition-all duration-300"
              >
                <ExternalLink size={18} />
                <span className="font-semibold text-xs">VISITAR</span>
              </Button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
