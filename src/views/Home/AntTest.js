import React from 'react'
import { Alert } from 'antd'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = props
  }

  render() {
    return (
      <div>
          <Alert message="Success Text" type="success" />
          <Alert message="Success Text" type="success" />
      </div>
    )
  }
}

export default Home
