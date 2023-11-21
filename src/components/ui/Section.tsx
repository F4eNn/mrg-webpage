import React, { ComponentProps } from 'react';

import { PropsWithChildren } from '@/types/global';

type SectionProps = Pick<ComponentProps<'section'>, 'id'> & PropsWithChildren;

export const Section = ({ children, ...rest }: SectionProps) => {
   return (
      <section {...rest} className='my-24 lg:my-32'>
         {children}
      </section>
   );
};
