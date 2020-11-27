import Button from '../Button';

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
          <div 
            className="hero__card"
            style={{ backgroundImage: "url('/proj-1.png')"}}
          ></div>
        </div>
        <div className="hero__card-wrapper">
          <div 
            className="hero__card"
            style={{ backgroundImage: "url('/proj-2.png')"}}
          ></div>
        </div>
        <div className="hero__card-wrapper">
          <div 
            className="hero__card"
            style={{ backgroundImage: "url('/proj-3.png')"}}
          ></div>
        </div>
        <div className="hero__card-wrapper">
          <div 
            className="hero__card"
            style={{ backgroundImage: "url('/proj-4.png')"}}
          ></div>
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
