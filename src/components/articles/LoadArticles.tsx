'use client';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { ArticlesData, ArticlesFetchResponse } from '@/app/(default-site)/artykuly/page';
import { IMetaStrapi, RootDataType } from '@/types/model';
import { fetchAPI } from '@/utils/fetch-api';

import { ArticleCard } from '../ui/ArticleCard';
import Loading from '../ui/Loading';

export const LoadArticles = () => {
   const { ref, inView } = useInView({ rootMargin: '375px' });

   const [dataArticle, setDataArticle] = useState<RootDataType<ArticlesData>[]>([]);
   const [isFetching, setIsFetching] = useState(false);
   const [hasMore, setHasMore] = useState(false);

   const fetchArticles = async (pageNumber: number) => {
      const path = '/home-posts';

      const urlParamsObject = {
         sort: ['publishedAt:desc'],
         populate: {
            zdjecie_glowne: {
               fields: ['formats'],
            },
         },
         fields: ['tytul', 'publishedAt', 'slug'],
         pagination: {
            start: pageNumber,
            limit: 10,
         },
      };

      const apiUrl = await fetchAPI<ArticlesFetchResponse, IMetaStrapi>(path, urlParamsObject);
      return apiUrl;
   };
   useEffect(() => {
      if (inView) {
         const fetchMoreArticles = async () => {
            setIsFetching(true);
            const startWithoutFreshArticels = 8;
            const { data, meta } = await fetchArticles(startWithoutFreshArticels + dataArticle.length);
            setDataArticle(prev => [...prev, ...(data as ArticlesFetchResponse)]);

            setIsFetching(false);
            setHasMore(meta!.pagination.total - startWithoutFreshArticels === dataArticle.length);
         };
         fetchMoreArticles();
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [inView]);

   return (
      <>
         {dataArticle.map(({ attributes, id }) => (
            <ArticleCard key={id} articleData={attributes} variant={'fresh'} />
         ))}
         <div ref={ref} className='md:col-span-2 xl:col-span-3 2xl:col-span-4'>
            {isFetching && <Loading />}
            {hasMore && (
               <p className='text-center text-2xl font-[500] italic'>
                  To już wszystko <span className='not-italic'>✨😄</span>
               </p>
            )}
         </div>
      </>
   );
};
