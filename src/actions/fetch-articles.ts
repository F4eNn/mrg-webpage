'use server';

import { fetchAPI } from '@/utils/fetch-api';
import { IMetaStrapi } from '@/types/model';

import { FetchResponse } from '../app/(default-site)/artykuly/page';

export const fetchArticles = async (pageNumber: number = 1) => {
   const perPage = 8;
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
         pageSize: perPage,
         page: pageNumber,
      },
   };

   const apiUrl = await fetchAPI<FetchResponse, IMetaStrapi>(path, urlParamsObject);
   return apiUrl;
};
