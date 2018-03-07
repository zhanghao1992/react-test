import React from 'react'

class Home extends React.Component {

  constructor(props) {
    super(props)
    this.state = props
  }

  componentWillMount() {
      console.log(this.state)
  }

//   clickHandle = () => {
//     console.log(this)
//   }

  render() {
    const visible = this.props.show ? 'block' : 'none'
    return (
      <div style={{fontSize: 30,color: '#f60', display: visible}}>
          {this.state.name}
      </div>
    )
  }
}

export default Home
