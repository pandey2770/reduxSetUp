import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {clickUser} from '../action';

class UserList extends Component {
  createListItems(){
    return this.props.users.map((users)=>{
      return(
        <li key={users.id} onClick={()=> this.props.clickUser(users)}>
          {users.first} {users.last}
        </li>
      )
    })
  }
  render() {
    return (
      <ul>
        {this.createListItems()}
      </ul>
    );
  }
}

function mapStateToPorps(state){
  return {
    users: state.users
  }
}

function matchDispatchToPorps(dispatch){
  return bindActionCreators({clickUser:clickUser},dispatch)
}


export default connect( mapStateToPorps, matchDispatchToPorps )(UserList);