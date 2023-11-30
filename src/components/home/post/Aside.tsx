import React from 'react';
import Link from 'next/link';
import { FaTriangleExclamation } from 'react-icons/fa6';

import { Heading } from '@/components/ui/Heading';
import { Dot } from '@/components/ui/Dot';
import { fetchAPI } from '@/utils/fetch-api';
import { RootDataType } from '@/types/model';

interface IAsideFetchResult {
   slug: string;
   tytul: string;
}
type Props = {
   urlSlug: string;
};
export const Aside = async ({ urlSlug }: Props) => {
   const decodedUrl = decodeURIComponent(urlSlug);
   const path = '/home-posts';
   const urlParamsObject = {
      sort: ['publishedAt:desc'],
      fields: ['slug', 'tytul'],
      pagination: { pageSize: 3 },
   };
   const { data } = await fetchAPI<RootDataType<IAsideFetchResult>[]>(path, urlParamsObject);

   if (!data) {
      return (
         <aside className='h-full'>
            <div className='flex flex-col items-center justify-center gap-5  text-5xl'>
               <FaTriangleExclamation color={'#f87171'} />
               <p className='text-center text-lg font-bold italic'>
                  Przepraszamy, nie udało załadować się artykułów, spróbuj ponownie później
               </p>
            </div>
         </aside>
      );
   }
   return (
      <aside className='h-full  '>
         <div className='sticky top-[110px] space-y-12'>
            <Heading as='h3' className='text-center md:text-left' title='Ostatnie artykuły' />
            <ul className='space-y-10'>
               {data.map(({ attributes: { slug, tytul }, id }) => (
                  <li
                     key={id}
                     className={`group flex items-start gap-2 rounded-sm border-2  transition-all  duration-300 ${
                        slug !== decodedUrl ? 'hover:scale-[0.99]' : 'border-orange-200'
                     } hover:border-orange-200 lg:w-full`}
                  >
                     <Link
                        href={`${slug}`}
                        className={`line-clamp-2 ${slug === decodedUrl ? 'bg-orange-50' : ''}  flex w-full gap-2 p-4`}
                     >
                        <div className='mt-1'>
                           <Dot
                              className={`colors-300 static h-3 w-3 ${
                                 slug !== decodedUrl ? 'group-hover:bg-orange-200' : 'bg-orange-200'
                              }`}
                           />
                        </div>
                        <p className='line-clamp-3'>{tytul}</p>
                     </Link>
                  </li>
               ))}
            </ul>
         </div>
      </aside>
   );
};
