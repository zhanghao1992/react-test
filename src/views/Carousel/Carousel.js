import React from 'react';
import { Prompt } from 'react-router-dom';

class Carousel extends React.Component {
  constructor(...args) {
    super(...args)
    this.state = {
      power: false
    }
    this.changePower = this.changePower.bind(this)
  }
  changePower() {
    this.setState({
      power: true
    })
  }
  render() {
    return (
      <div className="Nav">
        <Prompt message="是否离开" when={this.state.power} />
        <p>333333</p>
        <button onClick={this.changePower}>启用提示</button>
      </div>
    );
  }
}

export default Carousel;
