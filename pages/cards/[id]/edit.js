import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

import withApollo from '../../../hoc/withApollo';
import withAuth from '../../../hoc/withAuth';
import { useGetCard, useUpdateCard } from '../../../apollo/actions';

import BaseLayout from '../../../layouts/BaseLayout';
import CardForm from '../../../components/forms/CardForm';
import Errors from '../../../components/shared/Errors';

const EditCard = withAuth(() => {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useGetCard({ variables: { id }});
  const [updateCard, { error }] = useUpdateCard();

  const handleCardUpdate = async (inputData) => {
    await updateCard({ variables: { id, ...inputData }});
    console.log('dfdfd');
    toast.success('Portfolio has been updated!');
  }

  return (
    <BaseLayout>
      <div className="page-wrapper">
        <h1>Edit Card</h1>
        { error && <Errors error={error} /> }
        { data && 
          <CardForm
            initialData={data.card}
            onSubmit={handleCardUpdate}
          />
        }
      </div>
    </BaseLayout>
  )
}, ['admin', 'writer']);

export default withApollo(EditCard);
