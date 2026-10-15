import type { Metadata } from 'next';
import { LegalPage } from '@/components/layout/LegalPage';
import { site } from '@/data/site';

export const metadata: Metadata = { title: `Aviso legal | ${site.name}`, robots: { index: false } };

export default function AvisoLegal() {
  return (
    <LegalPage title="Aviso legal">
      <h2>Titular del sitio web</h2>
      <p>Nombre comercial: {site.name}. Correo electrónico: {site.email}.</p>
      <h2>Objeto</h2>
      <p>Este sitio web presenta los servicios de {site.name}: creación de landing pages con dominio y hosting, soporte NFC/QR para reseñas en Google y optimización de la ficha de negocio.</p>
      <h2>Propiedad intelectual</h2>
      <p>Los textos, el diseño y los elementos de este sitio pertenecen a su titular. No pueden reproducirse sin su autorización.</p>
      <h2>Responsabilidad</h2>
      <p>La información de este sitio tiene carácter informativo. El titular podrá modificarla en cualquier momento.</p>
    </LegalPage>
  );
}
