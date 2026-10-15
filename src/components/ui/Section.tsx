import type { ReactNode } from 'react';

type Props = { id?: string; tone?: 'white' | 'surface'; title?: string; intro?: string; children: ReactNode };

export function Section({ id, tone = 'white', title, intro, children }: Props) {
  return (
    <section id={id} className={tone === 'surface' ? 'bg-surface' : 'bg-white'}>
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-24">
        {title && (
          <div className="mb-10 max-w-2xl md:mb-14">
            <h2 className="text-3xl text-navy sm:text-4xl">{title}</h2>
            <span className="mt-4 block h-1 w-10 rounded bg-accent" aria-hidden="true" />
            {intro && <p className="mt-4 text-lg text-muted">{intro}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
