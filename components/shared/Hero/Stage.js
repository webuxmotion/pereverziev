
import React from 'react';
import { Stage, ParticleContainer, Sprite } from '@inlet/react-pixi'
import Batch from './Batch'

const maggot = '/favicon.png';

const config = {
  maggots: 100,
  
  properties: {
    position: true,
    rotation: true,
    scale: false,
    uvs: false,
    alpha: false,    
  },

  listeners: [],
  onChange: function(prop, val) { this.listeners.forEach(l => l(prop, val)) },
}

class Settings extends React.PureComponent {
  
  state = { ...config.properties, maggots: config.maggots, changed: false }

  componentDidMount() {
    config.listeners.push(this.onChange)
  }

  onChange = (prop, val) => {
    this.setState({ [prop]: val, changed: true })
    
    // creates new ParticleContainer as properties cannot be changed over time
    clearTimeout(this.changeTimeout)
    this.changeTimeout = setTimeout(() => this.setState({ changed: false }), 0)
  }
  
  render() {
    return this.state.changed ? null : this.props.children(this.state)
  }
}

/**
* -----------------------------------------------
* Maggot Component
* -----------------------------------------------
*/
const Maggot = props => (
  <Sprite {...props} 
    image={maggot} 
    anchor={0.5} 
    overwriteProps={true} 
    ignoreEvents={true}
  />
)


export default () => {
  return (
    <Stage 
      width={window.innerWidth}
      height={window.innerHeight}
      options={{ autoDensity: true, backgroundColor: 0x2c3e50 }}
    >
      <Settings>
        {config => (
          <ParticleContainer properties={config}>
            <Batch count={config.maggots} component={Maggot} />
          </ParticleContainer>
        )}
      </Settings>
    </Stage>
  )
}
