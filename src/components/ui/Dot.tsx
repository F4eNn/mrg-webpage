import React from 'react';

import { cn } from '@/utils/cn';

export const Dot = ({ className }: { className: string }) => {
   return <div className={cn('absolute h-5 w-5 rounded-full bg-yellow', className)} />;
};
