/**
 * Central site configuration — single place for brand data, navigation
 * and contact details so every component stays in sync.
 */

export const SITE = {
  name: 'Pharma Sports Labs',
  shortName: 'Pharma Sports Labs',
  tagline: '¡Innovación y calidad para cada desafío!',
  description:
    'Maquila y fabricación por contrato de suplementos deportivos y nutricionales en Bogotá. Desarrollo de fórmulas, lotes piloto, producción y control de calidad para tu marca.',
  // Production origin (GitHub Pages). Mirrors astro.config.mjs `site`.
  url: 'https://metapro-art.github.io',
  locale: 'es_CO',
  lang: 'es',
} as const;

export const CONTACT = {
  email: 'info@pharmasportslabs.com.co',
  address: 'Cra 27 C # 71-87, Barrio Alcázares, Bogotá',
  schedule: 'Lunes a viernes · 7:00 a. m. – 5:00 p. m.',
  // TODO: REEMPLAZAR — número de WhatsApp real (formato internacional sin +, ej. 573001234567)
  whatsapp: '0000000000',
  whatsappMessage: 'Hola, me gustaría cotizar la maquila de un suplemento con Pharma Sports Labs.',
} as const;

export const INVIMA = {
  /** Registro sanitario del producto estrella. */
  registro: 'RSA-4014-2025',
  producto: 'Whey Protein',
  /** PDF servido desde /public/documentos (usar con withBase()). */
  pdf: '/documentos/registro-invima.pdf',
} as const;

export const LEGAL = {
  terminosPdf: '/documentos/terminos-y-condiciones.pdf',
} as const;

export const FORMS = {
  // TODO: REEMPLAZAR — crea tu access key gratis en https://web3forms.com
  // (solo pide un correo; las respuestas llegan a info@pharmasportslabs.com.co)
  web3formsKey: 'REEMPLAZAR_ACCESS_KEY',
  endpoint: 'https://api.web3forms.com/submit',
} as const;

export interface NavItem {
  label: string;
  href: string;
}

export const NAV: NavItem[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Sobre nosotros', href: '/sobre-nosotros' },
  { label: 'Contacto', href: '/contacto' },
];

/**
 * Prefix an internal path with the configured base (`/pharmasportslabs`).
 * Use for every internal link and public asset so things work both in
 * local dev and on GitHub Pages project hosting.
 */
const RAW_BASE = import.meta.env.BASE_URL; // e.g. "/pharmasportslabs/"

export function withBase(path: string): string {
  const base = RAW_BASE.endsWith('/') ? RAW_BASE.slice(0, -1) : RAW_BASE;
  const clean = path.startsWith('/') ? path : `/${path}`;
  // Avoid duplicate "/" when path is just "/".
  return `${base}${clean}` || '/';
}

/** Build the WhatsApp click-to-chat URL from the configured number. */
export function whatsappUrl(): string {
  const text = encodeURIComponent(CONTACT.whatsappMessage);
  return `https://wa.me/${CONTACT.whatsapp}?text=${text}`;
}
