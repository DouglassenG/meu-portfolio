import React from "react";
import {
  Github,
  Code2,
  Database,
  Cpu,
  Globe,
  Layers,
} from "lucide-react";
import { TypingText } from "@/components/ui/TypingText";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4 md:px-40 py-10 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[20%] left-[10%] w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-[1200px] gap-10">
        <div className="flex-1 space-y-6 flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex flex-col items-center md:items-start w-full">
            <h1 className="text-4xl md:text-7xl font-bold leading-tight mb-4 text-foreground tracking-tighter">
              <TypingText text="Douglas Michelini" speed={150} />
            </h1>

            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-4 w-full justify-center md:justify-start">
              <p className="text-sm md:text-xl uppercase tracking-[0.2em] md:tracking-[0.3em] font-semibold text-accent">
                <TypingText
                  text="Desenvolvedor Front-End"
                  speed={100}
                  delay={3000}
                />
              </p>
            </div>

            <div className="mt-8 space-y-8 w-full max-w-2xl">
              <div className="flex gap-6 justify-center md:justify-start text-muted-foreground">
                <Code2 size={20} className="hover:text-accent transition-colors" />
                <Database size={20} className="hover:text-accent transition-colors" />
                <Cpu size={20} className="hover:text-accent transition-colors" />
                <Globe size={20} className="hover:text-accent transition-colors" />
                <Layers size={20} className="hover:text-accent transition-colors" />
              </div>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                Transformando ideias complexas em experiências digitais fluidas.
                Construo arquiteturas robustas e interfaces intuitivas que impulsionam o sucesso do seu projeto.
              </p>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
                <a
                  href="https://github.com/DouglassenG/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="default" className="h-12 px-8 rounded-full font-bold uppercase tracking-wider shadow-lg shadow-foreground/5 hover:scale-105 transition-all">
                    <Github className="mr-2 h-5 w-5" /> GITHUB
                  </Button>
                </a>
                <Link href="/projetos">
                  <Button variant="outline" className="h-12 px-8 rounded-full font-bold uppercase tracking-wider border-accent/20 hover:bg-accent/10 hover:border-accent hover:scale-105 transition-all">
                    MEUS PROJETOS
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
