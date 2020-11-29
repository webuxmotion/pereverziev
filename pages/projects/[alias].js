import BaseLayout from '../../layouts/BaseLayout';

import { Title, OneProject } from '../../components/shared';
import projects from '../../constants/projects';

function ProjectPage({ item }) {
  
  return <BaseLayout>
    <div className="g-top-section">
      <OneProject item={item} />
    </div>
  </BaseLayout>
}

export async function getStaticPaths() {
  return {
    paths: projects.map(item => `/projects/${item.imageName}`),
    fallback: false
  }
}

export async function getStaticProps(context) {
  const item = projects.find(item => item.imageName === context.params.alias);

  return { props: { item } }
}

export default ProjectPage
