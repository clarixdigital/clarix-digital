import Link from 'next/link';
export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col items-center justify-center px-5 text-center">
      <h1 className="text-4xl text-navy">Página no encontrada</h1>
      <p className="mt-3 text-muted">La página que buscas no existe o ha cambiado de sitio.</p>
      <Link href="/" className="mt-8 inline-flex min-h-12 items-center rounded-full bg-accent px-6 font-bold text-navy">Volver al inicio</Link>
    </main>
  );
}
