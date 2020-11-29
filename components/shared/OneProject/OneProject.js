import { AppLink } from '../index';

const OneProject = ({ item: { imageName, description, extendedDescription, url } }) => (
  <div className="one-project">
    <div className="one-project__header">
      <div className="one-project__header-column">
        <AppLink href="/projects" className="one-project__link">go back</AppLink>
      </div>
      <div className="one-project__header-column">
        <div className="one-project__image" style={{ backgroundImage: `url('/${imageName}.png')`}}></div>
      </div>
      <div className="one-project__header-column">
        <a href={url} target="_blank" className="one-project__link">Visit site</a>
      </div>
    </div>
    <div className="one-project__content">
      <h1>{imageName}</h1>
      <p>{description}</p>
      <p>{extendedDescription}</p>
    </div>
  </div>
);

export default OneProject;
