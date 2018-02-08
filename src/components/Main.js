require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import RouterMap from '../router/RouterMap';
import Header from '../components/Header/Header';

class AppComponent extends React.Component {
  mixins: [PureRenderMixin]

  constructor(...args) {
    super(...args);
    this.state = {
      title: 'list'
    }
  }
  render() {
    return (
      <div className="index">
        <Header />
        <RouterMap />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
