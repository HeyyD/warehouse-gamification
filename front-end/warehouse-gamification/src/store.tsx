import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import assetsReducer from './reducers/assetsReducer';
import mobileReducer from './reducers/mobileReducer';
import questReducer from './reducers/questReducer';
import sidebarReducer from './reducers/sidebarReducer';
import userReducer from './reducers/userReducer';

const reducer = combineReducers({
  assets: assetsReducer,
  isMobile: mobileReducer,
  quest: questReducer,
  sidebar: sidebarReducer,
  user: userReducer
});

const store = createStore(
  reducer,
  applyMiddleware(thunk)
);

export default store;
