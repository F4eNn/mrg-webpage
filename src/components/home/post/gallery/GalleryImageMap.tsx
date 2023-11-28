import Image from 'next/image';
import React from 'react';

import { Button } from '@/components/controls/Button';

import { IPostGallery } from './Gallery';

type GalleryMapTypes = IPostGallery & {
   handleOpen: (_idx: number) => void;
   showMore: boolean;
};

export const GalleryImageMap = ({ gallery, handleOpen, showMore }: GalleryMapTypes) => {
   return (
      <>
         {gallery.slice(0, showMore ? gallery.length : 7).map(({ attributes, id }, idx) => {
            return (
               <Button
                  key={id}
                  variant={'borderOnHover'}
                  onClick={() => {
                     handleOpen(idx);
                  }}
               >
                  <Image
                     src={attributes.formats.large.url}
                     placeholder='blur'
                     blurDataURL={attributes.formats.large.blurDataUrl}
                     width={500}
                     height={300}
                     alt={attributes.formats.large.alt ?? 'Zdjęcie przedstawiające wydarzenie opisane w artykule'}
                     className='h-full  w-full  object-cover'
                  />
               </Button>
            );
         })}
      </>
   );
};
