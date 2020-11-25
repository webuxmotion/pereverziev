import { gql } from '@apollo/client';

export const CREATE_CARD = gql`
  mutation CreateCard(
    $title: String
    $content: String
    $link: String
  ) {
    createCard (input: {
      title: $title
      content: $content
      link: $link
    }) {
      _id
      title
      content
      link
    }
  }
`;

export const GET_DOCS = gql`
  query GetDocs {
    docs {
      title
      content
    }
  }
`;

export const GET_USER_CARDS = gql`
  query UserCards {
    userCards {
      _id
      title
      content
      link
    }
  }
`;

export const GET_CARDS = gql`
  query Cards {
    cards {
      _id
      title
      content
      link
    }
  }
`;

export const GET_CARD = gql`
  query Card($id: ID) {
    card(id: $id) {
      _id
      title
      content
      link
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
