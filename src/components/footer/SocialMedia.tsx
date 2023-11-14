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
      <div className='  mt-2 flex flex-col gap-5 lg:mt-0'>
         <Link
            href='mailto:mateusz4k@outlook.com'
            className='  group flex items-center gap-3.5 p-1.5 text-lg font-bold '
         >
            <At />
            <span className='colors-300 relative underline underline-offset-4 group-hover:text-metalic'>
               mateusz4k@outlook.com
            </span>
         </Link>
         <div className='flex gap-6 phones:gap-8'>
            {icons.map(({ icon, url, label }, idx) => (
               <Link className='transform-300 p-1.5 hover:scale-[1.15]' aria-label={label} key={url + idx} href={url}>
                  {icon}
               </Link>
            ))}
         </div>
      </div>
   );
};
