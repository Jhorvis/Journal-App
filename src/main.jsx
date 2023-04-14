import React from "react";
import { Provider } from "react-redux";
import  ReactDOM  from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { JournalApp } from "./JournalApp";
import './style.css'
import { store } from "./store";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <JournalApp/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
