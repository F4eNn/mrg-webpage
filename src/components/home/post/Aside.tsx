import React from 'react';
import Link from 'next/link';

import { Heading } from '@/components/ui/Heading';
import { Dot } from '@/components/ui/Dot';

export const Aside = () => {
   return (
      <aside className='h-full  '>
         <div className='space-y-12 sticky top-[110px]'>
            <Heading as='h3' className='text-center md:text-left' title='Ostatnie artykuły' />
            <ul className='space-y-10'>
               <li className='group flex items-start gap-2 rounded-sm border-2 transition-all  duration-300 hover:scale-[0.99] hover:border-orange-300 lg:w-full'>
                  <Link href='' className='line-clamp-2 flex w-full gap-2 p-4'>
                     <div className='mt-1'>
                        <Dot className='colors-300 static h-3 w-3 group-hover:bg-orange-300' />
                     </div>
                     <p className='line-clamp-3'>
                        Using marketing atumoation tools to deliver tools to deliver tools to deliver tools to deliver
                        Using marketing atumoation tools to deliver tools to deliver tools to deliver tools to deliver
                        tools
                     </p>
                  </Link>
               </li>
               <li className='group flex items-start gap-2 rounded-sm border-2 transition-all  duration-300 hover:scale-[0.99] hover:border-orange-300 lg:w-full'>
                  <Link href='' className='line-clamp-2 flex w-full gap-2 p-4'>
                     <div className='mt-1'>
                        <Dot className='colors-300 static h-3 w-3 group-hover:bg-orange-300' />
                     </div>
                     <p className='line-clamp-3'>
                        Using marketing atumoation tools to deliver tools to deliver tools to deliver tools to deliver
                        Using marketing atumoation tools to deliver tools to deliver tools to deliver tools to deliver
                        tools
                     </p>
                  </Link>
               </li>
               <li className='group flex items-start gap-2 rounded-sm border-2 transition-all  duration-300 hover:scale-[0.99] hover:border-orange-300 lg:w-full'>
                  <Link href='' className='line-clamp-2 flex w-full gap-2 p-4'>
                     <div className='mt-1'>
                        <Dot className='colors-300 static h-3 w-3 group-hover:bg-orange-300' />
                     </div>
                     <p className='line-clamp-3'>
                        Using marketing atumoation tools to deliver tools to deliver tools to deliver tools to deliver
                        Using marketing atumoation tools to deliver tools to deliver tools to deliver tools to deliver
                        tools
                     </p>
                  </Link>
               </li>
            </ul>
         </div>
      </aside>
   );
};
