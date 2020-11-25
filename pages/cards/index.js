import { getDataFromTree } from '@apollo/react-ssr';
import withApollo from '../../hoc/withApollo';
import { useGetCards } from '../../apollo/actions';
import BaseLayout from '../../layouts/BaseLayout';
import Spinner from '../../components/shared/Spinner';
import Secret from '../../components/shared/Secret';
import Button from '../../components/shared/Button';
import Card from '../../components/shared/Card';

function Cards() {
  const { loading, error, data } = useGetCards();

  if (error) return <p>Error :(</p>;

  return (
    <BaseLayout>
      { loading && <Spinner /> }
      { !loading &&
        <div className="page-wrapper">
          <div className="cards-page__container">
            <h1>Cards</h1>
            <Secret roles={['admin']}>
              <Button href="/cards/add">Add card</Button>
            </Secret>
            <div className="cards-page__list">
              {
                data.cards.map((card) => (
                  <div key={card._id} className="cards-page__card-item">
                    <Card card={card} />
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      }
    </BaseLayout>
  );
}

export default withApollo(Cards, { getDataFromTree })
