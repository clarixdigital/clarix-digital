import Link from 'next/link';
import type { ReactNode } from 'react';

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <main className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
      <Link href="/" className="font-semibold text-navy underline underline-offset-4">← Volver al inicio</Link>
      <h1 className="mt-6 text-4xl text-navy">{title}</h1>
      <div className="mt-8 space-y-4 text-muted [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:text-navy">{children}</div>
    </main>
  );
}
