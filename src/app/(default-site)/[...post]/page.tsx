import React from 'react';

import { PostHeader } from '@/components/home/post/Header';
import { Wrapper } from '@/components/ui/Wrapper';
import { PostContent } from '@/components/home/post/Content';
import { PostGallery } from '@/components/home/post/gallery/Gallery';
import { Aside } from '@/components/home/post/Aside';
import { getBase64, getBase64ForAllImg } from '@/utils/blurDataUrl';
import { fetchAPI } from '@/utils/fetch-api';
import { IFormatType, RootDataType } from '@/types/model';

export const revalidate = 86400;

export interface IPostData {
   zawartosc_posta: string;
   tytul: string;
   publishedAt: string;
   zdjecie_glowne: {
      data: {
         attributes: IFormatType;
      };
   };
   galeria: { data: { id: number; attributes: IFormatType }[] };
}

export interface IFetchResult<T> {
   data: RootDataType<T> | undefined;
}

const getPost = async (param: string): Promise<IFetchResult<IPostData>> => {
   const urlParamsObject = {
      populate: {
         zdjecie_glowne: { fields: ['formats'] },
         galeria: { fields: ['formats'] },
      },
      fields: ['tytul', 'zawartosc_posta', 'publishedAt'],
   };
   const { data } = await fetchAPI<RootDataType<IPostData>>(`/slugify/slugs/home-post/${param}`, urlParamsObject);
   return { data };
};

const PostPage = async ({ params }: { params: { post: string[] } }) => {
   if (params.post[1] === undefined) return null;

   const { data } = await getPost(params.post[1]);

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
