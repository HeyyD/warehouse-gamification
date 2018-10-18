import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import questReducer from './reducers/questReducer';
import sidebarReducer from './reducers/sidebarReducer';
import userReducer from './reducers/userReducer';

const reducer = combineReducers({
  quest: questReducer,
  sidebar: sidebarReducer,
  user: userReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk)
);

export default store;
