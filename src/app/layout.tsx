import './globals.css';

import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

const roboto = Roboto({ subsets: ['latin'], weight: ['100', '300', '400', '500', '700'] });

export const metadata: Metadata = {
   title: 'Młodzieżowa Rada Gminy ',
   description: 'Portal młodzieżowy',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <html lang='pl-PL' className='scroll-pt-[110px] scroll-smooth'>
         <body className={`${roboto.className} flex min-h-screen flex-col bg-white`}>{children}</body>
      </html>
   );
}
