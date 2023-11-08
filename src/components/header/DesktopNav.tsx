import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

import { navigationArray } from '@/constants/navigation';
import { desktopAnimation } from '@/animations/nav';

import { DropdownMenu } from './DropdownMenu';

export const DesktopNav = () => {
   const pathname = usePathname();
   return (
      <ul className=' hidden flex-wrap items-center justify-center overflow-hidden pt-4  text-white md:flex lg:text-xl '>
         {navigationArray.map(({ label, path }, idx) => {
            if (idx > 4) return;
            return (
               <motion.li key={path} {...desktopAnimation(idx)} className='relative py-2 2xl:py-3'>
                  <Link
                     className={` ${
                        pathname === path ? '' : 'hover:text-metalic'
                     } colors-300 px-4 py-1.5 lg:px-6  lg:py-2.5 xl:px-9`}
                     href={path}
                  >
                     {label}
                  </Link>
                  <AnimatePresence>
                     {pathname === path && (
                        <motion.div
                           style={{ borderRadius: 999 }}
                           exit={{ opacity: 0 }}
                           layoutId='nav-pill'
                           className='absolute inset-0 -z-10 bg-lightGrey/50'
                        />
                     )}
                  </AnimatePresence>
               </motion.li>
            );
         })}
         <motion.li {...desktopAnimation()} className='py-2  lg:px-6  2xl:py-3'>
            <DropdownMenu />
         </motion.li>
      </ul>
   );
};
