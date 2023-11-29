import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Wrapper } from '@/components/ui/Wrapper';
import { fetchAPI } from '@/utils/fetch-api';
import { IFormatType } from '@/types/model';

import { ArticleCard } from '../ui/ArticleCard';
import { Section } from '../ui/Section';
import { Heading } from '../ui/Heading';
import { Backdrop } from '../ui/Backdrop';

export interface RootDataType<T> {
   id: number;
   attributes: T;
}

export interface IPartialArticleData {
   tytul: string;
   krotki_opis: string;
   slug: string;
   publishedAt: string;
   zdjecie_glowne: {
      data: {
         id: number;
         attributes: IFormatType;
      };
   };
}

export const WeekReview = async () => {
   const path = '/home-posts';
   const urlParamsObject = {
      sort: ['publishedAt:desc'],
      populate: {
         zdjecie_glowne: { fields: ['formats'] },
      },
      fields: ['tytul', 'krotki_opis', 'slug', 'publishedAt'],
      pagination: { pageSize: 7 },
   };

   const { data } = await fetchAPI<RootDataType<IPartialArticleData>[]>(path, urlParamsObject);

   if (!data) {
      return <p className='text-center'>Coś poszło nie tak, spróbuj ponownie później.</p>;
   }
   return (
      <Section id='przeglad-tygodnia'>
         <Wrapper>
            <Heading as='h2' title='Przegląd tygodnia' className='mb-16 lg:mb-24' />
         </Wrapper>
         <Wrapper className='grid gap-14 xl:gap-20 '>
            <div className='col-span-2 grid gap-14 md:grid-cols-2 xl:gap-20'>
               {data.map(({ attributes, id }, idx) => {
                  if (idx <= 1) {
                     return <ArticleCard key={id} articleData={attributes} />;
                  }
               })}
            </div>
            <div className=' col-span-2 grid grid-cols-1 gap-14 md:grid-cols-2 lg:grid-cols-3 xl:gap-20'>
               {data.map(({ attributes, id }, idx) => {
                  if (idx > 1) {
                     return <ArticleCard key={id} variant={'fresh'} articleData={attributes} />;
                  }
               })}
               <Link href='/' className='transform-300 relative hover:scale-[1.02] active:scale-100'>
                  <Image
                     src='/assets/home/blured-article.webp'
                     alt=''
                     width={700}
                     height={700}
                     className='h-full max-h-[360px] w-full'
                  />
                  <Backdrop className='z-10 bg-black/60' />
                  <Heading
                     as='h3'
                     title='Zobacz wszystkie'
                     className='absolute left-0 top-0 z-20 grid h-full w-full place-content-center  text-white'
                  />
               </Link>
            </div>
         </Wrapper>
      </Section>
   );
};
