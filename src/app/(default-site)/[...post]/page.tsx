import React from 'react';
import { notFound } from 'next/navigation';

import { PostHeader } from '@/components/home/post/Header';
import { Wrapper } from '@/components/ui/Wrapper';
import { PostContent } from '@/components/home/post/Content';
import { PostGallery } from '@/components/home/post/gallery/Gallery';
import { Aside } from '@/components/home/post/Aside';
import { API_TOKEN, BACKEND_URL_API } from '@/constants/config';
import { getErrorMessage } from '@/utils/getErrorMessage';
import { getBase64, getBase64ForAllImg } from '@/utils/blurDataUrl';

import { RootDataType } from '../page';

export const revalidate = 86400;

export interface ImageType {
   url: string;
   alt: string;
   width: number;
   height: number;
   blurDataUrl: string | undefined;
}

export interface FormatType {
   formats: { large: ImageType };
}

export interface IPostData {
   zawartosc_posta: string;
   tytul: string;
   publishedAt: string;
   zdjecie_glowne: {
      data: {
         attributes: FormatType;
      };
   };
   galeria: { data: { id: number; attributes: FormatType }[] };
}

const getPost = async (param: string): Promise<RootDataType<IPostData> | { errMsg: string }> => {
   try {
      const res = await fetch(
         `${BACKEND_URL_API}/slugify/slugs/home-post/${param}?fields[0]=zawartosc_posta&fields[1]=tytul&fields[2]=publishedAt&populate[zdjecie_glowne][fields][0]=formats&populate[galeria][fields][0]=formats`,
         {
            headers: { Authorization: `Bearer ${API_TOKEN}` },
         },
      );
      if (res.status === 404) {
         throw new Error('404');
      }
      if (res.status === 403 || res.status === 500 || res.status === 401) {
         throw new Error('Wykryto błąd po stronie serwera, spróbuj ponownie lub wróć do strony głównej.');
      }
      if (!res.ok) {
         throw new Error('Wykryto nieoczekiwany błąd, spróbuj ponownie lub wróć do strony głównej.');
      }
      const { data }: { data: RootDataType<IPostData> } = await res.json();
      return data;
   } catch (err: unknown) {
      return {
         errMsg: getErrorMessage(err),
      };
   }
};

const PostPage = async ({ params }: { params: { post: string[] } }) => {
   if (params.post[1] === undefined) return null;

   const data = await getPost(params.post[1]);

   if ('errMsg' in data) {
      if (data.errMsg === '404') {
         notFound();
      }
      throw new Error(data.errMsg);
   }
   const { publishedAt, tytul, zawartosc_posta, zdjecie_glowne, galeria } = data.attributes;

   const blurderMainPicutre = await getBase64(zdjecie_glowne.data.attributes.formats.large.url);
   const galleryWithBluredUrl = await getBase64ForAllImg(galeria);
   return (
      <main className='mb-32'>
         <Wrapper className='grid grid-cols-2 gap-10 lg:grid-cols-4'>
            <article className='col-span-3 space-y-16 '>
               <PostHeader
                  publishedAt={publishedAt}
                  title={tytul}
                  main_picture={zdjecie_glowne}
                  blurderPicture={blurderMainPicutre}
               />
               <PostContent content={zawartosc_posta} />
               <PostGallery gallery={galleryWithBluredUrl} />
            </article>
            <div className="relative col-span-3 mt-16 after:absolute after:-left-5 after:bottom-0 after:h-full after:w-[1px] after:bg-lightGrey/50 after:content-[''] lg:col-auto lg:mt-48">
               <Aside />
            </div>
         </Wrapper>
      </main>
   );
};

export default PostPage;
