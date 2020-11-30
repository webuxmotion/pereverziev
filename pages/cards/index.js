import { useEffect } from 'react'
import { getDataFromTree } from '@apollo/react-ssr';

import withApollo from '../../hoc/withApollo';
import { useGetCards, useDeleteCard, useLazyGetUser } from '../../apollo/actions';
import BaseLayout from '../../layouts/BaseLayout';
import { Spinner, Secret, Button, Card } from '../../components/shared';

function Cards() {
  const { loading, error, data } = useGetCards();
  const [deleteCard] = useDeleteCard();
  const [getUser, { data: userData }] = useLazyGetUser();

  useEffect(() => {
    getUser();
  }, []);

  if (error) return <p>Error :(</p>;

  const handleDelete = (id) => {
    deleteCard({ variables: { id }});
  }

  return (
    <BaseLayout>
      { loading && <Spinner /> }
      { !loading && userData &&
        <div className="page-wrapper">
          <div className="cards-page__container">
            <h1>Cards</h1>
            <Secret roles={['admin', 'writer']}>
              <Button href="/cards/add">Add card</Button>
            </Secret>
            <div className="cards-page__list">
              {
                data.cards.map((card) => {
                  const handler = card.user._id === userData?.user?._id ? handleDelete : null;

                  return (
                    <div key={card._id} className="cards-page__card-item">
                      <Card card={card} onHandleDeleteClick={handler} />
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      }
    </BaseLayout>
  );
}

export default withApollo(Cards, { getDataFromTree })
