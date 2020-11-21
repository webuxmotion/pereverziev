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
