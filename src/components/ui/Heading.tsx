import React, { PropsWithChildren } from 'react';

import { cn } from '@/utils/cn';

type HeadingProps = PropsWithChildren & {
   as: 'h1' | 'h2' | 'h3';
   title?: string;
   className?: string;
};

export const Heading = ({ as, title, children, className }: HeadingProps) => {
   if (as === 'h2') {
      return (
         <h2 className={cn('text-center text-xl font-bold text-lightblack phones:text-3xl md:text-3xl', className)}>
            {title || children}
         </h2>
      );
   } else if (as === 'h3') {
      return (
         <h3 className={cn('text-center text-lg font-bold text-lightblack phones:text-2xl', className)}>
            {title || children}
         </h3>
      );
   }
   return (
      <h1 className={cn('text-center text-xl font-bold text-lightblack phones:text-3xl md:text-4xl', className)}>
         {title || children}
      </h1>
   );
};
