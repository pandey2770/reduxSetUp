import React, { Component } from 'react';
import UserList from '../containers/userlist';
import Detail from '../containers/detail';

class App extends Component {
  render() {
    return (
      <div>
        <h1>
          user list
        </h1>
          <UserList />
        <hr/>
        <h1>
          Details
          <Detail />
        </h1>
      </div>
    );
  }
}

export default App;
