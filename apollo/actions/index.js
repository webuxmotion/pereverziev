import { useQuery, useMutation } from '@apollo/client';

import { 
  GET_DOCS,
  SIGN_UP,
} from '../queries';

export const useGetDocs = () => useQuery(GET_DOCS);

export const useSignUp = () => useMutation(SIGN_UP);
