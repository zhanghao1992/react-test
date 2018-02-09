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
      <div>
        Search
      </div>
    )
  }
}

export default Search
