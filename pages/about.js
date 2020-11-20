import { getDataFromTree } from '@apollo/react-ssr';

import withApollo from '../hoc/withApollo';
import { useGetDocs } from '../apollo/actions';

function About() {
  const { loading, error, data } = useGetDocs();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <div>
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
    </>
  );
}

export default withApollo(About, { getDataFromTree })
