import { useRouter } from 'next/router';

import withApollo from '../../hoc/withApollo';
import withAuth from '../../hoc/withAuth';
import { useCreateCard } from '../../apollo/actions';

import BaseLayout from '../../layouts/BaseLayout';
import CardForm from '../../components/forms/CardForm';
import Errors from '../../components/shared/Errors';

const AddCard = withAuth(() => {
  const [createCard, { error }] = useCreateCard();
  const router = useRouter();

  const handleCreateCard = async (data) => {
    await createCard({ variables: data });
    
    router.push('/cards')
  }

  return (
    <BaseLayout>
      <div className="page-wrapper">
        <h1>Add Card</h1>
        { error && <Errors error={error} /> }
        <CardForm 
          onSubmit={handleCreateCard}
        />
      </div>
    </BaseLayout>
  )
}, ['admin']);

export default withApollo(AddCard);
