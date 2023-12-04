import React from 'react';
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';

import { Wrapper } from '@/components/ui/Wrapper';
import { fetchAPI } from '@/utils/fetch-api';
import { IFormatType } from '@/types/model';
import { navigationPaths } from '@/constants/navigation';

import { ArticleCard } from '../ui/ArticleCard';
import { Section } from '../ui/Section';
import { Heading } from '../ui/Heading';

export interface RootDataType<T> {
   id: number;
   attributes: T;
}

export interface IPartialArticleData {
   tytul: string;
   krotki_opis: string;
   slug: string;
   publishedAt: Date;
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
      pagination: { pageSize: 8 },
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
            </div>
            <div className='col-span-2 ml-auto'>
               <Link
                  href={navigationPaths.articles.path}
                  className=' custom-underline colors-300 relative flex w-max items-center gap-3 py-2  text-lg hover:text-black/80 active:scale-95'
               >
                  <span>Zobacz wszystkie artykuły</span>
                  <FaArrowRightLong />
               </Link>
            </div>
         </Wrapper>
      </Section>
   );
};
