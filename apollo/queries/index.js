import { gql } from '@apollo/client';

export const GET_DOCS = gql`
  query GetDocs {
    docs {
      title
      content
    }
  }
`;

export const SIGN_UP = gql`
  mutation SignUp(
    $email: String!
    $password: String!
    $passwordConfirmation: String!
  ) {
    signUp(input: {
      email: $email
      password: $password
      passwordConfirmation: $passwordConfirmation
    })
  }
`;

export const SIGN_IN = gql`
  mutation SignIN(
    $email: String!
    $password: String!
  ) {
    signIn(input: {
      email: $email
      password: $password
    }) {
      _id
      email
      role
    }
  }
`;

export const SIGN_OUT = gql`
  mutation SignOut { signOut }
`;

export const GET_USER = gql`
  query User {
    user {
      _id
      email
      role
    }
  }
`;
