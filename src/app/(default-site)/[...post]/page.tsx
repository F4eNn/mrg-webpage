import React from 'react';
import { notFound } from 'next/navigation';

import { PostHeader } from '@/components/home/post/Header';
import { Wrapper } from '@/components/ui/Wrapper';
import { PostContent } from '@/components/home/post/Content';
import { PostGallery } from '@/components/home/post/gallery/Gallery';
import { Aside } from '@/components/home/post/Aside';
import { getBase64, getBase64ForAllImg } from '@/utils/blurDataUrl';
import { fetchAPI } from '@/utils/fetch-api';

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

export interface IFetchResult<T> {
   data: RootDataType<T> | undefined;
   errMsg: string | undefined;
}

const getPost = async (param: string): Promise<IFetchResult<IPostData>> => {
   const urlParamsObject = {
      populate: {
         zdjecie_glowne: { fields: ['formats'] },
         galeria: { fields: ['formats'] },
      },
      fields: ['tytul', 'zawartosc_posta', 'publishedAt'],
   };

   const { data, errMsg } = await fetchAPI(`/slugify/slugs/home-post/${param}`, urlParamsObject);
   return { data, errMsg };
};

const PostPage = async ({ params }: { params: { post: string[] } }) => {
   if (params.post[1] === undefined) return null;

   const { data, errMsg } = await getPost(params.post[1]);
   if (errMsg) {
      if (errMsg === '404') {
         notFound();
      }
      throw new Error(errMsg);
   }
   const { publishedAt, tytul, zawartosc_posta, zdjecie_glowne, galeria } = data!.attributes;

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
