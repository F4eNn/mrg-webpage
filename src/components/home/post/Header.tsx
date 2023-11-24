'use client';
import React from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { CreatedTime } from '@/components/ui/ArticleCard';
import { IPostData } from '@/app/(default-site)/[...post]/page';
import { Backdrop } from '@/components/ui/Backdrop';

interface IPostHeaderTypes extends Pick<IPostData, 'publishedAt'> {
   title: IPostData['tytul'];
   main_picture: IPostData['zdjecie_glowne'];
   blurderPicture: string | undefined;
}

export const PostHeader = ({ publishedAt, title, main_picture, blurderPicture }: IPostHeaderTypes) => {
   const { alt, height, url, width } = main_picture.data.attributes;
   const { get } = useSearchParams();
   const isNew = get('isNew') === 'true';

   return (
      <Section size={'none'} className='mt-28 md:mt-48'>
         <div className='space-y-14 '>
            <div className='space-y-10'>
               <CreatedTime publishedAt={publishedAt} isNew={isNew} />
               <Heading as='h1' className='sm:text-left' title={title} />
            </div>
            <div className='relative z-0'>
               <Backdrop className='z-20 bg-black/30' />
               <Image
                  src={url}
                  blurDataURL={blurderPicture}
                  placeholder='blur'
                  width={width}
                  height={height}
                  priority={true}
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw'
                  alt={alt ?? 'Wydarzenie przedstawione w artykule'}
                  className='max-h-[500px] w-full object-cover'
               />
            </div>
         </div>
      </Section>
   );
};
