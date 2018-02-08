import React from 'react';

class Recommend extends React.Component {
  componentWillMount() {
    console.log(this.props);
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
    );
  }
}

export default Recommend;
