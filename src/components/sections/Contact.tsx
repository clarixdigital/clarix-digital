import { site, telUrl, whatsappUrl } from '@/data/site';
import { Button } from '@/components/ui/Button';
import { ChatIcon, MailIcon, PhoneIcon } from '@/components/ui/Icons';

export function Contact() {
  return (
    <section id="contacto" className="bg-navy text-white">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-24">
        <h2 className="text-3xl sm:text-4xl">¿Hablamos?</h2>
        <span className="mt-4 block h-1 w-10 rounded bg-accent" aria-hidden="true" />
        <p className="mt-4 max-w-xl text-lg text-white/80">
          Escríbenos por WhatsApp y te contamos cuál es el pack que mejor se adapta a tu negocio. Sin compromiso.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {site.contacts.map((c) => (
            <article key={c.name} className="rounded-2xl bg-navy-mid p-6">
              <h3 className="text-xl">{c.name}</h3>
              <p className="mt-1 text-white/70">{c.display}</p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Button href={whatsappUrl(c.phone)} target="_blank" rel="noopener noreferrer"><ChatIcon /> WhatsApp</Button>
                <Button href={telUrl(c.phone)} variant="outlineLight"><PhoneIcon /> Llamar</Button>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-8 flex items-center gap-3 text-white/85">
          <MailIcon />
          <a className="font-semibold underline underline-offset-4 hover:text-white" href={`mailto:${site.email}`}>{site.email}</a>
        </p>
      </div>
    </section>
  );
}
