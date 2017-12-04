import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

const configureStore = () => {
  const middlewares = [];

  return createStore(
    reducers,
    applyMiddleware(...middlewares),
  );
};

export default configureStore;
