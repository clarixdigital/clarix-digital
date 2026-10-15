import type { Metadata } from 'next';
import { LegalPage } from '@/components/layout/LegalPage';
import { site } from '@/data/site';

export const metadata: Metadata = { title: `Política de privacidad | ${site.name}`, robots: { index: false } };

export default function Privacidad() {
  return (
    <LegalPage title="Política de privacidad">
      <h2>Responsable</h2>
      <p>{site.name}. Contacto: {site.email}.</p>
      <h2>Datos que tratamos</h2>
      <p>Este sitio no tiene formularios, no usa cookies ni herramientas de analítica. Solo tratamos los datos que nos envías al escribirnos por WhatsApp, teléfono o correo electrónico, con la única finalidad de atender tu consulta y, en su caso, elaborar un presupuesto.</p>
      <h2>Servicios de terceros</h2>
      <p>Al usar el enlace de WhatsApp, tus datos se tratan además según las condiciones de ese servicio. El sitio se aloja en Cloudflare.</p>
      <h2>Derechos</h2>
      <p>Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a {site.email}.</p>
    </LegalPage>
  );
}
