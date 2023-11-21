import React, { ComponentProps } from 'react';

import { PropsWithChildren } from '@/types/global';
import { cn } from '@/utils/cn';

type SectionProps = Pick<ComponentProps<'section'>, 'id' | 'className'> & PropsWithChildren;

export const Section = ({ children, className, ...rest }: SectionProps) => {
   return (
      <section {...rest} className={cn('my-24 lg:my-32', className)}>
         {children}
      </section>
   );
};
