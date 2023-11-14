import React from 'react';
import Link from 'next/link';

import { navigationPaths } from '@/constants/navigation';

import { Heading } from '../ui/Heading';
import { CardInfoWrapper } from './CardInfoWrapper';

export const AboutUs = () => {
   type AboutItem = {
      url: string;
      desc: string;
   };

   const aboutItems: AboutItem[] = [
      { url: navigationPaths.aboutUs.path, desc: 'Nasz zespół' },
      { url: navigationPaths.contact.path, desc: 'Kontakt' },
      { url: navigationPaths.projects.path, desc: 'Nasze projekty' },
      { url: '', desc: 'Polityka prywatności' },
   ];
   return (
      <div className='space-y-3.5 md:space-y-7'>
         <Heading as='h3' title='O nas' />
         <CardInfoWrapper>
            {aboutItems.map(({ desc, url }) => (
               <li key={url}>
                  <Link href={url}>{desc}</Link>
               </li>
            ))}
         </CardInfoWrapper>
      </div>
   );
};
