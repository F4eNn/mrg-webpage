import React from 'react';

import { IFormatType, IMetaStrapi, RootDataType } from '@/types/model';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { LoadArticles } from '@/components/articles/LoadArticles';

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
            <div className=' grid gap-x-16 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-y-24 px-5 2xl:gap-x-26 2xl:gap-y-28'>
               <LoadArticles />
            </div>
         </Section>
      </main>
   );
};

export default page;
