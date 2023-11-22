import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { navigationPaths } from '@/constants/navigation';

import { Wrapper } from '../ui/Wrapper';
import MobileVector from '../../../public/assets/footer/mobile-footer-vector.svg';
import DesktopVector from '../../../public/assets/footer/desktop-vector.svg';
import { Separator } from '../ui/Separator';
import { Heading } from '../ui/Heading';
import { SocialMedia } from './SocialMedia';
import { AboutUs } from './AboutUs';
import { WaveShape } from './WaveShape';
import { CardInfoWrapper } from './CardInfoWrapper';
import { PeaceHand } from './PeaceHand';
import { buttonVariants } from '../controls/Button';

export const Footer = () => {
   const getYear = new Date().getFullYear();
   return (
      <footer className='relative mt-auto overflow-hidden border-none bg-lightblack text-white'>
         <WaveShape />
         <Wrapper className='mb-10 mt-40 flex flex-col items-center gap-20'>
            <Heading as='h2' title='Myśl globalnie, działaj lokalnie' className='text-white phones:mt-2.5' />
            <div className='relaitve flex w-full flex-col items-center justify-between gap-10 text-center lg:flex-row'>
               <div className='relative '>
                  <Image
                     src='/assets/logo.png'
                     alt='Logo młodzieżowej platformy informacyjno rozwojowej'
                     width={250}
                     height={250}
                     className=' h-[175px] w-[175px] rounded-full phones:h-[200px] phones:w-[200px]'
                  />
               </div>
               <PeaceHand />
               <div className='relative flex flex-col items-center gap-10 lg:flex-row lg:gap-8 '>
                  <p className='whitespace-pre-line phones:text-lg md:text-xl lg:whitespace-normal  '>
                     {'Masz jakieś pomysły, Chciałbys/łabyś coś \n zmienić?'}
                  </p>
                  <Link
                     href={navigationPaths.contact.path}
                     className={buttonVariants({ size: 'default', variant: 'primary' })}
                  >
                     Napisz do nas
                  </Link>
                  <MobileVector className='absolute  -bottom-[125px] -left-[30px] lg:hidden' />
                  <DesktopVector className='absolute  bottom-20 right-[145px] hidden rotate-[20deg] lg:inline-block' />
               </div>
            </div>
            <Separator className=' -mb-5 mt-20 w-[100px] lg:-my-5 lg:mb-0 lg:mt-0 lg:w-3/4' />
            <div className='flex w-full flex-col-reverse items-center gap-10  text-center md:gap-14 md:text-left lg:flex-row lg:items-start'>
               <SocialMedia />
               <div className='flex w-full flex-1 flex-col gap-10 md:flex-row md:justify-around'>
                  <div className='space-y-3.5 md:space-y-7'>
                     <Heading as='h3' title='Adres do korespondencji' />
                     <CardInfoWrapper>
                        <li>ul. Pitoniówka 35</li>
                        <li>Kościelisko 34-511</li>
                        <li>
                           <Link
                              href='tel:+48734622324'
                              className='colors-300 underline underline-offset-4 hover:text-metalic'
                           >
                              +48 734 622 324
                           </Link>
                        </li>
                     </CardInfoWrapper>
                  </div>
                  <AboutUs />
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
