import withApollo from '../hoc/withApollo';
import useRouterReplaceTimeout from '../hooks/useRouterReplaceTimeout';
import { useSignIn } from '../apollo/actions';
import messages from '../constants/messages';

import BaseLayout from '../layouts/BaseLayout';
import { Message, Errors, Redirect, FormCard } from '../components/shared';
import LoginForm from '../components/forms/LoginForm';

const Login = () => {
  const [signIn, { data, error, loading }] = useSignIn();
  const message = useRouterReplaceTimeout('/login', '/login');

  return (
    <BaseLayout>
      <div className="g-top-section">
        <FormCard title="Login">
          { (error || message && messages[message]) && (
            <div className="g-pb-2">
              { error && <Errors error={error} /> }
              { (message && messages[message]) &&
                <Message type={messages[message]?.type}>{messages[message]?.value}</Message> 
              }
            </div>
          )}
          
          <LoginForm
            onSubmit={loginData => {
              signIn({ variables: loginData })
            }}
            loading={loading}
          />
        </FormCard>

        { data && data.signIn && <Redirect to="/" /> }
      </div>
    </BaseLayout>
  )
}

export default withApollo(Login);
