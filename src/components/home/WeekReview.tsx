import React from 'react';

import { Wrapper } from '@/components/ui/Wrapper';
import { RootData } from '@/app/page';

import { ArticleCard } from '../ui/ArticleCard';
import { Section } from '../ui/Section';
import { Heading } from '../ui/Heading';

export const WeekReview = ({ articleData }: { articleData: RootData[] }) => {
   return (
      <Section>
         <Wrapper>
            <Heading as='h2' title='Przegląd tygodnia' className='mb-16 lg:mb-24' />
         </Wrapper>
         <Wrapper className='grid grid-cols-3 gap-14 lg:px-[80px]'>
            <div className='col-span-3 flex flex-col gap-14 sm:flex-row sm:gap-10 md:gap-14 xl:col-span-2'>
               {articleData.map(({ attributes, id }, idx) => {
                  if (idx <= 1) {
                     return <ArticleCard key={id} articleData={attributes} />;
                  }
               })}
            </div>
            <div className='order-last col-span-3 flex flex-col justify-between  gap-14 sm:flex-row sm:gap-10 md:gap-14 xl:order-none xl:col-auto xl:flex-col'>
               {articleData.map(({ attributes, id }, idx) => {
                  if (idx > 1 && idx <= 4) {
                     return (
                        <ArticleCard key={id} variant={'stale'} articleData={attributes} />
                     );
                  }
               })}
            </div>
            <div className='col-span-3 flex flex-col gap-14 sm:flex-row sm:gap-10 md:gap-14'>
               {articleData.map(({ attributes, id }, idx) => {
                  if (idx > 4) {
                     return (
                        <ArticleCard key={id} variant={'fresh'} articleData={attributes} />
                     );
                  }
               })}
            </div>
         </Wrapper>
      </Section>
   );
};
