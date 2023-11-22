import React from 'react';
import Image from 'next/image';

import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { CreatedTime } from '@/components/ui/ArticleCard';

export const PostHeader = () => {
   return (
      <Section size={'none'} className='mt-28 md:mt-48'>
         <div className='space-y-14 '>
            <div className='space-y-10'>
               <CreatedTime publishedAt='2023-10-07' isNew={true} />
               <Heading
                  as='h1'
                  className='sm:text-left'
                  title='How to create your own zoom picture effect in articualte storyline'
               />
            </div>
            <Image src='/dummy.jpg' width={800} height={500} alt='' className='max-h-[500px] w-full object-cover' />
         </div>
      </Section>
   );
};
