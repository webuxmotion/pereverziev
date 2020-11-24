import { useQuery, useLazyQuery, useMutation } from '@apollo/client';

import { 
  GET_DOCS,
  GET_USER_CARDS,
  GET_CARDS,
  SIGN_UP,
  SIGN_IN,
  SIGN_OUT,
  GET_USER,
  CREATE_CARD,
} from '../queries';

export const useCreateCard = () => useMutation(CREATE_CARD, {
  update(cache, { data: { createCard } }) {
    const { cards } = cache.readQuery({ query: GET_CARDS });
    const newCards = [...cards, createCard];

    cache.writeQuery({
      query: GET_CARDS,
      data: { cards: newCards }
    });
  }
});

export const useGetDocs = () => useQuery(GET_DOCS);

export const useGetUserCards = () => useQuery(GET_USER_CARDS);
export const useGetCards = () => useQuery(GET_CARDS);

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
