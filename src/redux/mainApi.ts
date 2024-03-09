import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL, BEARER_KEY } from '../utils/const';

export const mainApi = createApi({
  reducerPath: 'mainApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      headers.set('Authorization', localStorage.getItem(BEARER_KEY) || '');

      return headers;
    },
  }),
  endpoints: () => ({}),
});
