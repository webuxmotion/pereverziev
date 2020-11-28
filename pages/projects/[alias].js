import BaseLayout from '../../layouts/BaseLayout';

import { Title } from '../../components/shared';

function OneProject({ alias }) {
  return <BaseLayout>
    <div className="g-top-section">
      <Title>Project - {alias}</Title>
    </div>
  </BaseLayout>
}

export async function getStaticPaths() {
  return {
    paths: [
      '/projects/a4docs',
      '/projects/pdfkitcv',
      '/projects/lalajs',
      '/projects/mdmfd',
    ],
    fallback: false
  }
}

export async function getStaticProps(context) {
  return { props: { alias: context.params.alias } }
}

export default OneProject
