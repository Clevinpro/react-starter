import createSagaMiddleware from "redux-saga";
import { createStore, compose, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const configureStore = () => {
  const store = createStore(
    rootReducer,
    composeWithDevTools(compose(applyMiddleware(...middleware), f => f)),
  );

  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore();
