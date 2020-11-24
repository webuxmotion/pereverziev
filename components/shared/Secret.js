import { useEffect } from 'react';
import withApollo from '../../hoc/withApollo';
import { useLazyGetUser } from '../../apollo/actions';

const Secret = ({ children, roles = []}) => {
  const [getUser, { data: { user } = {}, loading, error }] = useLazyGetUser();

  useEffect(() => {
    getUser();
  }, []);

  if (
    !loading &&
    (!user || error) &&
    typeof window !== 'undefined'
  ) {
    return null;
  }

  if (user) {
    if (roles && !roles.includes(user.role)) {
      return null;
    }

    return <>{children}</>
  }

  return null;
}

export default withApollo(Secret);
