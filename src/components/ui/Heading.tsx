import React from 'react';

type HeadingProps = {
   as: 'h1' | 'h2' | 'h3';
   title: string;
};

export const Heading = ({ as, title }: HeadingProps) => {
   if (as === 'h2') {
      return <h2 className='text-xl phones:text-2xl text-center'>{title}</h2>;
   } else if (as === 'h3') {
      return <h3 className='text-lg font-bold text-center'>{title}</h3>;
   }
   return <h1>{title}</h1>;
};
