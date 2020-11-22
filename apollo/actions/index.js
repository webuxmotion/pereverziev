import { useQuery, useLazyQuery, useMutation } from '@apollo/client';

import { 
  GET_DOCS,
  GET_USER_CARDS,
  SIGN_UP,
  SIGN_IN,
  SIGN_OUT,
  GET_USER,
} from '../queries';

export const useGetDocs = () => useQuery(GET_DOCS);

export const useGetUserCards = () => useQuery(GET_USER_CARDS);

export const useSignUp = () => useMutation(SIGN_UP);

export const useSignIn = () => useMutation(SIGN_IN, {
  update(cache, { data: { signIn: signedInUser }}) {
    cache.writeQuery({
      query: GET_USER,
      data: { user: signedInUser }
    })
  }
});

export const useLazyGetUser = () => useLazyQuery(GET_USER);

export const useGetUser = () => useQuery(GET_USER);

export const useSignOut = () => useMutation(SIGN_OUT);
