import React, { ReactNode } from 'react';
import Link from 'next/link';

import Instagram from '../../../public/assets/footer/instagram.svg';
import Facebook from '../../../public/assets/footer/facebook.svg';
import TikTok from '../../../public/assets/footer/tiktok.svg';
import YouTube from '../../../public/assets/footer/youtube.svg';
import At from '../../../public/assets/footer/At.svg';

export const SocialMedia = () => {
   type IconArray = {
      url: string;
      icon: ReactNode;
      label: 'Instagram' | 'Facebook' | 'YouTube' | 'TikTok';
   };

   const icons: IconArray[] = [
      { url: '', icon: <Instagram />, label: 'Instagram' },
      { url: '', icon: <Facebook />, label: 'Facebook' },
      { url: '', icon: <YouTube />, label: 'YouTube' },
      { url: '', icon: <TikTok />, label: 'TikTok' },
   ];
   return (
      <div className='mt-2 flex flex-col gap-7 lg:mt-0'>
         <Link href='' className='flex items-center gap-3.5 text-lg font-bold'>
            <At /> mateusz4k@outlook.com
         </Link>
         <div className='flex gap-8 phones:gap-10'>
            {icons.map(({ icon, url, label }, idx) => (
               <Link aria-label={label} key={url + idx} href={url}>
                  {icon}
               </Link>
            ))}
         </div>
      </div>
   );
};
