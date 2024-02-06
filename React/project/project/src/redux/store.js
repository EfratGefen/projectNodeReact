import{createStore,combineReducers,applyMiddleware}from 'redux';
import users from './reducers/users';
import tasks from './reducers/tasks';
const reducer=combineReducers({users,tasks});
const store=createStore(reducer);
window.store=store;
export default store;