import { getDataFromTree } from '@apollo/react-ssr';
import withApollo from '../../hoc/withApollo';
import { useGetCards } from '../../apollo/actions';
import BaseLayout from '../../layouts/BaseLayout';
import Spinner from '../../components/shared/Spinner';
import Secret from '../../components/shared/Secret';
import Button from '../../components/shared/Button';

function Cards() {
  const { loading, error, data } = useGetCards();

  if (error) return <p>Error :(</p>;

  return (
    <BaseLayout>
      { loading && <Spinner /> }
      { !loading &&
        <div className="page-wrapper">
          <h1>Cards</h1>
          <Secret roles={['admin']}>
            <Button href="/cards/add">Add card</Button>
          </Secret>
          {
            data.cards.map(({ _id, title, content, link }) => (
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
