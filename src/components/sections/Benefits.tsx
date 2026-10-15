import { benefits } from '@/data/site';
import { Section } from '@/components/ui/Section';

export function Benefits() {
  return (
    <Section id="por-que-web" tone="white" title="Por qué tener tu propia web" intro="Tu ficha de Google es el primer paso. Tu web es la que te permite contar bien lo que haces.">
      <div className="grid gap-5 md:grid-cols-3">
        {benefits.map((b, i) => (
          <article key={b.title} className="rounded-2xl bg-surface p-7">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent font-display font-extrabold text-navy">{i + 1}</span>
            <h3 className="mt-5 text-xl text-navy">{b.title}</h3>
            <p className="mt-3 text-muted">{b.text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
