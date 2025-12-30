"use client";

import React, { useState } from "react";
import { theme } from "@/src/styles";
import { Plus } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Sobre", href: "#sobre" },
    { label: "Portfólio", href: "#portfolio" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <>
      <nav
        className="relative flex justify-start items-center py-8 px-4 md:px-40"
      >
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 list-none">
          {menuItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-sm uppercase tracking-widest hover:opacity-70 transition-opacity"
                style={{ color: theme.colors.foreground }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <div className="md:hidden z-[70]">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className={`transition-all duration-500 ease-in-out focus:outline-none ${isOpen ? 'text-secondary-foreground' : 'text-white'}`}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          >
            <Plus 
              size={32} 
              className={`transition-transform duration-500 ease-in-out ${isOpen ? 'rotate-[135deg]' : 'rotate-0'}`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar & Backdrop */}
      <div 
        className={`fixed inset-0 z-[60] md:hidden transition-visibility duration-300 ${isOpen ? 'visible' : 'invisible'}`}
      >
         {/* Backdrop */}
         <div 
           className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`} 
           onClick={() => setIsOpen(false)}
         />

         {/* Sidebar Content */}
         <div 
           className={`absolute left-0 top-0 h-full w-[80%] max-w-sm shadow-2xl transition-transform duration-300 ease-out flex flex-col p-12 bg-secondary ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
         >
            {/* Menu Links */}
            <div className="flex flex-col gap-8 items-start mt-20">
               {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg uppercase tracking-widest hover:text-[var(--accent)] transition-colors text-secondary-foreground"
                >
                  {item.label}
                </a>
              ))}
            </div>
         </div>
      </div>
    </>
  );
};

export default Navbar;