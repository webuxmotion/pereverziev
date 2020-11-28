import { Button, AppLink } from '../index';

const Hero = () => (
  <div className="hero">
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
        <div className="hero__card-wrapper">
          <AppLink 
            href="/projects/lalajs"
            className="hero__card"
            style={{ backgroundImage: "url('/proj-1.png')"}}
          ></AppLink>
        </div>
        <div className="hero__card-wrapper">
          <AppLink 
            href="/projects/mdmfd"
            className="hero__card"
            style={{ backgroundImage: "url('/proj-2.png')"}}
          ></AppLink>
        </div>
        <div className="hero__card-wrapper">
          <AppLink 
            href="/projects/a4docs"
            className="hero__card"
            style={{ backgroundImage: "url('/proj-3.png')"}}
          ></AppLink>
        </div>
        <div className="hero__card-wrapper">
          <AppLink
            href="/projects/pdfkitcv"
            className="hero__card"
            style={{ backgroundImage: "url('/proj-4.png')"}}
          ></AppLink>
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
