import React, { ComponentProps } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/utils/cn';
import { IPartialArticleData } from '@/app/(default-site)/page';

import { Dot } from './Dot';
import { Heading } from './Heading';
import { TextDesc } from './TextDesc';
import { buttonVariants } from '../controls/Button';
import ArrowIcon from '../../../public/assets/share/right-arrow.svg';
import { Backdrop } from './Backdrop';

const cardVariants = cva('rounded-sm overflow-hidden  mx-auto bg-white shadow-md', {
   variants: {
      variant: {
         now: 'flex flex-col justify-between w-full',
         fresh: 'flex flex-col justify-between w-full  hover:scale-[1.02] transform-300 active:scale-100',
      },
      size: {
         default: '',
      },
   },
   defaultVariants: {
      variant: 'now',
      size: 'default',
   },
});

interface ArticleCardProps extends VariantProps<typeof cardVariants>, ComponentProps<'article'> {
   articleData: IPartialArticleData;
}

export const ArticleCard = ({ size, variant, className, articleData, ...props }: ArticleCardProps) => {
   const { krotki_opis, publishedAt, slug, tytul, zdjecie_glowne } = articleData;
   const { alternativeText, hash, url } = zdjecie_glowne.data.attributes;

   if (variant === 'fresh') {
      return (
         <Link
            href={{ pathname: `/artykul/${slug}`, query: { isNew: false } }}
            className={cn(cardVariants({ size, variant, className }))}
         >
            <div className='relative'>
               <Image
                  src={`${url}`}
                  blurDataURL={hash}
                  alt={alternativeText ?? 'Zdjęcie poglądowe,czego dotyczy artykuł'}
                  width={600}
                  height={600}
                  className='h-[250px] w-full object-cover sm:h-[300px] md:h-[200px] '
               />
               <Backdrop className='z-10 bg-black/40' />
            </div>
            <div className='mb-5 space-y-9 px-4 py-6 md:p-6 '>
               <CreatedTime publishedAt={publishedAt} isNew={false} />
               <Heading as='h3' title={tytul} className='my-5 line-clamp-2 text-left' />
            </div>
         </Link>
      );
   }

   return (
      <article {...props} className={cn(cardVariants({ size, variant, className }))}>
         <div className='relative'>
            <Image
               src={`${url}`}
               blurDataURL={hash}
               alt={alternativeText ?? 'Zdjęcie poglądowe,czego dotyczy artykuł'}
               width={600}
               height={600}
               className='h-[250px] w-full object-cover sm:h-[350px]'
            />
            <Backdrop className='z-10 bg-black/40' />
         </div>
         <div className='space-y-9 px-4  py-6 md:p-6'>
            <CreatedTime publishedAt={publishedAt} />
            <div className='space-y-7 '>
               <Heading as='h3' title={tytul} className='my-5 line-clamp-2 text-left' />
               <TextDesc className='line-clamp-3 text-left text-lightGrey'>{krotki_opis}</TextDesc>
            </div>
         </div>
         <Link
            className={buttonVariants({
               variant: 'borderTop',
               size: 'tracking',
               className: 'group flex items-center justify-between ',
            })}
            href={{ pathname: `/artykul/${slug}`, query: { isNew: true } }}
         >
            Zobacz więcej
            <ArrowIcon className='colors-300 stroke-lightblack group-hover:stroke-white' />
         </Link>
      </article>
   );
};

export const CreatedTime = ({ isNew = true, publishedAt }: { isNew?: boolean; publishedAt: string }) => {
   const date = new Date(publishedAt);
   const published = date.toLocaleDateString('pl-PL', { year: 'numeric', month: 'long', day: 'numeric' });
   return (
      <div className='flex items-center justify-between'>
         <span className='flex items-center gap-2 text-xs phones:text-sm'>
            <span className='font-light italic'>Dodano</span> {published}
            <Dot className=' static -right-3  h-2 w-2 ' />
         </span>
         {isNew && (
            <span className=' animate-pulse text-sm font-bold uppercase tracking-widest text-orange-400'>Nowe</span>
         )}
      </div>
   );
};
