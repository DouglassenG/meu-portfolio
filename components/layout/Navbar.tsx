"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Sobre", href: "/" },
    { label: "Projetos", href: "/projetos" },
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 flex justify-between items-center py-4 px-4 md:px-40 bg-[rgba(10,10,10,0.88)] backdrop-blur-md border-b border-white/[0.06] shadow-sm transition-colors duration-300">
        {/* Brand */}
        <div className="flex items-center">
          <Link href="/">
            <img
              src="/icon.png"
              alt="Ícone"
              className="h-8 w-8 rounded-full object-cover ring-2 ring-accent/20"
            />
          </Link>
        </div>

        {/* Desktop Right Group: Menu + Social + Theme */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8 list-none m-0 p-0">
            {menuItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="relative text-xs uppercase tracking-widest font-semibold text-white/65 hover:text-white transition-colors after:content-[''] after:absolute after:w-0 after:h-[2px] after:bottom-[-4px] after:left-0 after:bg-accent hover:after:w-full after:transition-all after:duration-300"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="h-4 w-px bg-white/10 mx-2" />

          <div className="flex gap-5 items-center">
            <a
              href="https://github.com/DouglassenG/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-accent transition-all duration-300 hover:scale-110"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/douglas-michelini/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-accent transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:contatodmichelini97@gmail.com"
              className="text-white/50 hover:text-accent transition-all duration-300 hover:scale-110"
            >
              <Mail size={18} />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=051996979539"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <img
                src="/whatsapp.svg"
                alt="Whatsapp"
                width={18}
                height={18}
                className="invert brightness-200 opacity-50 hover:opacity-100 transition-opacity"
              />
            </a>
          </div>

          <div className="h-4 w-px bg-white/10 mx-2" />

          <ThemeToggle />
        </div>

        {/* Mobile Actions Group */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-white focus:outline-none"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu & Backdrop */}
      <div
        className={`fixed inset-0 z-[60] md:hidden transition-all duration-300 ${
          isOpen ? "visible" : "invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Menu Content - Slides from Top */}
        <div
          className={`absolute left-0 top-0 w-full shadow-2xl transition-transform duration-500 ease-in-out flex flex-col items-center p-12 bg-[rgba(15,15,15,0.97)] border-b border-white/[0.06] ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-4 text-white focus:outline-none"
            aria-label="Fechar menu"
          >
            <X size={28} />
          </button>

          <div className="flex items-center mb-10">
            <img
              src="/icon.png"
              alt="Ícone"
              className="h-10 w-10 rounded-full object-cover ring-2 ring-accent/20"
            />
          </div>

          <div className="flex flex-col gap-8 items-center">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-sm uppercase tracking-widest font-bold text-white/65 hover:text-accent transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex gap-8 mt-12">
            <a
              href="https://github.com/DouglassenG/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-accent transition-all duration-300"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/douglas-michelini/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-accent transition-all duration-300"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:contatodmichelini97@gmail.com"
              className="text-white/50 hover:text-accent transition-all duration-300"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
