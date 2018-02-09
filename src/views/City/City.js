import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class Carousel extends React.Component {
  mixins: [PureRenderMixin]

  constructor(...args) {
    super(...args)
    this.state = {
      title: '23234'
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
