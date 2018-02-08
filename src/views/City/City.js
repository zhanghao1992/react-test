import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class Carousel extends React.Component {
  mixins: [PureRenderMixin]

  constructor(...args) {
    super(...args);
    this.state = {
      title: 'list'
    }
  }

  render() {
    return (
      <div className="Nav">
        <p>333333</p>
        <button onClick={this.changePower}>启用提示</button>
      </div>
    );
  }
}

export default Carousel;
