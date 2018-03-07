import React from 'react'

class NoMatch extends React.Component {

  constructor(...args) {
    super(...args)
    this.state = {
      title: 'list'
    }
  }

  render() {
    return (
      <div className="Nav">
        NoMatch
      </div>
    )
  }
}

export default NoMatch
