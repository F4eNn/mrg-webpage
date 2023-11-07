import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { navigationArray } from '@/constants/navigation';
import { desktopAnimation } from '@/animations/nav';

export const DesktopNav = () => {
   const [activeLink, setActiveLink] = useState(navigationArray[0].path);

   return (
      <ul className=' hidden flex-wrap items-center justify-center overflow-hidden pt-4  text-white md:flex lg:text-xl xl:text-2xl'>
         {navigationArray.map(({ label, path }, idx) => {
            if (idx > 4) return;
            return (
               <motion.li key={path} {...desktopAnimation(idx)} className='relative py-2 2xl:py-3'>
                  <Link
                     className={` ${
                        activeLink === path ? '' : 'hover:text-metalic'
                     } colors-300 px-5 py-1.5 lg:px-6 lg:py-2.5 xl:px-9`}
                     onClick={() => setActiveLink(path)}
                     href={path}
                  >
                     {label}
                  </Link>
                  {activeLink === path && (
                     <motion.div
                        style={{ borderRadius: 999 }}
                        layoutId='nav-pill'
                        className='bg-lightGrey/50 absolute inset-0 -z-10'
                     />
                  )}
               </motion.li>
            );
         })}
         <motion.li {...desktopAnimation()} className='py-2 2xl:py-3'>
            <button className='hover:text-metalic colors-300 px-5 py-1.5 lg:px-6 lg:py-2.5 xl:px-9'>
               Dowiedz się więcej
            </button>
         </motion.li>
      </ul>
   );
};
