import BaseLayout from '../layouts/BaseLayout';

import { Title } from '../components/shared';

function About() {

  return (
    <BaseLayout>
      <div className="g-top-section">
        <Title>About</Title>
        <div className="g-content">
          <p>My name is Andrii Pereverziev.</p>
          <p>I am skilled Javascript developer. I have at least 5 years experience in web-developing.</p>
          <p>I can create Full-stack SSR web applications with NextJS. <br/>I also can create SPA with ReactJS and Express, Koa or NestJS for backend.</p>
          <p>You can find me on github - <a href="https://github.com/webuxmotion">webuxmotion</a></p>
          <p>State management technologies: Redux + Reselect + Saga, Context API, Mobx.</p>
          <p>My hobby - Javascript Animations</p>
          <video width="320" height="240" autoPlay muted infinite loop>
            <source src="gallery.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p>This is WEBGL slider. You can find source code on github - <a href="https://github.com/webuxmotion/pixi-custom-slider">webuxmotion/pixi-custom-slider</a></p>
          <p><a href="https://habr.com/ru/post/270637/">My post on Habr</a> about my own scss library</p>
          <p>And this is <a href="https://medium.com/@pereverziev.andrii/vim-socks-%D0%B8%D0%BB%D0%B8-9-%D0%BF%D0%B0%D1%80-%D0%BD%D0%BE%D1%81%D0%BA%D0%BE%D0%B2-%D0%BF%D0%BE-9-99-a3dff1069c91">my post about VIM</a> on Medium.</p>
        </div>
      </div>
    </BaseLayout>
  );
}

export default About;
