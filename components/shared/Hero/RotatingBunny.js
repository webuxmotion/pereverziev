import React from 'react';
import * as PIXI from 'pixi.js'
import { Sprite } from '@inlet/react-pixi';
import Particle from './Particle';

class RotatingBunny extends React.Component {
  mouse = null;
  particleSize = 2;
  rows = 200;
  cols = 500;
  particles = [];
  container = new PIXI.ParticleContainer(100000);
  state = { rotation: 0 }

  componentDidMount() {
    this.props.app.stage.addChild(this.container);
    this.addObjects();
    this.props.app.ticker.add(this.tick)
  }

  componentWillUnmount() {
    this.props.app.ticker.remove(this.tick)
  }

  tick = delta => {
    this.setState(({ rotation }) => ({
      rotation: rotation + 0.1 * delta,
    }))
  }

  addObjects() {
    this.props.app.loader.add('bg', './favicon.png').load((loader, resources) => {
      console.log(this.container);
      console.log('loader', loader);
      
        const ctx = this.getContext(resources);
        //const ctx = this.container.getContext('2d');
        

        for (let i = 0; i < this.cols; i++) {
            for (let j = 0; j < this.rows; j++) {
                if (this.hasFill(i*this.particleSize, j*this.particleSize, ctx)) {
                    let p = new Particle(i*this.particleSize, j*this.particleSize, resources.bg.texture, this.particleSize);
                    this.particles.push(p);
                    this.container.addChild(p.sprite);
                }
            }
        }

        this.animate();
    });
  }

  animate() {
    this.props.app.ticker.add(() => {

        this.mouse = this.props.app.renderer.plugins.interaction.mouse.global;

        this.particles.forEach(p => {
            p.update(this.mouse);
        })
    });
  }

  getContext(resources) {
    
    const canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    canvas.width = this.cols * this.particleSize;
    canvas.height = this.rows * this.particleSize;
    canvas.style.display = 'none';
    ctx.drawImage(resources.bg.data, 0, 0);
    console.log('this.props.app.renderer.view', this.props.app.renderer.view);

    return ctx;
  }

  hasFill(x, y, ctx) {
    for (let i = 0; i < this.particleSize; i++) {
        for (let j = 0; j < this.particleSize; j++) {
            if (ctx.getImageData(x + i, y + i, 1, 1).data[0] > 0) return true;
        }
    }
    return false;
  }

  render() {
    return <Sprite image="./favicon.png" />
  }
}

export {
  RotatingBunny
}
