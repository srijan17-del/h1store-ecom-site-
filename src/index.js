import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.js";
import "./index.css";
import { persistor, store } from "./redux/store.js";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { PersistGate } from "redux-persist/integration/react";
import { app } from "./firebase.config.js";
// As of React 18
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store} app={app}>
    <PersistGate Loading={"loading"} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
