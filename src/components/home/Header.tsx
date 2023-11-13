'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import { AiOutlineArrowDown } from 'react-icons/ai';
import Image from 'next/image';

import { Backdrop } from '../ui/Backdrop';
import { navigationArray } from '../../constants/navigation';
import { Wrapper } from '../ui/Wrapper';
import { Dot } from '../ui/Dot';
import { LinkButton } from '../ui/LinkButton';

export const Header = () => {
   const pathname = usePathname();
   if (!navigationArray.some(({ path }) => path === pathname)) return;
   return (
      <header className='relative  flex min-h-[100svh] flex-col justify-stretch pt-[120px] phones:pt-[100px] md:pt-[140px]'>
         <div>
            <video
               autoPlay
               loop
               playsInline
               muted
               className='absolute inset-0 -z-10 h-full w-full bg-blue-500/70 object-cover'
            >
               <source src='./assets/hero.mp4' />
            </video>
            <Backdrop />
         </div>
         <Wrapper className='flex flex-1 flex-col items-center  justify-between gap-5 md:gap-20 text-white'>
            <q className='uppercase md:text-xl '>dream big, work hard</q>
            <div className='flex w-full flex-col-reverse items-center gap-7   md:flex-row md:items-stretch md:justify-between md:gap-0 lg:-mt-10 '>
               <div className='mr-a relative h-max w-max text-center  md:ml-0 md:text-left'>
                  <h1 className='whitespace-break-spaces text-2xl font-bold phones:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[85px]'>
                     {'Witaj na \nMłodzieżowej \nPlatformie  \nInformacyjno \nRozwojowej'}
                  </h1>
                  <Dot className='bottom-1.5 right-0 h-2.5  w-2.5 phones:h-4 phones:w-4 md:right-7 md:h-5 md:w-5 lg:right-10 xl:h-8 xl:w-8 2xl:bottom-2.5 2xl:right-14' />
               </div>
               <div className='right-3 top-10 lg:absolute'>
                  <div className='relative h-[125px] w-[125px] self-start rounded-full phones:h-[150px] phones:w-[150px] md:h-[225px] md:w-[225px] xl:h-[375px] xl:w-[375px]'>
                     <Image
                        src='/assets/logo.png'
                        alt='Logo młodzieżowej platformy informacyjno rozwojowej'
                        fill
                        className='rounded-full'
                     />
                  </div>
               </div>
            </div>
            <div className='mb-5 flex flex-col items-center justify-end gap-2.5 phones:gap-5'>
               <LinkButton
                  aria-label='Zobacz przegląd tygodnia.'
                  href='#przeglad-tygodnia'
                  className='animate-bounce rounded-full border-[1px] p-1.5 text-2xl hover:border-yellow hover:text-yellow phones:mt-2 phones:p-2 phones:text-3xl'
               >
                  <AiOutlineArrowDown />
               </LinkButton>
               <span className='text-center text-xxs font-[500] uppercase leading-4 tracking-[5px] phones:text-sm sm:text-lg sm:tracking-[10px]'>
                  przez młodych dla młodych
               </span>
            </div>
         </Wrapper>
      </header>
   );
};
