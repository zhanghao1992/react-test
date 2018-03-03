import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class Recommend extends React.Component {
  mixins: [PureRenderMixin]

  constructor(...args) {
    super(...args)
    this.state = {
      title: 'user 实打实'
    }
  }

  componentWillMount() {
    console.log(this.props)
  }
  render() {
    return (
      <div className="Nav">
        Recommend
      <p>
          参数：
        {this.props.match.params.id}，
        {this.props.match.params.name}
        </p>
      </div>
    )
  }
}

export default Recommend
