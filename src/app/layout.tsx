/** @format */
import './globals.css';

import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

import { Header } from '@/components/header/Header';

const roboto = Roboto({ subsets: ['latin'], weight: ['100', '300', '400', '500', '700'] });

export const metadata: Metadata = {
   title: 'Młodzieżowa Rada Gminy ',
   description: 'Portal młodzieżowy',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <html lang='pl-PL'>
         <body className={roboto.className}>
            <Header />
            {children}
         </body>
      </html>
   );
}
