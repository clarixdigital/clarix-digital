import { packs, whatsappUrl, type Pack } from '@/data/site';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { CheckIcon } from '@/components/ui/Icons';

function PackCard({ pack, index }: { pack: Pack; index: number }) {
  const msg = `Hola, me interesa el pack ${pack.name}. ¿Me podéis enviar un presupuesto sin compromiso?`;
  return (
    <article className={`flex flex-col rounded-3xl bg-white p-7 ${pack.featured ? 'border-2 border-accent shadow-lg' : 'border border-line'}`}>
      <div className="flex items-center justify-between">
        <p className="text-sm font-bold uppercase tracking-widest text-muted">Pack {index + 1}</p>
        {pack.featured && <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold text-navy">Todo incluido</span>}
      </div>
      <h3 className="mt-2 text-3xl text-navy">{pack.name}</h3>
      <p className="mt-1 text-muted">{pack.summary}</p>
      {pack.inherits && <p className="mt-5 rounded-lg bg-surface px-3 py-2 text-sm font-bold text-navy">{pack.inherits}</p>}
      <ul className="mt-5 flex-1 space-y-3">
        {pack.features.map((f) => (
          <li key={f} className="flex items-start gap-3"><CheckIcon className="mt-0.5 shrink-0 text-ok" /><span>{f}</span></li>
        ))}
      </ul>
      {pack.note && <p className="mt-5 text-xs text-muted">{pack.note}</p>}
      <Button href={whatsappUrl(undefined, msg)} target="_blank" rel="noopener noreferrer" variant={pack.featured ? 'primary' : 'secondary'} className="mt-6">
        Pedir presupuesto
      </Button>
    </article>
  );
}

export function Packs() {
  return (
    <Section id="packs" tone="surface" title="Elige el pack que mejor te encaja" intro="Los tres incluyen dominio, hosting, mantenimiento y soporte por WhatsApp.">
      <div className="grid gap-6 lg:grid-cols-3">
        {packs.map((p, i) => <PackCard key={p.id} pack={p} index={i} />)}
      </div>
    </Section>
  );
}
