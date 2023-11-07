import React, { PropsWithChildren } from 'react';

export const Wrapper = ({ children }: PropsWithChildren) => {
   return <div className='relative z-[20] mx-auto w-full max-w-[1440px] px-3'>{children}</div>;
};
