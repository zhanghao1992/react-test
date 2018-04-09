import React from 'react'

class Carousel extends React.Component {

  constructor(...args) {
    super(...args)
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
