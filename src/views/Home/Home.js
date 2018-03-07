import React from 'react'
// import PureRenderMixin from 'react-addons-pure-render-mixin'
import Calculator from './Calculator'
import AntTest from './AntTest'

class Home extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      title: 'home',
      show: true
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
        <button onClick={()=>{
          const s = this.state.show
          this.setState({
            show: !s
          })
        }}>点击试试</button>
        <Calculator {...a} show={this.state.show} />
        <AntTest/>
      </div>
    )
  }
}

export default Home
