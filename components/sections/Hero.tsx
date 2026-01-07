import React from "react";
import { theme } from "@/src/styles";
import {
  Github,
  Linkedin,
  Mail,
  Code2,
  Database,
  Cpu,
  Globe,
  Layers,
} from "lucide-react";
import { TypingText } from "@/components/ui/TypingText";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-4 md:px-40 py-10">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-[1200px] gap-10">
        <div className="flex-1 space-y-4 flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex flex-col items-center md:items-start w-full">
            <h1 className="text-2xl md:text-5xl font-bold leading-tight mb-4 md:mb-0 text-white md:text-[var(--foreground)]">
              <TypingText text="Douglas Michelini" speed={150} />
            </h1>

            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-4 w-full justify-center md:justify-start">
              <p className="text-sm md:text-lg uppercase tracking-[0.2em] md:tracking-[0.3em] font-medium text-white md:text-[var(--muted)]">
                <TypingText
                  text="Desenvolvedor Front-End"
                  speed={100}
                  delay={3000}
                />
              </p>
            </div>

            <div className="mt-6 md:mt-8 space-y-6 w-full max-w-lg">
              <div className="flex gap-4 justify-center md:justify-start text-white md:text-[var(--muted)] opacity-80">
                <Code2 size={24} />
                <Database size={24} />
                <Cpu size={24} />
                <Globe size={24} />
                <Layers size={24} />
              </div>
              <p className="text-base md:text-lg text-white/80 md:text-[var(--muted)]/90 leading-relaxed text-justify md:text-left flex items-center">
                Transformando ideias complexas em experiências digitais fluidas.
                Com domínio do front ao back-end, construo arquiteturas robustas
                e interfaces intuitivas que impulsionam o sucesso do seu
                projeto.
              </p>
            </div>
          </div>

          <div className="pt-8 flex flex-col gap-10 items-center md:items-start w-full">
            {/* Icons centered and slightly larger - Hidden on Desktop as they are in Navbar */}
            <div className="flex items-center justify-center md:hidden gap-8 md:gap-6 w-full">
              <a
                href="https://github.com/DouglassenG/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--accent)] transition-colors hover:scale-110 duration-300 text-white md:text-[var(--foreground)]"
              >
                <Github size={32} />
              </a>
              <a
                href="https://www.linkedin.com/in/douglas-michelini/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--accent)] transition-colors hover:scale-110 duration-300 text-white md:text-[var(--foreground)]"
              >
                <Linkedin size={32} />
              </a>
              <a
                href="mailto:contatodmichelini97@gmail.com"
                className="hover:text-[var(--accent)] transition-colors hover:scale-110 duration-300 text-white md:text-[var(--foreground)]"
              >
                <Mail size={32} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
