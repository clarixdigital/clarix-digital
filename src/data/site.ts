export const site = {
  name: 'Clarix Digital',
  description:
    'Landing pages profesionales con dominio y hosting incluidos, soporte NFC/QR para conseguir reseñas en Google y optimización de tu ficha de negocio.',
  email: 'info.clarixdigital@gmail.com',
  contacts: [
    { name: 'Javier Jiménez', phone: '693915490', display: '693 91 54 90' },
    { name: 'José Antonio León', phone: '658957805', display: '658 95 78 05' },
  ],
  whatsappMessage: 'Hola, me gustaría pedir presupuesto sin compromiso para mi negocio.',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || undefined,
} as const;

export const primaryContact = site.contacts[0];
export const whatsappUrl = (phone: string = primaryContact.phone, message: string = site.whatsappMessage) =>
  `https://wa.me/34${phone}?text=${encodeURIComponent(message)}`;
export const telUrl = (phone: string) => `tel:+34${phone}`;

export const nav = [
  { href: '#por-que-web', label: 'Por qué una web' },
  { href: '#packs', label: 'Packs' },
  { href: '#como-trabajamos', label: 'Cómo trabajamos' },
  { href: '#preguntas', label: 'Preguntas' },
  { href: '#contacto', label: 'Contacto' },
];

export const benefits = [
  { title: 'Te encuentran', text: 'Cuando alguien busca tu negocio en Google, encuentra una web profesional con tus servicios, horario y ubicación.' },
  { title: 'Te contactan al instante', text: 'Botones de llamada y WhatsApp a un toque desde el móvil, sin que el cliente tenga que buscar tu número.' },
  { title: 'Imagen de confianza', text: 'Un diseño moderno y rápido, que se ve perfecto en cualquier móvil y habla bien de tu negocio.' },
];

export type Pack = { id: string; name: string; summary: string; inherits?: string; features: string[]; note?: string; featured?: boolean };
export const packs: Pack[] = [
  {
    id: 'esencial', name: 'Esencial', summary: 'Tu web, lista y publicada.',
    features: [
      'Landing page profesional, diseñada para tu negocio y adaptada a móvil',
      'Botones de llamada y WhatsApp',
      'Mapa, horario y datos de contacto siempre a la vista',
      'Textos redactados para presentar tus servicios',
      'Dominio propio (.com) y hosting rápido y seguro incluidos',
      'Optimización básica para aparecer en Google',
      'Mantenimiento y soporte por WhatsApp',
    ],
  },
  {
    id: 'resenas', name: 'Reseñas', summary: 'Tu web y más opiniones en Google.', inherits: 'Todo lo del pack Esencial, más:',
    features: [
      'Soporte de mostrador con NFC y código QR para tu local',
      'Configurado con el enlace directo a tu ficha de Google',
      'Tus clientes dejan su reseña en segundos: acercan el móvil o escanean el QR',
    ],
    note: 'Las reseñas deben pedirse siempre de forma voluntaria y sin ofrecer nada a cambio, según las normas de Google.',
  },
  {
    id: 'completo', name: 'Completo', summary: 'Web, reseñas y ficha de Google a punto.', inherits: 'Todo lo del pack Reseñas, más:', featured: true,
    features: [
      'Ficha de Google optimizada: categorías, descripción y horario revisados',
      'Fotos y datos actualizados para que quien te busque vea lo mejor de tu negocio',
      'Enlace a tu web y botón de WhatsApp en tu ficha',
      'Datos coherentes entre tu web y tu ficha: nombre, teléfono y dirección',
    ],
    note: 'Necesitamos acceso como administrador a tu ficha de Google para poder optimizarla.',
  },
];

export const steps = [
  { title: 'Hablamos', text: 'Nos cuentas a qué se dedica tu negocio y qué quieres conseguir. Te recomendamos el pack que mejor te encaja.' },
  { title: 'Te preparamos una demo', text: 'Creamos una propuesta con los datos de tu negocio para que veas cómo quedaría antes de decidir.' },
  { title: 'Ajustamos y publicamos', text: 'Revisamos juntos los detalles. Cuando estés conforme, publicamos tu web con tu dominio propio.' },
  { title: 'Nos ocupamos del mantenimiento', text: 'Hosting, renovación del dominio y soporte por WhatsApp. Tú te dedicas a tu negocio.' },
];

export const needs = [
  'El nombre y los datos de contacto de tu negocio',
  'Tu logo y algunas fotos del local o de tus trabajos (si las tienes)',
  'Los servicios que ofreces y tu horario',
  'Acceso a tu ficha de Google (solo para el Pack Completo)',
];

export const faqs = [
  { q: '¿Cuánto cuesta?', a: 'Depende del pack que elijas. Escríbenos por WhatsApp y te enviamos un presupuesto sin compromiso.' },
  { q: '¿Qué incluyen el dominio y el hosting?', a: 'Tu dirección web propia (por ejemplo, minegocio.com) y el alojamiento de la página. Nos encargamos de configurarlo todo y de mantenerlo.' },
  { q: '¿Tengo que tener algo preparado?', a: 'Solo los datos de tu negocio, tus servicios y, si las tienes, algunas fotos. De lo demás nos ocupamos nosotros.' },
  { q: '¿Cómo funciona el soporte NFC y QR?', a: 'Colocas el soporte en tu mostrador. Tu cliente acerca el móvil o escanea el código y llega directo a tu ficha de Google para dejar su reseña.' },
  { q: '¿Y si necesito un cambio en mi web?', a: 'Escríbenos por WhatsApp y lo vemos. El soporte está incluido en todos los packs.' },
];
