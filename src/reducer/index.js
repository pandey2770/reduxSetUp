import {combineReducers} from 'redux';
import usersReduce from './reducer';
import clickedUser from './reducerAction';

const allReducer  = combineReducers({
  users: usersReduce,
  clicked: clickedUser
});

export default allReducer;