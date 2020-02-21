import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "../reducers";
import createSagaMiddleware from "redux-saga";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["users"]
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );

  const persistor = persistStore(store);
  return {
    store,
    persistor,
    runSaga: sagaMiddleware.run
  };
}
