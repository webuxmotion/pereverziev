import BaseLayout from '../../layouts/BaseLayout';
import { ProjectCard, Title } from '../../components/shared';
import projects from '../../constants/projects';

const Projects = () => {
  return (
    <BaseLayout>
      <div className="g-top-section">
        <Title>Projects</Title>
        { projects.map(item => (
          <ProjectCard key={item.imageName} imageName={item.imageName} description={item.description} />
        ))}
      </div>
    </BaseLayout>
  )
}

export default Projects;
