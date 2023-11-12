/* eslint-disable @next/next/no-img-element */
'use client';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';

export const PreLoader = () => {
   const loader = useRef<HTMLDivElement | null>(null);

   useEffect(() => {
      if (typeof window !== 'undefined') {
         const preLoader = loader.current;
         if (preLoader) preLoader.remove();
      }
   }, []);

   return (
      <>
         <div ref={loader} className='fixed inset-0 z-[9999] flex items-center justify-center border-none bg-[#e3eef0]'>
            <Image src='/loading-gif-min.gif' alt='Loading...' width={300} height={300} className='border-none' />
         </div>
      </>
   );
};
