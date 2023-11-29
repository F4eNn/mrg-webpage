'use client';

import { Button, buttonVariants } from '@/components/controls/Button';
import { Heading } from '@/components/ui/Heading';
import { Wrapper } from '@/components/ui/Wrapper';
import { navigationPaths } from '@/constants/navigation';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
   return (
      <html>
         <body>
            <main className='h-screen bg-white pt-10'>
               <Wrapper className='flex flex-col items-center gap-10'>
                  <Heading as='h3' className='max-w-[600px]' title={`Oops! ${error.message}`} />
                  <div className='space-x-10'>
                     <Button variant={'secondary'} size={'default'} onClick={() => reset()}>
                        Spróbuj ponownie
                     </Button>
                     <a
                        href={navigationPaths.home.path}
                        className={buttonVariants({ size: 'default', variant: 'secondary' })}
                     >
                        Home
                     </a>
                  </div>
               </Wrapper>
            </main>
         </body>
      </html>
   );
}
