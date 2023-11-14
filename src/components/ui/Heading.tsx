import React from 'react';

import { cn } from '@/utils/cn';

type HeadingProps = {
   as: 'h1' | 'h2' | 'h3';
   title: string;
   className?: string;
};

export const Heading = ({ as, title, className }: HeadingProps) => {
   if (as === 'h2') {
      return <h2 className={cn('text-center text-xl phones:text-2xl md:text-3xl', className)}>{title}</h2>;
   } else if (as === 'h3') {
      return <h3 className={cn('text-lg phones:text-2xl font-bold', className)}>{title}</h3>;
   }
   return <h1 className={cn('', className)}>{title}</h1>;
};
