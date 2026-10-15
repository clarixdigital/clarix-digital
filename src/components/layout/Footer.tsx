import { site } from '@/data/site';

export function Footer() {
  return (
    <footer className="bg-navy pb-24 text-white/80 md:pb-0">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 text-sm sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-lg font-extrabold text-white">Clarix<span className="text-accent"> Digital</span></p>
          <p className="mt-1">© {new Date().getFullYear()} {site.name}. Todos los derechos reservados.</p>
        </div>
        <nav aria-label="Legal" className="flex gap-6">
          <a href="/aviso-legal/" className="hover:text-white">Aviso legal</a>
          <a href="/privacidad/" className="hover:text-white">Política de privacidad</a>
        </nav>
      </div>
    </footer>
  );
}
