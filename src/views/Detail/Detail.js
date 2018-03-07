import React from 'react'

class Search extends React.Component {

  constructor(...args) {
    super(...args)
    this.state = {
      title: 'list'
    }
  }

  render() {
    return (
      <div className="Nav">
        Search
      <p>
          参数：
        {this.props.match.params.id}，
        {this.props.match.params.name}
        </p>
      </div>
    )
  }
}

export default Search
