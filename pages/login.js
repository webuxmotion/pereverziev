import withApollo from '../hoc/withApollo';
import useRouterReplaceTimeout from '../hooks/useRouterReplaceTimeout';
import { useSignIn } from '../apollo/actions';
import messages from '../constants/messages';

import BaseLayout from '../layouts/BaseLayout';
import Message from '../components/shared/Message';
import LoginForm from '../components/forms/LoginForm';
import Errors from '../components/shared/Errors';
import Redirect from '../components/shared/Redirect';

const Login = () => {
  const [signIn, { data, error, loading }] = useSignIn();
  const message = useRouterReplaceTimeout('/login', '/login');

  return (
    <BaseLayout>
      <div className="page-wrapper">
        <h1>Login</h1>
        { error && <Errors error={error} /> }
        { (message && messages[message]) &&
          <Message type={messages[message]?.type}>{messages[message]?.value}</Message> 
        }
        <LoginForm 
          onSubmit={loginData => {
            signIn({ variables: loginData })
          }}
          loading={loading}
        />
        { data && data.signIn && <Redirect to="/" /> }
      </div>
    </BaseLayout>
  )
}

export default withApollo(Login);
