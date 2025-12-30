import React from 'react';
import { theme } from '@/src/styles';

const Navbar = () => {
  return (
    <nav 
      className="flex justify-end items-center py-8 px-10"
      style={{ backgroundColor: theme.colors.background }}
    >
      <ul className="flex gap-8 list-none">
        {[
          { label: 'Sobre', href: '#sobre' },
          { label: 'Habilidades', href: '#habilidades' },
          { label: 'Portfólio', href: '#portfolio' },
          { label: 'Contato', href: '#contato' }
        ].map((item) => (
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
    </nav>
  );
};

export default Navbar;
