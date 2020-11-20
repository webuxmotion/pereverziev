import { gql } from '@apollo/client';

export const GET_DOCS = gql`
  query GetDocs {
    docs {
      title
      content
    }
  }
`;
