import qs from 'qs';

import { API_TOKEN, BACKEND_URL_API } from '@/constants/config';

import { getErrorMessage } from './getErrorMessage';

export const fetchAPI = async (path: string, urlParamsObject = {}, options = {}) => {
   try {
      const mergedOptions = {
         headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${API_TOKEN}`,
         },
         ...options,
      };

      const queryString = qs.stringify(urlParamsObject);
      const requestURL = `${BACKEND_URL_API}${path}${queryString ? `?${queryString}` : ''}`;
      const res = await fetch(requestURL, mergedOptions);

      if (res.status === 404) {
         throw new Error('404');
      }
      if (res.status === 403 || res.status === 500 || res.status === 401) {
         throw new Error('Wykryto błąd po stronie serwera, spróbuj ponownie lub wróć do strony głównej.');
      }
      if (!res.ok) {
         throw new Error('Wykryto nieoczekiwany błąd, spróbuj ponownie lub wróć do strony głównej.');
      }
      const data = await res.json();
      return data;
   } catch (error) {
      console.error(error);
      return {
         errMsg: getErrorMessage(error),
      };
   }
};
