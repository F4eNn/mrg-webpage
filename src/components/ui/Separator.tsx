import React from 'react';

import { cn } from '@/utils/cn';

type SeparatorProps = {
   className?: string;
};

export const Separator = ({ className }: SeparatorProps) => {
   return <div className={cn('my-3 h-[2px] w-full bg-lightGrey', className)} />;
};
