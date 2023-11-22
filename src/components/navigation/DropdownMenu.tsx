import React, { useState } from 'react';
import * as DropdownMenuRadix from '@radix-ui/react-dropdown-menu';
import { BiChevronDown } from 'react-icons/bi';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

import { navigationArray, navigationPaths } from '@/constants/navigation';
import { dropdownAnimation } from '@/animations/nav';

import { Dot } from '../ui/Dot';

export const DropdownMenu = () => {
   const pathname = usePathname();
   const [isOpen, setIsOpen] = useState(false);
   const restPaths: string[] = [
      navigationPaths.filmSchool.path,
      navigationPaths.developmentGroups.path,
      navigationPaths.partners.path,
      navigationPaths.contact.path,
      navigationPaths.aboutPlatform.path,
      navigationPaths.gallery.path,
   ];
   const defaultPaths = restPaths.includes(pathname);
   return (
      <DropdownMenuRadix.Root modal={false} onOpenChange={setIsOpen} open={isOpen}>
         <DropdownMenuRadix.Trigger className='colors-300 group relative flex rotate-0 items-center gap-2 px-4 py-1.5 hover:text-metalic lg:py-2.5 xl:px-9'>
            {defaultPaths && (
               <Dot className='absolute left-1 top-1/2 h-2 w-2 -translate-y-1/2 lg:-left-1 lg:h-3 lg:w-3 xl:left-4' />
            )}
            <span className=''> Dowiedz się więcej</span>
            <BiChevronDown
               size='2rem'
               className={`transition-transform duration-300  group-data-[state=open]:rotate-180`}
            />
         </DropdownMenuRadix.Trigger>

         <AnimatePresence>
            {isOpen && (
               <DropdownMenuRadix.Portal forceMount>
                  <DropdownMenuRadix.Content
                     onCloseAutoFocus={e => e.preventDefault()}
                     asChild
                     className='z-50 flex w-[225px]  flex-col items-start   justify-start rounded-md  bg-white p-1.5 shadow-md'
                  >
                     <motion.div {...dropdownAnimation}>
                        <Item pathname={pathname} />
                     </motion.div>
                  </DropdownMenuRadix.Content>
               </DropdownMenuRadix.Portal>
            )}
         </AnimatePresence>
      </DropdownMenuRadix.Root>
   );
};

const Item = ({ pathname }: { pathname: string }) => {
   return (
      <>
         {navigationArray.map(({ label, path }, idx) => {
            if (idx <= 4) return;
            return (
               <DropdownMenuRadix.Item
                  key={path}
                  className={`${
                     pathname === path ? 'font-[500]' : 'hover:bg-lightBlue'
                  } colors-300 flex w-full rounded-md  hover:focus:outline-none`}
                  asChild
               >
                  <Link className='relative flex w-full items-center gap-5 p-4 py-2' href={path}>
                     {pathname === path && <div className='h-2 w-2 rounded-full  bg-yellow' />}
                     {label}
                  </Link>
               </DropdownMenuRadix.Item>
            );
         })}
      </>
   );
};
