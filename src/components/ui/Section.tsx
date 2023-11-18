import React from 'react';

import { PropsWithChildren } from '@/types/global';

export const Section = ({ children }: PropsWithChildren) => {
   return <section className='lg:my-32 my-24'>{children}</section>;
};
