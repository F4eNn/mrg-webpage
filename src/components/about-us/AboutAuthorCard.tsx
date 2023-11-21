import React from 'react';
import Image from 'next/image';

import { Heading } from '@/components/ui/Heading';
import { Wrapper } from '@/components/ui/Wrapper';
import { TextDesc } from '@/components/ui/TextDesc';
import { IAboutAuthorCard } from '@/components/about-us/about-us-data';

type AboutAuthorsProps = IAboutAuthorCard & { idx: number };

export const AboutAuthorCard = ({ name, imageSrc, staticImg, text, text2, text3, idx, bg }: AboutAuthorsProps) => {
   return (
      <article className={`my-24 ${bg} py-10 lg:my-32`}>
         <Wrapper className='grid grid-cols-1 gap-20  lg:grid-cols-2'>
            <div className={`${idx % 2 !== 1 ? 'order-1' : ''}`}>
               <Heading className='italic text-white lg:text-left' as='h2' title={name} />
               <div className='mt-20 space-y-10  text-white'>
                  <TextDesc className='lg:text-left'>{text}</TextDesc>
                  <TextDesc className='lg:text-left'>{text2}</TextDesc>
                  <TextDesc className='lg:text-left'>{text3}</TextDesc>
               </div>
            </div>
            <div className='overflow-hidden rounded-md'>
               <picture>
                  <source media='(max-width: 640px)' srcSet={imageSrc} />
                  <Image
                     src={staticImg}
                     placeholder='blur'
                     width={2048}
                     height={2048}
                     alt='Łukasz Kołodziej'
                     className='h-full w-full object-cover'
                  />
               </picture>
            </div>
         </Wrapper>
      </article>
   );
};
