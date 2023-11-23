import React from 'react';
import Image from 'next/image';

import { Heading } from '@/components/ui/Heading';
import { Wrapper } from '@/components/ui/Wrapper';
import { TextDesc } from '@/components/ui/TextDesc';
import { IAboutAuthorCard } from '@/components/about-us/about-us-data';

type AboutAuthorsProps = IAboutAuthorCard & { idx: number };

export const AboutAuthorCard = ({ name,staticImg, text, text2, text3, idx, bg }: AboutAuthorsProps) => {
   return (
      <article className={`my-24 ${bg} py-20 lg:py-10 lg:my-32`}>
         <Wrapper className='grid grid-cols-1 gap-14 lg:gap-20   lg:grid-cols-2'>
            <div className={`${idx % 2 !== 1 ? 'lg:order-1 order-last ' : 'max-lg:order-last'}`}>
               <Heading className='italic text-white lg:text-left ' as='h2' title={name} />
               <div className='mt-10 lg:mt-20 space-y-10  text-white'>
                  <TextDesc className='lg:text-left'>{text}</TextDesc>
                  <TextDesc className='lg:text-left'>{text2}</TextDesc>
                  <TextDesc className='lg:text-left'>{text3}</TextDesc>
               </div>
            </div>
            <div className='overflow-hidden rounded-md'>
               <Image
                  src={staticImg}
                  placeholder='blur'
                  width={2048}
                  height={2048}
                  alt='Łukasz Kołodziej'
                  className='h-full w-full max-h-[600px] object-cover'
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 70vw'
               />
            </div>
         </Wrapper>
      </article>
   );
};
