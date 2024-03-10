import { mainApi } from '../../redux/mainApi';
import { AmbassadorsType, AmbassadorInfoType } from '../../utils/types';

const AmbassadorApi = mainApi.injectEndpoints({
  endpoints: (build) => ({
    getAmbassadorsList: build.query<AmbassadorsType[], void>({
      query: () => 'api/ambassadors/',
    }),
    getAmbassadorInfo: build.query<AmbassadorInfoType, string>({
      query: (id) => `api/ambassadors/${id}`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetAmbassadorsListQuery, useGetAmbassadorInfoQuery } =
  AmbassadorApi;
