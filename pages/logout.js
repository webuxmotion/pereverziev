import { useEffect } from 'react';
import { useRouter } from 'next/router';

import withApollo from '../hoc/withApollo';
import { useSignOut } from '../apollo/actions';

import BaseLayout from '../layouts/BaseLayout';

const Logout = ({ apollo }) => {
  const [signOut] = useSignOut();
  const router = useRouter();

  useEffect(() => {
    signOut().then(() => {
      apollo.resetStore().then(() => router.push('/login'));
    });
  }, []);

  return (
    <BaseLayout>
      <div className="page-wrapper">
        <h1>Logout...</h1>
      </div>
    </BaseLayout>
  )
}

export default withApollo(Logout);
