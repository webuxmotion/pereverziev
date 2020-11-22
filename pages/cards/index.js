import { getDataFromTree } from '@apollo/react-ssr';

import withApollo from '../../hoc/withApollo';
import { useGetUserCards } from '../../apollo/actions';
import BaseLayout from '../../layouts/BaseLayout';
import Spinner from '../../components/shared/Spinner';

function Cards() {
  const { loading, error, data } = useGetUserCards();

  if (error) return <p>Error :(</p>;

  return (
    <BaseLayout>
      { loading && <Spinner /> }
      { !loading &&
        <div className="page-wrapper">
          <h1>Cards</h1>
          {
            data.userCards.map(({ _id, title, content, link }) => (
              <div key={_id}>
                <p>
                  {title}
                  {content}
                  {link}
                </p>
              </div>
            ))
          }
        </div>
      }
      
    </BaseLayout>
  );
}

export default withApollo(Cards, { getDataFromTree })
