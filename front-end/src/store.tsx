import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import assetsReducer from './reducers/assetsReducer';
import mobileReducer from './reducers/mobileReducer';
import questReducer from './reducers/questReducer';
import managerReducer from './reducers/managerReducer';
import sidebarReducer from './reducers/sidebarReducer';
import userReducer from './reducers/userReducer';
import usersReducer from './reducers/usersReducer';

const reducer = combineReducers({
  assets: assetsReducer,
  isManager: managerReducer,
  isMobile: mobileReducer,
  quest: questReducer,
  sidebar: sidebarReducer,
  user: userReducer,
  users: usersReducer
});

const store = createStore(
  reducer,
  applyMiddleware(thunk)
);

export default store;
