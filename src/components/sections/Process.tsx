import { needs, steps } from '@/data/site';
import { Section } from '@/components/ui/Section';
import { CheckIcon } from '@/components/ui/Icons';

export function Process() {
  return (
    <Section id="como-trabajamos" tone="white" title="Cómo trabajamos">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <ol className="space-y-7">
          {steps.map((s, i) => (
            <li key={s.title} className="flex gap-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent font-display font-extrabold text-navy">{i + 1}</span>
              <div>
                <h3 className="text-xl text-navy">{s.title}</h3>
                <p className="mt-1 text-muted">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="self-start rounded-2xl bg-surface p-7">
          <h3 className="text-xl text-navy">Qué necesitamos de ti</h3>
          <ul className="mt-5 space-y-3">
            {needs.map((n) => (
              <li key={n} className="flex items-start gap-3"><CheckIcon className="mt-0.5 shrink-0 text-ok" /><span>{n}</span></li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
