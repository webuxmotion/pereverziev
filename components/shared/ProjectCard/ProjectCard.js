import { AppLink } from '../index';

const ProjectCard = ({ imageName, description }) => (
  <div className="project-card">
    <div className="project-card__image-column">
      <img src={`/${imageName}.png`} alt={`Project logo - ${imageName}`} />
    </div>

    <div className="project-card__info-column">
      <h2 className="project-card__title">{imageName}</h2>
      <p className="project-card__description">{description}</p>
      <AppLink href={`/projects/${imageName}`} className="project-card__link">Read more</AppLink>
    </div>
  </div>
);

export default ProjectCard;
