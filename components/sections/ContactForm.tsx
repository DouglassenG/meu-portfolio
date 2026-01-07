"use client";

import React from 'react';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const handleWhatsappClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    const text = `Olá, meu nome é ${name} (${email}). ${message}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/?text=${encodedText}`, '_blank');
  };

  return (
    <section id="contato" className="flex flex-col items-center justify-center min-h-[80vh] px-4 md:px-40 py-20 w-full">
      <div className="w-full max-w-md space-y-8 bg-[var(--secondary)]/20 p-8 rounded-2xl backdrop-blur-md border border-[var(--border)]/10 shadow-2xl">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-[0.2em] text-[var(--foreground)]">
            Entre em contato
          </h2>
          <div className="h-1 w-20 mx-auto rounded-full bg-[var(--accent)]" />
        </div>

        <form onSubmit={handleWhatsappClick} className="flex flex-col gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--muted)] ml-1">
              Nome
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 rounded-lg bg-[var(--background)]/40 border border-[var(--border)]/20 focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] outline-none transition-all text-[var(--foreground)] placeholder:text-[var(--muted)]/50"
              placeholder="Seu nome completo"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--muted)] ml-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 rounded-lg bg-[var(--background)]/40 border border-[var(--border)]/20 focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] outline-none transition-all text-[var(--foreground)] placeholder:text-[var(--muted)]/50"
              placeholder="seu@email.com"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--muted)] ml-1">
              Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="w-full px-4 py-3 rounded-lg bg-[var(--background)]/40 border border-[var(--border)]/20 focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] outline-none transition-all text-[var(--foreground)] placeholder:text-[var(--muted)]/50 resize-none"
              placeholder="Como posso ajudar no seu projeto?"
            />
          </div>

          <button
            type="submit"
            className="mt-4 w-full py-4 px-6 rounded-lg font-bold uppercase tracking-[0.2em] bg-[var(--accent)] text-[var(--accent-foreground)] transition-all duration-300 hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 group shadow-lg shadow-[var(--accent)]/20"
          >
            <span>Enviar via WhatsApp</span>
            <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
