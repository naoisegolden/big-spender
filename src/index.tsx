import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store/index";

import { App } from "./components/App/index";
import "./index.scss";

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);
const root = document.getElementById("root");
ReactDOM.render(app, root);
