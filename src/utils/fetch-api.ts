import qs from 'qs';

import { API_TOKEN, BACKEND_URL_API } from '@/constants/config';

import { getErrorMessage } from './getErrorMessage';

interface FetchAPIResponse<T> {
   data?: T;
}

export const fetchAPI = async <T>(path: string, urlParamsObject = {}, options = {}): Promise<FetchAPIResponse<T>> => {
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
         throw new Error('Przepraszamy, nie znaleziono danych, spróbuj ponownie później.')
      }
      if (res.status === 403 || res.status === 500 || res.status === 401) {
         throw new Error('Wykryto błąd po stronie serwera, spróbuj ponownie później');
      }
      if (!res.ok) {
         throw new Error('Wykryto nieoczekiwany błąd, spróbuj ponownie poźniej');
      }
      const data = await res.json();
      return data;
   } catch (error) {
      throw new Error(getErrorMessage(error));
   }
};
