import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import questReducer from './reducers/questReducer';
import userReducer from './reducers/userReducer';

const reducer = combineReducers({
  user: userReducer,
  quest: questReducer
});

const store = createStore(
  reducer,
  applyMiddleware(thunk)
);

export default store;
