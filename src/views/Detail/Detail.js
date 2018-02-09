import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class Search extends React.Component {
  mixins: [PureRenderMixin]

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
