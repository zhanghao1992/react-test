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
    const a = {
      name: 'zhanghao',
      age: 20,
      grade: 99
    }
    return (
      <div>
        {this.state.title}
        <Calculator {...a} />
      </div>
    )
  }
}

export default Home
