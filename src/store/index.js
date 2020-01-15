import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk)),
);

if (process.env.NODE_ENV !== 'production') {
  if (module.hot) {
    module.hot.accept('./rootReducer', () => {
      store.replaceReducer(rootReducer);
    });
  }
}

export default store;
