'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

import { navigationArray } from '@/constants/navigation';
import { activeDesktopPathAnimation, desktopAnimation } from '@/animations/nav';

import { DropdownMenu } from './DropdownMenu';
import { Wrapper } from '../ui/Wrapper';

export const DesktopNav = () => {
   const pathname = usePathname();
   const [isScroll, setIsScroll] = useState(false);
   useEffect(() => {
      const handleScroll = () => {
         if (window.scrollY >= 50) {
            setIsScroll(true);
         } else {
            setIsScroll(false);
         }
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
   }, []);
   if (!navigationArray.some(({ path }) => path === pathname)) return;
   return (
      <div
         className={`fixed left-0 right-0 z-50  hidden md:block ${
            isScroll ? 'bg-lightblack py-2' : 'pt-4'
         }  transition-all duration-500 `}
      >
         <Wrapper>
            <ul className='flex-wrap items-center justify-center overflow-hidden text-white md:flex lg:text-xl '>
               {navigationArray.map(({ label, path }, idx) => {
                  if (idx > 4) return;

                  return (
                     <motion.li key={path} {...desktopAnimation(idx)} className='relative flex xl:px-3'>
                        <Link
                           className={` ${
                              pathname === path ? '' : 'hover:text-metalic'
                           } colors-300 px-4 py-2 lg:px-6 lg:py-3   xl:px-6`}
                           href={path}
                        >
                           {label}
                        </Link>
                        <AnimatePresence>
                           {pathname === path && (
                              <motion.div
                                 {...activeDesktopPathAnimation}
                                 className={`absolute left-1/2 top-1/2 -z-20 -translate-x-1/2  -translate-y-1/2 rounded-full    ${
                                    isScroll ? 'bg-yellow/75' : 'bg-yellow/40'
                                 }`}
                              />
                           )}
                        </AnimatePresence>
                     </motion.li>
                  );
               })}
               <motion.li {...desktopAnimation()} className='py-2 2xl:py-3 '>
                  <DropdownMenu />
               </motion.li>
            </ul>
            {!isScroll && <div className='mt-5 h-[1px] w-full bg-white' />}
         </Wrapper>
      </div>
   );
};
