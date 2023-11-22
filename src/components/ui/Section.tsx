import React, { ComponentProps } from 'react';
import { VariantProps, cva } from 'class-variance-authority';

const sectionVariants = cva('', {
   variants: { size: { default: 'my-24 lg:my-32', none: '' } },
   defaultVariants: { size: 'default' },
});

import { PropsWithChildren } from '@/types/global';
import { cn } from '@/utils/cn';

interface SectionProps
   extends Pick<ComponentProps<'section'>, 'id' | 'className'>,
      PropsWithChildren,
      VariantProps<typeof sectionVariants> {}

export const Section = ({ children, className,size, ...rest }: SectionProps) => {
   return (
      <section {...rest} className={cn(sectionVariants({size,className}))}>
         {children}
      </section>
   );
};
