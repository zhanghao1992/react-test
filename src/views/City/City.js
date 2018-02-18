import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class Carousel extends React.Component {

  constructor(...args) {
    super(...args)
    this.shouldComponentUpdate = PureRenderMixin
      .shouldComponentUpdate
      .bind(this)
    this.state = {
      title: 'city'
    }
  }

  render() {
    return (
      <div className="Nav">
        <p>{this.state.title}</p>
      </div>
    )
  }
}

export default Carousel
