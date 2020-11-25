import { getDataFromTree } from '@apollo/react-ssr';
import { useRouter } from 'next/router';

import withApollo from '../../../hoc/withApollo';
import { useGetCard } from '../../../apollo/actions';
import BaseLayout from '../../../layouts/BaseLayout';
import Spinner from '../../../components/shared/Spinner';

function OneCard() {
  const router = useRouter();
  const { query: { id } } = router;
  const { loading, error, data } = useGetCard({ variables: { id }});

  if (error) return <p>Error :(</p>;

  const card = data && data.card || {};
  const { title, content, link } = card;

  return (
    <BaseLayout>
      { loading && <Spinner /> }
      { !loading &&
        <div className="page-wrapper">
          <h1>Card Page</h1>
          <h2>{title}</h2>
          <p>{content}</p>
          <p>{link}</p>
        </div>
      }
      
    </BaseLayout>
  );
}

export default withApollo(OneCard, { getDataFromTree })
