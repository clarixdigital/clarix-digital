import type { Metadata, Viewport } from 'next';
import { site } from '@/data/site';
import './globals.css';

const title = `${site.name} | Landing pages con dominio y hosting, reseñas y ficha de Google`;

export const metadata: Metadata = {
  ...(site.siteUrl ? { metadataBase: new URL(site.siteUrl), alternates: { canonical: '/' } } : {}),
  title,
  description: site.description,
  openGraph: { title, description: site.description, siteName: site.name, locale: 'es_ES', type: 'website' },
  twitter: { card: 'summary', title, description: site.description },
};
export const viewport: Viewport = { themeColor: '#0F2A4A' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
