import { mainApi } from '../../redux/mainApi';
import { LoginFormData, signInResType } from './types';
import { UserType } from '../../utils/types';

const loginApi = mainApi.injectEndpoints({
  endpoints: (build) => ({
    signIn: build.mutation<signInResType, LoginFormData>({
      query: (body) => ({
        url: 'authorize/jwt/create',
        method: 'POST',
        body,
      }),
    }),
    getCurrentUser: build.query<UserType, void>({
      query: () => 'authorize/users/me',
    }),
  }),
  overrideExisting: false,
});

export const { useSignInMutation, useGetCurrentUserQuery } = loginApi;
