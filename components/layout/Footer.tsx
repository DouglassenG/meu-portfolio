"use client";

import React, { useEffect, useState } from "react";
import { theme } from "@/src/styles";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer
      className="w-full py-12 flex flex-col items-center justify-center gap-6"
      style={{
        backgroundColor: theme.colors.accent,
        borderTop: `1px solid ${theme.colors.border}`,
      }}
    >
      <div className="flex gap-6">
        <a
          href="https://github.com/DouglassenG/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-70 transition-opacity"
        >
          <Github size={32} style={{ color: "#171717" }} />
        </a>
        <a
          href="https://www.linkedin.com/in/douglas-michelini/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-70 transition-opacity"
        >
          <Linkedin size={32} style={{ color: "#171717" }} />
        </a>
        <a
          href="mailto:contatodmichelini97@gmail.com"
          className="hover:opacity-70 transition-opacity"
        >
          <Mail size={32} style={{ color: "#171717" }} />
        </a>
      </div>

      <div
        className="text-center text-sm space-y-1 mt-4 font-medium"
        style={{ color: "#171717" }}
      >
        <p>&copy; {year} Douglas Michelini. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
