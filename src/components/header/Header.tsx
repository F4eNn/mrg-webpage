'use client';
import React from 'react';
import { usePathname } from 'next/navigation';

import { DesktopNav } from './DesktopNav';
import { Backdrop } from '../ui/Backdrop';
import { navigationArray } from '../../constants/navigation';
import { MobileNav } from './MobileNav';

export const Header = () => {
   const pathname = usePathname();
   if (!navigationArray.some(({ path }) => path === pathname)) return;
   return (
      <header className='relative h-[100svh] overflow-hidden'>
         <div>
            <video
               autoPlay
               loop
               muted
               playsInline
               className='absolute inset-0 -z-10 h-full w-full bg-blue-500/70 object-cover'
            >
               <source src='./hero.mp4' />
            </video>
            <Backdrop />
         </div>
         <nav>
            <DesktopNav />
            <MobileNav />
         </nav>
      </header>
   );
};
