import dynamic from 'next/dynamic';

import { Button, AppLink } from '../index';
import projects from '../../../pages/projects/projectsData';

const DynamicComponent = dynamic(() => import('./Stage'), {
  ssr: false
});

const Hero = () => (
  <div className="hero">
    <DynamicComponent />
    <img src='/projects.svg' className="hero__bg-image" alt='projects background' />
    <div className="hero__container">
      <div className="hero__info">
        <p className="hero__title">HELLO!</p>
        <p className="hero__subtitle">I am Full Stack Javascript Developer</p>
        <div>
          <Button href="/about" size="big">Read more</Button>
        </div>
      </div>
      <div className="hero__cards">
        { projects.slice(0, 4).map(item => (
          <div key={item.imageName} className="hero__card-wrapper">
            <AppLink 
              href={`/projects/${item.imageName}`}
              className="hero__card"
              style={{ backgroundImage: `url('/${item.imageName}.png')`}}
            ></AppLink>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Hero;
