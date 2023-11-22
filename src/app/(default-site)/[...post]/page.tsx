import React from 'react';

import { PostHeader } from '@/components/home/post/Header';
import { Wrapper } from '@/components/ui/Wrapper';
import { PostContent } from '@/components/home/post/Content';
import { PostGallery } from '@/components/home/post/Gallery';
import { Aside } from '@/components/home/post/Aside';

const PostPage = () => {
   return (
      <main className='mb-32'>
         <Wrapper className='grid grid-cols-2 gap-10 lg:grid-cols-4'>
            <article className='col-span-3 space-y-16 '>
               <PostHeader />
               <PostContent />
               <PostGallery />
            </article>
            <div className="relative col-span-3 mt-16 after:absolute after:-left-5 after:bottom-0 after:h-full after:w-[1px] after:bg-lightGrey/50 after:content-[''] lg:col-auto lg:mt-48">
               <Aside />
            </div>
         </Wrapper>
      </main>
   );
};

export default PostPage;
