"use client";

import React, { useEffect, useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="w-full bg-secondary py-10 px-4 md:px-40 flex flex-col items-center justify-center border-t border-accent/10">
      <div className="w-full max-w-[1200px] flex flex-col items-center justify-center gap-8">    
        <div className="flex gap-8 items-center">
          <a
            href="https://github.com/DouglassenG/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/40 hover:text-accent transition-all duration-300 hover:scale-110"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/douglas-michelini/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/40 hover:text-accent transition-all duration-300 hover:scale-110"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:contatodmichelini97@gmail.com"
            className="text-foreground/40 hover:text-accent transition-all duration-300 hover:scale-110"
          >
            <Mail size={24} />
          </a>
        </div>

        <div className="text-center space-y-2">
          <p className="text-sm font-semibold tracking-widest text-foreground/60 uppercase">
            Douglas Michelini
          </p>
          <p className="text-xs text-foreground/40 font-medium">
            &copy; {year} Todos os direitos reservados.
          </p>
        </div>
        
        <div className="h-1 w-12 bg-accent/20 rounded-full" />
      </div>
    </footer>
  );
};

export default Footer;
