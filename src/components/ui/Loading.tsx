import React from 'react';
import Image from 'next/image';

const Loading = () => {
   return (
      <div className=' flex h-[300px] items-center justify-center border-none bg-[#f8f8f8]'>
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
