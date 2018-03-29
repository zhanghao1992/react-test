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

  showToggle=(e)=>{
    console.log(e)
    // setState要操作当前state值时要用函数，参数s为当前state
    this.setState((s)=>{
      return{
        show: !s.show
      }
    })
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
        <button onClick={this.showToggle}>点击试试</button>
        <Calculator {...a} show={this.state.show} />
        <AntTest/>
      </div>
    )
  }
}

export default Home
