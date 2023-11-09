import React, { PropsWithChildren } from 'react';

import { cn } from '@/utils/cn';

type WrapperProps = PropsWithChildren & {
   className?: string;
};

export const Wrapper = ({ children, className }: WrapperProps) => {
   return <div className={cn('relative z-[20] mx-auto w-full max-w-[1440px] px-3', className)}>{children}</div>;
};
