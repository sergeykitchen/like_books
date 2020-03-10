import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import configureStore from "./store";
import saga from "./sagas";

const { store, runSaga } = configureStore();
runSaga(saga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
