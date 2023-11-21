'use client';
import React, { useState } from 'react';
import Hamburger from 'hamburger-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';

import { navigationArray } from '@/constants/navigation';
import { mobileMenuAnimation } from '@/animations/nav';

export const MobileNav = () => {
   const pathname = usePathname();
   const [open, setOpen] = useState(false);

   const handleToggleMenu = () => {
      setOpen(prev => !prev);
      const body = document.querySelector('body');
      if (!open) {
         body!.style.overflow = 'hidden';
      } else {
         body!.style.overflow = 'auto';
      }
   };
   if (!navigationArray.some(({ path }) => path === pathname)) return;
   return (
      <>
         <div className=' md:hidden'>
            <button
               aria-label={open ? 'Zamknij nawigacje' : 'Otwórz nawigacje'}
               aria-expanded={open}
               className='fixed right-4 z-50 mt-4 rounded-full bg-black p-[11px] text-white md:hidden'
            >
               <Hamburger rounded toggle={handleToggleMenu} toggled={open} />
            </button>
         </div>
         <AnimatePresence>
            {open && (
               <motion.ul
                  {...mobileMenuAnimation}
                  className='fixed inset-0 z-40  flex w-full flex-col overflow-x-hidden  bg-white pb-10 pt-32 md:hidden '
               >
                  {navigationArray.map(({ label, path }) => {
                     return (
                        <li key={path}>
                           <Link
                              onClick={handleToggleMenu}
                              className={`relative flex w-full items-center justify-center gap-4 py-4 ${
                                 pathname === path ? ' text-xl font-bold' : ''
                              } `}
                              href={path}
                           >
                              {pathname === path && <div className='h-2 w-2 rounded-full bg-yellow' />}
                              {label}
                           </Link>
                        </li>
                     );
                  })}
               </motion.ul>
            )}
         </AnimatePresence>
      </>
   );
};
