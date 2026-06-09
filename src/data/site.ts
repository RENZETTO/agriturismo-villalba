export const site = {
  name: 'Agriturismo Villalba',
  domain: 'https://agriturismovillalba.it',
  phone: '+39 333 3570420',
  phoneDisplay: '+39 333 357 0420',
  email: 'bbvillalba@alice.it',
  address: 'Località San Marco Villalba, 9',
  city: '52100 Arezzo (AR)',
  vat: '01966070516',
  bookingUrl: 'https://www.booking.com/hotel/it/agriturismo-villalba.html',
  mapsEmbed:
    'https://maps.google.com/maps?q=Localit%C3%A0+San+Marco+Villalba+9,+52100+Arezzo+AR&t=&z=14&ie=UTF8&iwloc=&output=embed',
  mapsLink: 'https://maps.google.com/?q=San+Marco+Villalba+9+Arezzo',
  social: {
    pagineGialle: 'https://www.paginegialle.it/',
  },
} as const;

export type Lang = 'it' | 'en';

export function pathFor(lang: Lang, slug: string): string {
  const base = lang === 'en' ? '/en' : '';
  return slug === 'home' ? `${base}/` : `${base}/${slug}`;
}

export function alternateLang(current: Lang): Lang {
  return current === 'it' ? 'en' : 'it';
}
