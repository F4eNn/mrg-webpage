import React from 'react';
import Image from 'next/image';

import { Section } from '@/components/ui/Section';
import { RootDataType } from '@/app/(default-site)/page';
import { ImageType } from '@/app/(default-site)/[...post]/page';

interface IPostGallery {
   gallery: RootDataType<ImageType>[];
}

export const PostGallery = ({ gallery }: IPostGallery) => {
   return (
      <Section id='gallery' className='pt-12'>
         <div className='grid-post-gallery'>
            {gallery.map(({ attributes, id }) => {
               return (
                  <Image
                     key={id}
                     src={attributes.url}
                     placeholder='blur'
                     blurDataURL={attributes.blurDataUrl}
                     width={500}
                     height={300}
                     alt={attributes.alt ?? 'Zdjęcie przedstawiające wydarzenie opisane w artykule'}
                     className='h-full  w-full  object-cover'
                  />
               );
            })}
         </div>
      </Section>
   );
};
