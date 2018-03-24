require('normalize.css/normalize.css')
require('static/css/common.less')

import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userInfoActions from '../store/actions/userInfo'
// import configureStore from '../stores'

import LocalStorage from '../util/localStore'
import RouterMap from '../router/RouterMap'
import Header from '../components/Header/Header'

// // 创建 Redux 的 store 对象
// const store = configureStore()
class AppComponent extends React.Component {

  constructor(...args) {
    super(...args)
    this.shouldComponentUpdate = PureRenderMixin
    .shouldComponentUpdate
    .bind(this)
    this.state = {
      initDone: true
    }
  }
  componentDidMount() {
    // localstorage 获取城市
    let cityName = LocalStorage.getItem('CITYNAME')
    if (cityName == null) {
      cityName = '北京'
    }
    this.props.userInfoActions.update({
      cityName: cityName
    })

    // 将城市存入 redux
    // setTimeout(() => {
    //   this.setState({
    //     initDone: true
    //   })
    // }, 1000);
  }
  render() {
    return (
      <div className="main">
        {
          !this.state.initDone ?
            <div>loading....</div> :
            <div>
              <Header />
              <RouterMap />
            </div>
        }
      </div>
    )
  }
}

AppComponent.defaultProps = {
}

// -------------------redux react 绑定--------------------

const mapStateToProps = state => {
  return {
    userInfo: state.userInfo
  }
}

const mapDispatchToProps = dispatch => {
  return {
    userInfoActions: bindActionCreators(userInfoActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent)
