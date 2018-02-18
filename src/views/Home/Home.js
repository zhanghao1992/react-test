import React from 'react'
// import PureRenderMixin from 'react-addons-pure-render-mixin'
import Calculator from './Calculator'

class Home extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      title: 'home'
    }
  }

  render() {
    return (
      <div>
        {this.state.title}
        <Calculator/>
      </div>
    )
  }
}

export default Home
