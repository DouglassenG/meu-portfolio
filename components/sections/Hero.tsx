import React from 'react';
import Image from 'next/image';
import { theme } from '@/src/styles';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      className="flex flex-col md:flex-row items-center justify-between min-h-[80vh] px-40"
      style={{ backgroundColor: theme.colors.background }}
    >
      <div className="flex-1 space-y-4">
        <p className="text-sm uppercase tracking-[0.3em]" style={{ color: theme.colors.muted }}>
          Desenvolvedor Fullstack
        </p>
        <h1 className="text-6xl md:text-8xl font-bold leading-tight" style={{ color: theme.colors.foreground }}>
          Eu sou <br /> Douglas Michelini
        </h1>
        <p className="max-w-md text-lg" style={{ color: theme.colors.muted }}>
          Especialista em criar soluções web modernas e escaláveis. 
          Foco em performance, design minimalista e experiência do usuário.
        </p>
        
        <div className="pt-8 flex flex-col gap-10">
           <button 
             className="w-fit px-8 py-4 border-2 font-medium uppercase tracking-widest transition-all hover:bg-white hover:text-black"
             style={{ borderColor: theme.colors.foreground, color: theme.colors.foreground }}
           >
             Entre em contato
           </button>

          <div className="flex items-center gap-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
              <Github size={24} style={{ color: theme.colors.foreground }} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
              <Linkedin size={24} style={{ color: theme.colors.foreground }} />
              </a>
              <a href="mailto:contato@exemplo.com" className="hover:opacity-70 transition-opacity">
                <Mail size={24} style={{ color: theme.colors.foreground }} />
              </a>
           </div>
        </div>
      </div>
      <div className="flex-1 flex justify-end mt-12 md:mt-0">
        <div className="relative w-[300px] h-[400px] md:w-[450px] md:h-[600px] transition-all duration-500">
          <Image
            src="/image_avatar.jpeg"
            alt="Douglas Michelini"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;