import type { Lang } from '../data/site';

export type PageKey = 'home' | 'struttura' | 'esperienze' | 'dintorni' | 'contatti';

const slugs: Record<Lang, Record<PageKey, string>> = {
  it: {
    home: '',
    struttura: 'struttura',
    esperienze: 'esperienze',
    dintorni: 'dintorni',
    contatti: 'contatti',
  },
  en: {
    home: '',
    struttura: 'the-farm',
    esperienze: 'experiences',
    dintorni: 'surroundings',
    contatti: 'contact',
  },
};

export function pagePath(lang: Lang, page: PageKey): string {
  const slug = slugs[lang][page];
  const prefix = lang === 'en' ? '/en' : '';
  return slug ? `${prefix}/${slug}` : `${prefix}/`;
}

export function switchPath(currentLang: Lang, currentPage: PageKey): string {
  const targetLang = currentLang === 'it' ? 'en' : 'it';
  return pagePath(targetLang, currentPage);
}

export const nav: Record<Lang, { label: string; page: PageKey }[]> = {
  it: [
    { label: 'Home', page: 'home' },
    { label: 'Struttura', page: 'struttura' },
    { label: 'Esperienze', page: 'esperienze' },
    { label: 'Dintorni', page: 'dintorni' },
    { label: 'Contatti', page: 'contatti' },
  ],
  en: [
    { label: 'Home', page: 'home' },
    { label: 'The Farm', page: 'struttura' },
    { label: 'Experiences', page: 'esperienze' },
    { label: 'Surroundings', page: 'dintorni' },
    { label: 'Contact', page: 'contatti' },
  ],
};

export const ui = {
  it: {
    book: 'Prenota su Booking',
    bookCta: 'Verifica disponibilità',
    contact: 'Contattaci',
    contactUs: 'Scrivici',
    onRequest: 'Su richiesta',
    included: 'Incluso nel soggiorno',
    learnMore: 'Scopri di più',
    whatsapp: 'Scrivici su WhatsApp',
    call: 'Chiamaci',
    send: 'Invia messaggio',
    required: 'Campo obbligatorio',
    name: 'Nome',
    email: 'Email',
    phone: 'Telefono',
    message: 'Messaggio',
    subject: 'Oggetto della richiesta',
    privacy: 'Ho letto l\'informativa e autorizzo il trattamento dei dati per rispondere alla mia richiesta.',
    formSuccess: 'Messaggio inviato. Ti risponderemo al più presto.',
    formNote: 'Per cene, aperitivi, corsi di cucina o colazioni speciali, indicaci date e numero di ospiti.',
    review: 'Lascia una recensione',
    footerTagline: 'Agriturismo nelle campagne di Arezzo',
    legal: 'Sede legale',
    vat: 'P.IVA',
    allRights: 'Tutti i diritti riservati',
    langSwitch: 'EN',
    notRestaurant: 'Non siamo un ristorante: i pasti sono servizi riservati ai nostri ospiti, su prenotazione.',
  },
  en: {
    book: 'Book on Booking',
    bookCta: 'Check availability',
    contact: 'Contact us',
    contactUs: 'Write to us',
    onRequest: 'On request',
    included: 'Included in your stay',
    learnMore: 'Learn more',
    whatsapp: 'Message us on WhatsApp',
    call: 'Call us',
    send: 'Send message',
    required: 'Required field',
    name: 'Name',
    email: 'Email',
    phone: 'Phone',
    message: 'Message',
    subject: 'Subject of your request',
    privacy: 'I have read the privacy notice and authorise the processing of my data to respond to my request.',
    formSuccess: 'Message sent. We will reply as soon as possible.',
    formNote: 'For dinners, aperitifs, cooking classes or special breakfasts, please include dates and number of guests.',
    review: 'Leave a review',
    footerTagline: 'Holiday farm in the Arezzo countryside',
    legal: 'Registered office',
    vat: 'VAT',
    allRights: 'All rights reserved',
    langSwitch: 'IT',
    notRestaurant: 'We are not a restaurant: meals are reserved for our guests, by appointment only.',
  },
} as const;

export function t(lang: Lang) {
  return ui[lang];
}
