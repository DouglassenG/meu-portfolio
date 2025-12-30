import React from "react";
import Image from "next/image";
import { theme } from "@/src/styles";
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] px-4 md:px-40 py-10">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-[1200px] gap-10">
        <div className="flex-1 space-y-4 flex flex-col md:block items-center md:items-start text-center md:text-left">
          <div className="flex flex-col md:block items-center w-full">
            <h1 className="text-4xl md:text-8xl font-bold leading-tight mb-4 md:mb-0 text-white md:text-[var(--foreground)]">
              Eu sou <br className="hidden md:block" /> Douglas Michelini
            </h1>

            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-4 w-full justify-center md:justify-start">
              <div
                className="relative w-[200px] h-[200px] md:hidden rounded-full overflow-hidden border-4"
                style={{ borderColor: theme.colors.accent }}
              >
                <Image
                  src="/image_avatar.jpeg"
                  alt="Douglas Michelini"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <p className="text-sm md:text-lg uppercase tracking-[0.2em] md:tracking-[0.3em] font-medium text-white md:text-[var(--muted)]">
                Desenvolvedor Full-Stack
              </p>
            </div>
          </div>

          <p className="max-w-md text-base md:text-lg hidden md:block text-white md:text-[var(--muted)]">
            Especialista em criar soluções web modernas e escaláveis. Foco em
            performance, design minimalista e experiência do usuário.
          </p>

          <div className="pt-8 flex flex-col gap-10 items-center md:items-start w-full">
            {/* Icons centered and slightly larger */}
            <div className="flex items-center justify-center md:justify-start gap-8 md:gap-6 w-full">
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

        {/* Desktop Image */}
        <div className="flex-1 hidden md:flex justify-end mt-12 md:mt-0">
          <div 
            className="relative w-[300px] h-[400px] md:w-[450px] md:h-[600px]"
            style={{ boxShadow: "0 0 60px rgba(0,0,0,0.5)" }}
          >
            <Image
              src="/image_avatar.jpeg"
              alt="Douglas Michelini"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
