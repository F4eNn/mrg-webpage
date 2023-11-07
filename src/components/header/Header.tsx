'use client';
import React from 'react';
import { usePathname } from 'next/navigation';

import { DesktopNav } from './DesktopNav';
import { Wrapper } from '../ui/Wrapper';
import { Backdrop } from '../ui/Backdrop';
import { navigationArray } from '../../constants/navigation';

export const Header = () => {
   const pathname = usePathname();
   if (!navigationArray.some(({ path }) => path === pathname)) return;
   return (
      <header className='relative h-[80vh]'>
         <div>
            <video className='absolute inset-0 -z-10 h-full w-full bg-blue-500/70 object-cover'>
               <source src='./hero.mp4' />
            </video>
            <Backdrop />
         </div>
         <Wrapper>
            <DesktopNav />
            <div className='mt-5 h-[1px] w-full bg-white' />
         </Wrapper>
      </header>
   );
};
