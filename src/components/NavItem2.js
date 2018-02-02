import React from 'react';

class NavTtem2 extends React.Component {
  componentWillMount() {
    console.log(this.props);
  }
  render() {
    return (
      <div className="Nav">
        2222页
      <p>
          参数：
        {this.props.match.params.id}，
        {this.props.match.params.name}
        </p>
      </div>
    );
  }
}

export default NavTtem2;
