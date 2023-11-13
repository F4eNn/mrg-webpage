import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { navigationPaths } from '@/constants/navigation';

import { Wrapper } from '../ui/Wrapper';
import { LinkButton } from '../ui/LinkButton';
import MobileVector from '../../../public/assets/footer/mobile-footer-vector.svg';
import { Separator } from '../ui/Separator';
import { Heading } from '../ui/Heading';
import { SocialMedia } from './SocialMedia';
import { AboutUs } from './AboutUs';

export const Footer = () => {
   const getYear = new Date().getFullYear();
   //usunac id
   return (
      <footer id='przegląd tygodnia' className='relative overflow-hidden border-none bg-lightblack text-white'>
         <div className='custom-shape'>
            <svg
               preserveAspectRatio='none'
               width='1482'
               height='156'
               viewBox='0 0 1482 156'
               fill='none'
               xmlns='http://www.w3.org/2000/svg'
            >
               <path
                  d='M2.51331 80.5C160.116 127.5 303.858 171.5 475.834 135.5C721.222 85 707.875 66.5 921.947 58C1120.11 52.0001 1323.4 86.5 1481 110.5'
                  stroke='#FACC15'
                  strokeWidth='13'
               />
               <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M2 81.0622L63.6036 99.076C125.207 117.09 248.414 153.117 371.622 148.614C494.829 144.111 618.036 99.076 741.243 76.5587C864.451 54.0415 987.658 54.0415 1110.87 63.0484C1234.07 72.0553 1357.28 90.0691 1418.88 99.076L1480.49 108.083V0H1418.88C1357.28 0 1234.07 0 1110.87 0C987.658 0 864.451 0 741.243 0C618.036 0 494.829 0 371.622 0C248.414 0 125.207 0 63.6036 0H2V81.0622Z'
                  fill='#F8F8F8'
               />
            </svg>
         </div>
         <Wrapper className='mb-10 mt-40 flex flex-col items-center gap-20'>
            <Heading as='h2' title='Przez młodych dla młodych' />
            <div className='flex flex-col items-center gap-10 text-center'>
               <div className='relative h-[175px] w-[175px]'>
                  <Image
                     src='/assets/logo.png'
                     alt='Logo młodzieżowej platformy informacyjno rozwojowej'
                     fill
                     className=' rounded-full'
                  />
               </div>
               <p>Masz jakieś pomysły, Chciałbys/łabyś coś zmienić?</p>
               <LinkButton
                  href={navigationPaths.contact.path}
                  className='relative border-[1px] border-yellow bg-transparent px-10 py-3.5 text-lg font-bold text-white'
               >
                  Napisz do nas
                  <MobileVector className='absolute -left-[100px] top-20' />
               </LinkButton>
            </div>
            <div className='h-[1px] ' />
            <div className='flex flex-col-reverse items-center gap-10 text-center'>
               <SocialMedia />
               <AboutUs />
               <div className='space-y-3.5'>
                  <Heading as='h3' title='Adres do korespondencji' />
                  <ul>
                     <li>ul. Pitoniówka 35</li>
                     <li>Kościelisko 34-511</li>
                     <li>
                        <Link href='tel:+48734622324'>+48 734 622 324</Link>
                     </li>
                  </ul>
               </div>
            </div>
         </Wrapper>
         <Separator />
         <Wrapper className='mb-3 flex items-center justify-between text-sm'>
            <p>Wszelkie prawa zastrzeżone</p>
            <p>&copy; {getYear}</p>
         </Wrapper>
      </footer>
   );
};
