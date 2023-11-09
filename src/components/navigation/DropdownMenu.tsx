import React, { useState } from 'react';
import * as DropdownMenuRadix from '@radix-ui/react-dropdown-menu';
import { BiChevronDown } from 'react-icons/bi';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

import { navigationArray } from '@/constants/navigation';
import { dropdownAnimation } from '@/animations/nav';

export const DropdownMenu = () => {
   const pathname = usePathname();
   const [isOpen, setIsOpen] = useState(false);
   return (
      <DropdownMenuRadix.Root modal={false} onOpenChange={setIsOpen} open={isOpen}>
         <DropdownMenuRadix.Trigger className='colors-300 group flex rotate-0 items-center px-4 py-1.5 hover:text-metalic lg:py-2.5 xl:px-9'>
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
