import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'

class Header extends React.Component {
    mixins: ['PureRenderMixin']

    constructor(...args) {
        super(...args)
    }

    componentDidMount() {
    }
    render() {
        return (
            <div className="header">
                <span>{this.props.userInfo.cityName}</span>
                <input placeholder="xx" />
                <span>头像</span>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        userInfo: state.userInfo
    }
}
const mapDispatchToProps = () => {
    return {
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)
