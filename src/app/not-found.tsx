import React from 'react';
import type { Metadata } from 'next';

import { navigationPaths } from '@/components/constants/navigation';
import { LinkButton } from '@/components/ui/LinkButton';

export const metadata: Metadata = {
   title: 'Not found',
   description: 'Adres Url jest nie poprawny',
};

const NotFound = () => {
   return (
      <div className='mt-10 flex flex-col items-center justify-center gap-5'>
         <h1 className='text-3xl font-bold'>Oops!</h1>
         <p className='text-center'>
            Przepraszamy, nie znaleziono strony z podanym adresem <br /> Wróc do strony głównej.
         </p>

         <LinkButton
            className='bg-gray-600 px-10 text-white hover:bg-gray-700'
            href={navigationPaths.home.path}
            title='Home'
         />
      </div>
   );
};

export default NotFound;
