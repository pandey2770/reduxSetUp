import React, { Component } from 'react';
import {connect} from 'react-redux';

class Detail extends Component {
  render() {
    if(!this.props.user){
      return(
        <h4>Click User</h4>
      );
    }
    return (
      <div>
        <h5>
         Name: {this.props.user.first} {this.props.user.last}
        </h5>
        <h5>
          Age: {this.props.user.age}
        </h5>
        <h5>
          Chapter: {this.props.user.class}
        </h5>
      </div>
    );
  }
}

function mapStateToPorps(state){
  return {
    user: state.clicked
  }
}


export default connect( mapStateToPorps )(Detail);