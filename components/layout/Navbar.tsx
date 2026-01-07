"use client";

import React, { useState } from "react";
import { theme } from "@/src/styles";
import { Plus, Github, Linkedin, Mail, Code2 } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Sobre", href: "/" },
    { label: "Portfólio", href: "/portfolio" },
    { label: "Contato", href: "/contact" },
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 flex justify-between items-center py-6 px-4 md:px-40 md:bg-black/40 md:backdrop-blur-md md:border-b md:border-white/5">
        {/* Desktop Left Group: Menu + Social */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8 list-none">
            {menuItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="relative text-sm uppercase tracking-widest hover:opacity-100 transition-opacity after:content-[''] after:absolute after:w-0 after:h-[2px] after:bottom-[-4px] after:left-0 after:bg-[var(--accent)] hover:after:w-full after:transition-all after:duration-300"
                  style={{ color: theme.colors.foreground }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex gap-6 items-center">
            <a
              href="https://github.com/DouglassenG/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--accent)] transition-all ease-in-out hover:scale-110 duration-500"
              style={{ color: theme.colors.foreground }}
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/douglas-michelini/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--accent)] transition-all ease-in-out hover:scale-110 duration-500"
              style={{ color: theme.colors.foreground }}
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:contatodmichelini97@gmail.com"
              className="hover:text-[var(--accent)] transition-all ease-in-out hover:scale-110 duration-500"
              style={{ color: theme.colors.foreground }}
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Brand */}
        <div className="flex items-center gap-2" style={{ color: theme.colors.foreground }}>
          <Code2 size={32} />
          <span className="text-xl font-bold">Douglas Michelini</span>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden z-[70]">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`transition-all duration-500 ease-in-out focus:outline-none text-white`}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          >
            <Plus
              size={32}
              className={`transition-transform duration-500 ease-in-out ${
                isOpen ? "rotate-[135deg]" : "rotate-0"
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar & Backdrop */}
      <div
        className={`fixed inset-0 z-[60] md:hidden transition-visibility duration-300 ${
          isOpen ? "visible" : "invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Sidebar Content */}
        <div
          className={`absolute left-0 top-0 h-full w-[80%] max-w-sm shadow-2xl transition-transform duration-300 ease-out flex flex-col p-12 bg-black/40 backdrop-blur-md border-r border-white/5 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Mobile Brand */}
          <div className="flex items-center gap-2 mb-10" style={{ color: theme.colors.foreground }}>
            <Code2 size={32} />
            <span className="text-xl font-bold">Douglas Michelini</span>
          </div>

          {/* Menu Links */}
          <div className="flex flex-col gap-8 items-start">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-lg uppercase tracking-widest hover:text-[var(--accent)] transition-colors text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Social Icons */}
          <div className="flex gap-6 mt-12">
            <a
              href="https://github.com/DouglassenG/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[var(--accent)] transition-all ease-in-out hover:scale-110 duration-500"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/douglas-michelini/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[var(--accent)] transition-all ease-in-out hover:scale-110 duration-500"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:contatodmichelini97@gmail.com"
              className="text-white hover:text-[var(--accent)] transition-all ease-in-out hover:scale-110 duration-500"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;