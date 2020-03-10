import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "../reducers";
import createSagaMiddleware from "redux-saga";

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );

  return {
    store,
    runSaga: sagaMiddleware.run
  };
}
