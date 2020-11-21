import withApollo from '../hoc/withApollo';
import { useSignUp } from '../apollo/actions';

import BaseLayout from '../layouts/BaseLayout';
import RegisterForm from '../components/forms/RegisterForm';
import Errors from '../components/shared/Errors';
import Redirect from '../components/shared/Redirect';

const Registration = () => {
  const [signUp, { data, error, loading }] = useSignUp();

  return (
    <BaseLayout>
      <div className="page-wrapper">
        <h1>Registration</h1>
        { error && <Errors error={error} /> }
        <RegisterForm onSubmit={registerData => {
          signUp({ variables: registerData })
        }} />
        { data && data.signUp &&
          <Redirect
            to="/login"
            query={{ message: 'LOGGED_IN' }}
          />
        }
      </div>
    </BaseLayout>
  )
}

export default withApollo(Registration);
