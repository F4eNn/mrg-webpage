import React from 'react';

import { cn } from '@/utils/cn';

type HeadingProps = {
   as: 'h1' | 'h2' | 'h3';
   title: string;
   className?: string;
};

export const Heading = ({ as, title, className }: HeadingProps) => {
   if (as === 'h2') {
      return <h2 className={cn('text-center text-xl font-bold phones:text-3xl md:text-3xl text-lightblack', className)}>{title}</h2>;
   } else if (as === 'h3') {
      return <h3 className={cn('text-lg text-center font-bold phones:text-2xl text-lightblack', className)}>{title}</h3>;
   }
   return <h1 className={cn('text-xl font-bold text-center phones:text-3xl md:text-4xl text-lightblack', className)}>{title}</h1>;
};
