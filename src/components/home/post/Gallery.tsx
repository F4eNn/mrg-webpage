import React from 'react';
import Image from 'next/image';

import { Section } from '@/components/ui/Section';

export const PostGallery = () => {
   return (
      <Section id='gallery' className='pt-12'>
         <div className='grid-post-gallery'>
            <Image
               src='/dummy.jpg'
               alt=''
               width={300}
               height={500}
               className='row-span-2  h-full w-full object-cover'
            ></Image>
            <Image src='/dummy2.jpg' alt='' width={300} height={500} className=' h-full w-full object-cover'></Image>
            <Image src='/dummy3.jpg' alt='' width={300} height={500} className='h-full w-full object-cover'></Image>
            <Image src='/dummy4.jpg' alt='' width={300} height={500} className='h-full w-full object-cover'></Image>
            <Image src='/dummy5.jpg' alt='' width={300} height={500} className='h-full w-full object-cover'></Image>
         </div>
      </Section>
   );
};
