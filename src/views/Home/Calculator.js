import React from 'react'

class Home extends React.Component {

//   constructor(props) {
//     super(props)
//     this.state = props
//   }

    state = {
        name: 'zhanghao1992'
    }

  componentWillMount() {
      console.log(this.state)
  }

  render() {
    return (
      <div>
      </div>
    )
  }
}

export default Home
