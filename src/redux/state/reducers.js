import { combineReducers } from 'redux';
import users from '../users/state/users.reducers';
import asset from '../asset/state/asset.reducers';
import news from '../news/state/news.reducers';

import { USER_LOGOUT } from './actionTypes';

const appReducer = combineReducers({
  users,
  asset,
  news
});

export default (state, action) => {
  let ourState = state;
  if (action.type === USER_LOGOUT) {
    ourState = undefined;
  }
  return appReducer(ourState, action);
};
