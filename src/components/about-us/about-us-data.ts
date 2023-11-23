import { StaticImageData } from 'next/image';

import lukaszImg from '../../../public/assets/o-nas/lukasz-kolodziej.webp';
import kamilImg from '../../../public/assets/o-nas/Kamil.jpg';

export interface IAboutAuthorCard {
   name: string;
   text: string;
   text2?: string;
   text3?: string;
   staticImg: StaticImageData;
   bg: string;
}

export const authors: IAboutAuthorCard[] = [
   {
      name: 'Łukasz Kołodziej',
      staticImg: lukaszImg,
      text: ' Redaktor naczelny, student prawa, doświadczony działacz społeczny, Przewodniczący III kadencji Młodzieżowej Rady Gminy Kościelisko. Lubi dowodzić swoich racji choć kiedy trzeba idzie na kompromis. Mieszkaniec gminy Kościelisko, od 4 lat uczestniczy w jej życiu publicznym, z nią wiąże swoją przyszłość.',
      text2: ' Jego głównym zajęciem poza studiami jest praca z młodzieżą, a robi to m.in. Opiekując się Młodzieżową Radą Gminy Kościelisko, która jest jego oczkiem w głowie. Łukasz to człowiek, który ma więcej zainteresowań niż lat, a jednak wciąż próbuje i uczy się nowych rzeczy.',
      text3: '  Europa nie ma dla niego granic, ciągle odkrywa ją dzięki uczestnictwu w międzynarodowych projektach adresowanych do osób pracujących z młodzieżą. Przy okazji rozwija swoje kompetencje miękkie, bez których - jak twierdzi - trudno funkcjonować we współczesnym świecie.',
      bg: 'bg-[#f39f5a]',
   },
   {
      name: 'Kamil Szynal',
      staticImg: kamilImg,
      text: 'Członek zarządu, zajmuje się rekonstrukcją historyczną, poszukiwaniami historycznymi oraz mediami i dziennikarstwem, a także prowadzi bloga. Uczył się w Zespole Szkół im. Hugona Kołłątaja w Jordanowie, a obecnie studiuje historię w Instytucie Historii Wojskowej Akademii Sztuki Wojennej w Warszawie.',
      text3: ' Stara się pomagać innym oraz promować pozytywne wartości oraz wyciągać wnioski z przeszłości i przedstawiać je, łącznie z prawdziwą historią - na podstawie badań źródłowych. A przy okazji realizuje swoje własne cele i marzenia.',
      bg: 'bg-[#662549]',
   },
];
