import React from 'react';

import { fetchArticles } from '@/actions/fetch-articles';
import { IFormatType, IMetaStrapi, RootDataType } from '@/types/model';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { ArticleCard } from '@/components/ui/ArticleCard';

interface ArticlesData {
   tytul: string;
   publishedAt: Date;
   slug: string;
   zdjecie_glowne: {
      data: RootDataType<IFormatType>;
   };
}
export interface FetchResponse extends Array<RootDataType<ArticlesData>> {
   meta: IMetaStrapi;
}

const page = async () => {
   const { data } = await fetchArticles();

   if (!data) {
      return <p className='text-center'>Coś poszło nie tak, spróbuj ponownie później.</p>;
   }
   return (
      <main>
         <Section>
            <Heading as='h1' title='Nasze Artykuły' className='mb-20 mt-40' />
            <div className='grid grid-flow-dense grid-cols-4 gap-16 px-5'>
               {data.map(({ attributes, id }) => (
                  <ArticleCard variant={'fresh'} key={id} articleData={attributes} />
               ))}
            </div>
         </Section>
      </main>
   );
};

export default page;
