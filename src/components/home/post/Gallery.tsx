import React from 'react';

import { Section } from '@/components/ui/Section';

export const PostGallery = () => {
   return (
      <Section id='gallery' className='pt-12'>
         <div className='grid-post-gallery'>
            <div className='row-span-2 bg-red-300  h-full w-full object-cover'></div>
            <div className='h-full w-full bg-red-300 object-cover'></div>
            <div className='h-full w-full bg-red-300 object-cover'></div>
            <div className='h-full w-full bg-red-300 object-cover'></div>
            <div className='h-full w-full bg-red-300 object-cover'></div>
            <div className='h-full w-full bg-red-300 object-cover'></div>
            <div className='h-full w-full bg-red-300 object-cover'></div>
         </div>
      </Section>
   );
};
