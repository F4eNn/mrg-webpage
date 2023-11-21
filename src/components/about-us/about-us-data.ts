import { StaticImageData } from 'next/image';

import lukaszImg from '../../../public/assets/o-nas/lukasz-kolodziej.webp';

export interface IAboutAuthorCard {
   name: string;
   text: string;
   text2?: string;
   text3?: string;
   imageSrc: string;
   staticImg: StaticImageData;
   bg: string
}

export const authors: IAboutAuthorCard[] = [
   {
      name: 'Łukasz Kołodziej',
      imageSrc: '/assets/o-nas/lukasz-kolodziej-mobile.webp',
      staticImg: lukaszImg,
      text: ' Redaktor naczelny, student prawa, doświadczony działacz społeczny, Przewodniczący III kadencji Młodzieżowej Rady Gminy Kościelisko. Lubi dowodzić swoich racji choć kiedy trzeba idzie na kompromis. Mieszkaniec gminy Kościelisko, od 4 lat uczestniczy w jej życiu publicznym, z nią wiąże swoją przyszłość.',
      text2: ' Jego głównym zajęciem poza studiami jest praca z młodzieżą, a robi to m.in. Opiekując się Młodzieżową Radą Gminy Kościelisko, która jest jego oczkiem w głowie. Łukasz to człowiek, który ma więcej zainteresowań niż lat, a jednak wciąż próbuje i uczy się nowych rzeczy.',
      text3: '  Europa nie ma dla niego granic, ciągle odkrywa ją dzięki uczestnictwu w międzynarodowych projektach adresowanych do osób pracujących z młodzieżą. Przy okazji rozwija swoje kompetencje miękkie, bez których - jak twierdzi - trudno funkcjonować we współczesnym świecie.',
      bg: 'bg-[#f39f5a]'
   },
   {
      name: 'Kamil Szynal',
      imageSrc: '/assets/o-nas/lukasz-kolodziej-mobile.webp',
      staticImg: lukaszImg,
      text: ' Redaktor naczelny, student prawa, doświadczony działacz społeczny, Przewodniczący III kadencji Młodzieżowej Rady Gminy Kościelisko. Lubi dowodzić swoich racji choć kiedy trzeba idzie na kompromis. Mieszkaniec gminy Kościelisko, od 4 lat uczestniczy w jej życiu publicznym, z nią wiąże swoją przyszłość.',
      text2: ' Jego głównym zajęciem poza studiami jest praca z młodzieżą, a robi to m.in. Opiekując się Młodzieżową Radą Gminy Kościelisko, która jest jego oczkiem w głowie. Łukasz to człowiek, który ma więcej zainteresowań niż lat, a jednak wciąż próbuje i uczy się nowych rzeczy.',
    
      bg: 'bg-[#662549]'
   },
   {
      name: 'Łukasz Kołodziej',
      imageSrc: '/assets/o-nas/lukasz-kolodziej-mobile.webp',
      staticImg: lukaszImg,
      text: ' Redaktor naczelny, student prawa, doświadczony działacz społeczny, Przewodniczący III kadencji Młodzieżowej Rady Gminy Kościelisko. Lubi dowodzić swoich racji choć kiedy trzeba idzie na kompromis. Mieszkaniec gminy Kościelisko, od 4 lat uczestniczy w jej życiu publicznym, z nią wiąże swoją przyszłość.',
      text2: ' Jego głównym zajęciem poza studiami jest praca z młodzieżą, a robi to m.in. Opiekując się Młodzieżową Radą Gminy Kościelisko, która jest jego oczkiem w głowie. Łukasz to człowiek, który ma więcej zainteresowań niż lat, a jednak wciąż próbuje i uczy się nowych rzeczy.',
      text3: '  Europa nie ma dla niego granic, ciągle odkrywa ją dzięki uczestnictwu w międzynarodowych projektach adresowanych do osób pracujących z młodzieżą. Przy okazji rozwija swoje kompetencje miękkie, bez których - jak twierdzi - trudno funkcjonować we współczesnym świecie.',
      bg: 'bg-[#ae445a]'
   },

];
