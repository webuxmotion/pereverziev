import { useQuery } from '@apollo/client';

import { 
  GET_DOCS,
} from '../queries';

export const useGetDocs = () => useQuery(GET_DOCS);
