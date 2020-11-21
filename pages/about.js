import { getDataFromTree } from '@apollo/react-ssr';

import withApollo from '../hoc/withApollo';
import { useGetDocs } from '../apollo/actions';
import BaseLayout from '../layouts/BaseLayout';
import Spinner from '../components/shared/Spinner';

function About() {
  const { loading, error, data } = useGetDocs();

  if (loading) return <Spinner />;
  if (error) return <p>Error :(</p>;

  return (
    <BaseLayout>
      <div className="page-wrapper">
        <h1>About</h1>
        {
          data.docs.map(({ title, content }) => (
            <div key={title}>
              <p>
                {content}
              </p>
            </div>
          ))
        }
      </div>
    </BaseLayout>
  );
}

export default withApollo(About, { getDataFromTree })
