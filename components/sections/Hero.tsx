import React from "react";
import { Github, Code2, Database, Cpu, Globe, Layers } from "lucide-react";
import { TypingText } from "@/components/ui/TypingText";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative flex items-center min-h-[calc(100vh-80px)] px-4 md:px-16 lg:px-40 py-10 overflow-hidden">
      {/* Background Image — visivel em ambos os modos */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero.jpg')" }}
        />

        {/* Light mode: overlay escuro sutil para dar contraste */}
        {/* Dark mode: overlay mais atmosferico preservando a imagem */}
        <div className="absolute inset-0 bg-black/20 dark:bg-black/40" />

        {/* Glow teal sutil no canto — mantido dos blurs originais */}
        <div className="absolute top-[20%] left-[10%] w-64 h-64 bg-accent/8 rounded-full blur-3xl" />
        <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      {/* Conteudo dentro do Card Glass */}
      <div className="w-full max-w-[1200px] mx-auto">
        <div className="hero-glass-card rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 max-w-xl space-y-6">
          {/* Nome */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight tracking-tighter text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
            <TypingText text="Douglas Michelini" speed={150} />
          </h1>

          {/* Badge Desenvolvedor */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/40 bg-accent/10">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <p className="text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] md:tracking-[0.3em] font-semibold text-accent">
              <TypingText
                text="Desenvolvedor Full Stack"
                speed={100}
                delay={3000}
              />
            </p>
          </div>

          {/* Icones de tech */}
          <div className="inline-flex gap-4 sm:gap-6 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white/60">
            <Code2
              size={18}
              className="hover:text-accent transition-colors sm:w-5 sm:h-5"
            />
            <Database
              size={18}
              className="hover:text-accent transition-colors sm:w-5 sm:h-5"
            />
            <Cpu
              size={18}
              className="hover:text-accent transition-colors sm:w-5 sm:h-5"
            />
            <Globe
              size={18}
              className="hover:text-accent transition-colors sm:w-5 sm:h-5"
            />
            <Layers
              size={18}
              className="hover:text-accent transition-colors sm:w-5 sm:h-5"
            />
          </div>

          {/* Descricao */}
          <p className="text-sm sm:text-base md:text-lg text-white/70 leading-relaxed max-w-md border-l-2 border-accent/50 pl-4">
            Transformando ideias complexas em experiências digitais fluidas.
            Construo arquiteturas robustas e interfaces intuitivas que
            impulsionam o sucesso do seu projeto.
          </p>

          {/* Botoes */}
          <div className="flex flex-wrap gap-3 sm:gap-4 pt-2">
            <a
              href="https://github.com/DouglassenG/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="default"
                className="h-10 sm:h-12 px-6 sm:px-8 rounded-full font-bold uppercase tracking-wider bg-white text-black hover:bg-white/90 shadow-lg shadow-black/20 transition-all duration-300"
              >
                <Github className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                GITHUB
              </Button>
            </a>
            <Link href="/projetos">
              <Button
                variant="outline"
                className="h-10 sm:h-12 px-6 sm:px-8 rounded-full font-bold uppercase tracking-wider border-accent/40 text-black hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300"
              >
                MEUS PROJETOS
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
