import {
  createStore,
  applyMiddleware,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import * as Sentry from '@sentry/react';


import reducers from './reducers';

const sentryReduxEnhancer = Sentry.createReduxEnhancer();
const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk), sentryReduxEnhancer));
export default store;
