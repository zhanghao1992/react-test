import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class NoMatch extends React.Component {
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
        NoMatch
      </div>
    )
  }
}

export default NoMatch
