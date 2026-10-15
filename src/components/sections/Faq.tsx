import { faqs } from '@/data/site';
import { Section } from '@/components/ui/Section';

export function Faq() {
  return (
    <Section id="preguntas" tone="surface" title="Preguntas frecuentes">
      <div className="max-w-3xl space-y-3">
        {faqs.map((f) => (
          <details key={f.q} className="group rounded-2xl border border-line bg-white p-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-bold text-navy">
              {f.q}
              <span aria-hidden="true" className="text-2xl text-accent transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 text-muted">{f.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
