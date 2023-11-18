import React from 'react';

import { Wrapper } from '@/components/ui/Wrapper';

import { ArticleCard } from '../ui/ArticleCard';
import { Section } from '../ui/Section';
import { Heading } from '../ui/Heading';

export const WeekReview = () => {
   return (
      <Section>
         <Wrapper>
            <Heading as='h2' title='Przegląd tygodnia' className='mb-16 lg:mb-24'/>
         </Wrapper>
         <Wrapper className='grid grid-cols-3 gap-14 lg:px-[80px]'>
            <div className='col-span-3 flex flex-col gap-14 sm:flex-row sm:gap-10 md:gap-14 xl:col-span-2'>
               <ArticleCard href='#przeglad-tygodnia' />
               <ArticleCard href='#przeglad-tygodnia' />
            </div>
            <div className='order-last col-span-3 flex flex-col justify-between  gap-14 sm:flex-row sm:gap-10 md:gap-14 xl:order-none xl:col-auto xl:flex-col'>
               <ArticleCard variant={'stale'} href='#przeglad-tygodnia' />
               <ArticleCard variant={'stale'} href='#przeglad-tygodnia' />
               <ArticleCard variant={'stale'} href='#przeglad-tygodnia' />
            </div>
            <div className='col-span-3 flex flex-col gap-14 sm:flex-row sm:gap-10 md:gap-14'>
               <ArticleCard variant={'fresh'} href='#przeglad-tygodnia' />
               <ArticleCard variant={'fresh'} href='#przeglad-tygodnia' />
            </div>
         </Wrapper>
         
      </Section>
   );
};
