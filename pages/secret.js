import withApollo from '../hoc/withApollo';
import withAuth from '../hoc/withAuth';

import BaseLayout from '../layouts/BaseLayout';

const Secret = withAuth(() => (
  <BaseLayout>
    <div className="page-wrapper">
      <h1>Secret Page</h1>
    </div>
  </BaseLayout>
), ['admin']);

export default withApollo(Secret);
