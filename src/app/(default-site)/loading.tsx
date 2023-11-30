import Image from 'next/image';
import React from 'react';

const Loading = () => {
   return (
      <div className='fixed inset-0 z-[9999] flex items-center justify-center border-none bg-[#f8f8f8]'>
         <Image
            src='/assets/spinner.png'
            alt='Loading...'
            width={100}
            height={100}
            className='animate-spin border-none'
         />
      </div>
   );
};

export default Loading;
