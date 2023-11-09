'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import { AiOutlineArrowDown } from 'react-icons/ai';

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
               <source src='./film-wykadrowany.mp4' />
            </video>
            <Backdrop />
         </div>
         <Wrapper className='flex flex-1 flex-col items-center  justify-between gap-10 text-white'>
            <q className='uppercase md:text-xl '>dream big, work hard</q>
            <div className='relative mx-auto h-max w-max text-center  md:ml-0 md:text-left'>
               <h1 className='whitespace-break-spaces text-3xl font-bold phones:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[90px]'>
                  {'Witaj na \nMłodzieżowej \nPlatformie  \nInformacyjno \nRozwojowej'}
               </h1>
               <Dot className='bottom-1.5 right-1 h-2.5  w-2.5 phones:h-5 phones:w-5 md:right-7 lg:right-10 xl:h-8 xl:w-8 2xl:bottom-2.5 2xl:right-16' />
            </div>
            <div className='mb-5 flex flex-col items-center justify-end gap-5'>
               <LinkButton
                  href='#przeglad-tygodnia'
                  className='animate-bounce rounded-full border-[1px] text-3xl hover:border-yellow hover:text-yellow'
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
