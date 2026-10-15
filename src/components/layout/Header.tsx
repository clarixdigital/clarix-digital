'use client';
import { useState } from 'react';
import { nav, site, whatsappUrl } from '@/data/site';
import { Button } from '@/components/ui/Button';
import { MenuIcon } from '@/components/ui/Icons';

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-navy text-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#inicio" className="font-display text-xl font-extrabold tracking-tight">
          Clarix<span className="text-accent"> Digital</span>
        </a>
        <nav aria-label="Principal" className="hidden items-center gap-7 text-sm font-semibold md:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-white/85 hover:text-white">{n.label}</a>
          ))}
          <Button href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="!min-h-10 !px-5 !py-2 text-sm">Pedir presupuesto</Button>
        </nav>
        <button
          type="button" className="rounded-lg p-2 md:hidden" aria-expanded={open} aria-controls="menu-movil"
          aria-label={open ? `Cerrar menú de ${site.name}` : `Abrir menú de ${site.name}`} onClick={() => setOpen(!open)}
        >
          <MenuIcon open={open} />
        </button>
      </div>
      {open && (
        <nav id="menu-movil" aria-label="Principal móvil" className="border-t border-white/10 bg-navy px-5 pb-5 md:hidden">
          <ul className="flex flex-col">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} onClick={() => setOpen(false)} className="block py-3 text-base font-semibold text-white/90">{n.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
