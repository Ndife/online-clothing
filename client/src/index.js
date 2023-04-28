import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import * as serviceWorker from "./serviceWorker";

import "./index.css";
import App from "./App";

import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App  tab="home" />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
);

serviceWorker.register();