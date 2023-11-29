'use client';

import React, { ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';

import { Button} from '../controls/Button';

export const ErrorBoundary = ({ children }: { children: ReactNode }) => {
   const { refresh } = useRouter();
   return (
      <ReactErrorBoundary FallbackComponent={ErrorFallback} onReset={() => refresh()}>
         {children}
      </ReactErrorBoundary>
   );
};

export const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => {
   return (
      <div role='alert' className='flex h-[300px] flex-col items-center justify-center gap-10'>
         <p className='font-bold italic'>{error.message || 'Coś poszło nie tak'}</p>
         <Button variant={'secondary'} size={'default'} onClick={resetErrorBoundary}>
            Spróbuj ponownie
         </Button>
      </div>
   );
};
