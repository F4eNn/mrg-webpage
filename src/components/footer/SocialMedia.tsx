import React, { ReactNode } from 'react';
import Link from 'next/link';

import Instagram from '../../../public/assets/footer/instagram.svg';
import Facebook from '../../../public/assets/footer/facebook.svg';
import TikTok from '../../../public/assets/footer/tiktok.svg';
import YouTube from '../../../public/assets/footer/youtube.svg';

export const SocialMedia = () => {
   type IconArray = {
      url: string;
      icon: ReactNode;
   };

   const icons: IconArray[] = [
      { url: '', icon: <Instagram /> },
      { url: '', icon: <Facebook /> },
      { url: '', icon: <YouTube /> },
      { url: '', icon: <TikTok /> },
   ];
   return (
      <ul className='text flex gap-8'>
         {icons.map(({ icon, url }, idx) => (
            <li key={url + idx}>
               <Link href={url}>{icon}</Link>
            </li>
         ))}
      </ul>
   );
};
