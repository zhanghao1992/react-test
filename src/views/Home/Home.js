import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class List extends React.Component {
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
        {this.state.title}
      </div>
    )
  }
}

export default List
