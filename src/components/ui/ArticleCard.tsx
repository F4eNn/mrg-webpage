import React, { ComponentProps } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import Image from 'next/image';
import Link, { LinkProps } from 'next/link';

import { cn } from '@/utils/cn';

import { Dot } from './Dot';
import { Heading } from './Heading';
import { TextDesc } from './TextDesc';
import { buttonVariants } from '../controls/Button';
import ArrowIcon from '../../../public/assets/share/right-arrow.svg';
import { Backdrop } from './Backdrop';

const cardVariants = cva('rounded-sm overflow-hidden  mx-auto bg-white shadow-md', {
   variants: {
      variant: {
         now: 'flex flex-col  justify-between ',
         fresh: 'flex flex-col justify-between w-full hover:scale-[1.02] transform-300 active:scale-100',
         stale: 'relative w-full   hover:scale-[1.02] transform-300 active:scale-100  ',
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

interface ArticleCardProps
   extends VariantProps<typeof cardVariants>,
      ComponentProps<'article'>,
      Pick<LinkProps, 'href'> {}
      

export const ArticleCard = ({ size, variant, className, href, ...props }: ArticleCardProps) => {

   if (variant === 'fresh') {
      return (
         <Link href={href} className={cn(cardVariants({ size, variant, className }))}>
            <Image
               src='/dummy.jpg'
               alt='dummy image'
               width={600}
               height={600}
               className='h-[200px] w-full object-cover '
            />
            <div className='mb-5 space-y-9 px-4 py-6 md:p-6 '>
               <CreatedTime isNew={false} />
               <Heading
                  as='h3'
                  title='Lorem ipsum dolor sit amet consectetur.optio itques optio itaque'
                  className='my-5 line-clamp-2'
               />
            </div>
         </Link>
      );
   }

   if (variant === 'stale') {
      return (
         <Link href={href} className={cn(cardVariants({ size, variant, className }))}>
            <Backdrop className='z-0 bg-black/40  ' />
            <Image
               src='/dummy.jpg'
               alt='dummy image'
               width={600}
               height={600}
               className=' h-[225px] xl:h-[163px] w-full object-cover'
            />
            <Heading
               as='h3'
               title='Lorem ipsum dolor sit amet consectetur.optio itques optio itaques'
               className='absolute bottom-0 left-4 right-3 my-5 line-clamp-2 text-white md:left-6'
            />
         </Link>
      );
   }

   return (
      <article {...props} className={cn(cardVariants({ size, variant, className }))}>
         <Image src='/dummy.jpg' alt='dummy image' width={600} height={600} className='h-[250px] w-full object-cover' />
         <div className='space-y-9 px-4  py-6 md:p-6'>
            <CreatedTime />
            <div className='space-y-7'>
               <Heading
                  as='h3'
                  title='Lorem ipsum dolor sit amet consectetur.optio itques optio itaque'
                  className='my-5 line-clamp-2'
               />
               <TextDesc className='line-clamp-3 text-left'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio itaque eum debitis facere, impedit
                  neque asperiores, eius, laboriosam possimus ea iure quas. Ducimus ea accusamus dolore deleniti
                  laboriosam, est sit harum asperiores voluptates officia, placeat dolores, nisi eum!
               </TextDesc>
            </div>
         </div>
         <Link
            className={buttonVariants({
               variant: 'borderTop',
               size: 'tracking',
               className: 'group flex items-center justify-between ',
            })}
            href={href}
         >
            Zobacz więcej
            <ArrowIcon className='colors-300 stroke-lightblack group-hover:stroke-white' />
         </Link>
      </article>
   );
};

const CreatedTime = ({ isNew = true }: { isNew?: boolean }) => {
   return (
      <div className='flex items-center justify-between'>
         <span className='flex items-center gap-2 text-xs phones:text-sm'>
            <span className='font-light italic'>Dodano</span> 23 lutego 2023
            <Dot className=' static -right-3  h-2 w-2 ' />
         </span>
         {isNew && (
            <span className='ml-5 animate-pulse text-sm font-bold uppercase tracking-widest text-orange-400'>Nowe</span>
         )}
      </div>
   );
};
