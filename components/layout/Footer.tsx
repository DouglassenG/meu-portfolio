"use client";

import React, { useEffect, useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="w-full bg-accent py-4 px-4 md:px-40 flex flex-col items-center justify-center">
      <div className="w-full max-w-[1200px] flex flex-col items-center justify-center gap-6">
        <div className="flex gap-6">
          <a
            href="https://github.com/DouglassenG/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity"
          >
            <Github size={24} className="text-accent-foreground" />
          </a>
          <a
            href="https://www.linkedin.com/in/douglas-michelini/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity"
          >
            <Linkedin size={24} className="text-accent-foreground" />
          </a>
          <a
            href="mailto:contatodmichelini97@gmail.com"
            className="hover:opacity-70 transition-opacity"
          >
            <Mail size={24} className="text-accent-foreground" />
          </a>
        </div>

        <div className="text-center text-sm space-y-1 mt-4 font-medium text-accent-foreground">
          <p>&copy; {year} Douglas Michelini | Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
