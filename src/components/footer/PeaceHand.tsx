'use client';
import React, { useRef } from 'react';
import {motion, useInView} from 'framer-motion';

import { peaceHandAnimation } from '@/animations/footer';


export const PeaceHand = () => {
   const scope = useRef<HTMLDivElement>(null);
   const isInView = useInView(scope);

   return (
      <div ref={scope} className='absolute left-1/4 hidden lg:top-[50px] lg:inline-block xl:top-[100px]'>
         <motion.svg width='148' height='141' viewBox='0 0 148 141' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <g clipPath='url(#clip0_34_2)'>
               <motion.path
                  {...peaceHandAnimation(isInView)}
                  d='M84.3367 110.681C78.6625 96.3841 65.0581 100.549 64.3161 100.574C70.5125 97.0258 83.0039 92.8972 83.5367 86.5654C83.1798 75.8059 73.1994 77.2514 72.8284 77.2637C44.1231 85.2728 45.6318 85.9656 44.4326 83.4054C43.4733 81.3572 30.1361 59.242 23.5875 48.4404C22.0158 45.848 17.7761 41.2047 22.4024 35.1085C28.8222 27.0958 36.0191 31.314 37.1568 32.0191C41.3117 34.11 46.2397 43.8263 46.8628 44.6971C61.0562 69.4829 58.6947 65.4756 56.8291 54.0234L53.8893 32.5785C52.9503 26.6667 55.412 22.4994 59.444 20.8802C64.2179 19.236 69.4859 21.2897 70.6482 22.7369'
                  stroke='#facc13'
                  strokeLinecap='round'
                  strokeLinejoin='round'
               />
               <motion.path
                  {...peaceHandAnimation(isInView)}
                  d='M70.6482 22.7368C72.9727 25.6311 72.9973 26.3731 73.4422 28.5869C75.6665 39.6557 79.1258 61.0834 79.7194 61.0637C94.2336 59.6909 103.644 61.2652 104.243 61.3645C110.219 62.3549 114.371 64.3714 116.325 67.2779C119.767 72.5122 119.478 72.7447 120.021 77.9266C122.875 96.7744 117.703 108.831 114.165 114.149C110.409 120.34 94.3233 131.818 60.0325 128.201C50.708 127.025 51.0667 126.642 45.7248 122.362C38.8374 116.276 38.7931 114.94 37.181 111.131C33.1632 101.979 33.3763 99.446 34.3765 93.7672C35.3541 89.6492 40.7245 85.8311 44.8405 84.506'
                  stroke='#facc13'
                  strokeLinecap='round'
                  strokeLinejoin='round'
               />
            </g>
            <defs>
               <clipPath id='clip0_34_2'>
                  <rect width='122.013' height='113.069' fill='white' transform='translate(0 31.5793) rotate(-15)' />
               </clipPath>
            </defs>
         </motion.svg>
      </div>
   );
};
