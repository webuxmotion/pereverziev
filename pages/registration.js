import withApollo from '../hoc/withApollo';
import { useSignUp } from '../apollo/actions';

import BaseLayout from '../layouts/BaseLayout';
import RegisterForm from '../components/forms/RegisterForm';
import Errors from '../components/shared/Errors';
import Redirect from '../components/shared/Redirect';
import { FormCard } from '../components/shared';

const Registration = () => {
  const [signUp, { data, error, loading }] = useSignUp();

  return (
    <BaseLayout>
      <div className="g-top-section">
        <FormCard title="Registration">
          { error && (
            <div className="g-pb-2">
              { error && <Errors error={error} /> }
            </div>
          )}
          
          <RegisterForm onSubmit={registerData => {
            signUp({ variables: registerData })
          }} />
        </FormCard>

        { data && data.signUp && <Redirect to="/login" query={{ message: 'LOGGED_IN' }} /> }
      </div>
    </BaseLayout>
  )
}

export default withApollo(Registration);
