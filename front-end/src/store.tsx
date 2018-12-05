import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import assetsReducer from './reducers/assetsReducer';
import mobileReducer from './reducers/mobileReducer';
import questReducer from './reducers/questReducer';
import questsReducer from './reducers/questsReducer';
import managerReducer from './reducers/managerReducer';
import sidebarReducer from './reducers/sidebarReducer';
import userReducer from './reducers/userReducer';
import usersReducer from './reducers/usersReducer';

const reducer = combineReducers({
  assets: assetsReducer,
  isManager: managerReducer,
  isMobile: mobileReducer,
  quest: questReducer,
  quests: questsReducer,
  sidebar: sidebarReducer,
  user: userReducer,
  users: usersReducer
});



const store = createStore(
  reducer,
  process.env.NODE_ENV === 'production'  
    ? applyMiddleware(thunk)
    : composeWithDevTools(applyMiddleware(thunk))
);

export default store;
