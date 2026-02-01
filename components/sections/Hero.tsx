import React from "react";
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
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      className="flex flex-col items-center justify-center min-h-screen px-4 md:px-40 py-10"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-[1200px] gap-10">
        <div className="flex-1 space-y-4 flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex flex-col items-center md:items-start w-full">
            <h1 className="text-2xl md:text-5xl font-bold leading-tight mb-4 md:mb-0 text-gray-100 md:text-gray-50">
              <TypingText text="Douglas Michelini" speed={150} />
            </h1>

            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-4 w-full justify-center md:justify-start">
              <p className="text-sm md:text-lg uppercase tracking-[0.2em] md:tracking-[0.3em] font-medium text-gray-200 md:text-gray-100">
                <TypingText
                  text="Desenvolvedor Front-End"
                  speed={100}
                  delay={3000}
                />
              </p>
            </div>

            <div className="mt-6 md:mt-8 space-y-6 w-full max-w-lg">
              <div className="flex gap-4 justify-center md:justify-start text-gray-200 md:text-gray-100 opacity-80">
                <Code2 size={18} />
                <Database size={18} />
                <Cpu size={18} />
                <Globe size={18} />
                <Layers size={18} />
              </div>
              <p className="text-base md:text-lg text-gray-300 md:text-gray-200 leading-relaxed text-justify md:text-left flex items-center">
                Transformando ideias complexas em experiências digitais fluidas.
                Com domínio do front ao back-end, construo arquiteturas robustas
                e interfaces intuitivas que impulsionam o sucesso do seu
                projeto.
              </p>
              <div className="flex gap-4 justify-center md:justify-start">
                <a
                  href="https://github.com/DouglassenG/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="btn-github">
                    <Github className="mr-2 h-4 w-4" /> GITHUB
                  </Button>
                </a>
                <a href="/projetos">
                  <Button className="btn-projetos">MEUS PROJETOS</Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
