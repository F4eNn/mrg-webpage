import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

import { navigationPaths } from '@/constants/navigation';
import { buttonVariants } from '@/components/controls/Button';

export const metadata: Metadata = {
   title: 'Not found',
   description: 'Adres Url jest nie poprawny',
};

const NotFound = () => {
   return (
      <div className='mt-10 flex flex-col  items-center justify-center gap-5 '>
         <h1 className='text-3xl font-bold'>Oops!</h1>
         <p className='text-center'>
            Przepraszamy, nie znaleziono strony z podanym adresem <br /> Wróc do strony głównej.
         </p>
         <Link
            className={buttonVariants({ variant: 'secondary', size: 'default', className: 'border-[1px]' })}
            href={navigationPaths.home.path}
         >
            Home
         </Link>
      </div>
   );
};

export default NotFound;
