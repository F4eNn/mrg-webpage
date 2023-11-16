import React from 'react';

import { cn } from '@/utils/cn';

type BackdropProps = {
   className?: string;
};

export const Backdrop = ({ className }: BackdropProps) => {
   return <div className={cn('absolute inset-0 -z-10 bg-black/70', className)} />;
};
