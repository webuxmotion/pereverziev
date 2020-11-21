import useRouterReplaceTimeout from '../hooks/useRouterReplaceTimeout';

import messages from '../constants/messages';

import BaseLayout from '../layouts/BaseLayout';
import Message from '../components/shared/Message';

const Login = () => {
  const message = useRouterReplaceTimeout('/login', '/login');

  return (
    <BaseLayout>
      <div className="page-wrapper">
        <h1>Login</h1>
        { message && <Message type={messages[message].type}>{messages[message].value}</Message> }
      </div>
    </BaseLayout>
  )
}

export default Login;
