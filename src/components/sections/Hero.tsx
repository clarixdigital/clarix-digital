import { whatsappUrl } from '@/data/site';
import { Button } from '@/components/ui/Button';
import { CheckIcon } from '@/components/ui/Icons';

const included = ['Landing page profesional', 'Dominio propio incluido', 'Hosting rápido y seguro', 'Reseñas y ficha de Google (según pack)'];

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-navy text-white">
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-navy-mid" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.2fr_0.8fr] md:items-center md:py-24">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-accent">Páginas web para negocios</p>
          <h1 className="mt-4 text-4xl leading-tight sm:text-5xl lg:text-6xl">Tu negocio, visible en Google y en el móvil</h1>
          <p className="mt-6 max-w-xl text-lg text-white/80">
            Creamos tu landing page profesional con dominio y hosting incluidos. Y si quieres ir más allá, te ayudamos a conseguir más reseñas y a dejar tu ficha de Google a punto.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={whatsappUrl()} target="_blank" rel="noopener noreferrer">Pedir presupuesto sin compromiso</Button>
            <Button href="#packs" variant="outlineLight">Ver los packs</Button>
          </div>
        </div>
        <div className="rounded-3xl bg-white p-7 text-ink shadow-xl">
          <h2 className="text-xl text-navy">Todo en un solo servicio</h2>
          <ul className="mt-5 space-y-3">
            {included.map((i) => (
              <li key={i} className="flex items-start gap-3"><CheckIcon className="mt-0.5 shrink-0 text-ok" /><span>{i}</span></li>
            ))}
          </ul>
          <p className="mt-6 border-t border-line pt-4 text-sm text-muted">Nos encargamos de todo, de principio a fin.</p>
        </div>
      </div>
    </section>
  );
}
