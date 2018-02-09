import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class List extends React.Component {
    mixins: [PureRenderMixin]

    constructor(...args) {
        super(...args)
    }

    render() {
        return (
            <div className="header">
                <span>深圳</span>
                <input placeholder="xx" />
                <span>头像</span>
            </div>
        )
    }
}

export default List
