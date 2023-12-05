import React from 'react';

import { IFormatType, IMetaStrapi, RootDataType } from '@/types/model';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { LoadArticles } from '@/components/articles/LoadArticles';
import { Wrapper } from '@/components/ui/Wrapper';

export interface ArticlesData {
   tytul: string;
   publishedAt: Date;
   slug: string;
   zdjecie_glowne: {
      data: RootDataType<IFormatType>;
   };
}
export interface ArticlesFetchResponse extends Array<RootDataType<ArticlesData>> {
   meta: IMetaStrapi;
}

const page = () => {
   return (
      <main>
         <Section>
            <Heading as='h1' title='Starsze Artykuły' className='mb-20 mt-32 md:mb-36 md:mt-48' />
            <Wrapper className='2xl:gap-x-26  grid max-w-[2250px] gap-x-16 gap-y-24 px-5 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 2xl:gap-y-28'>
               <LoadArticles />
            </Wrapper>
         </Section>
      </main>
   );
};

export default page;
