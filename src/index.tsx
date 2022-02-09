import React from "react";
import ReactDOM from "react-dom";
import {Normalize} from "styled-normalize";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Normalize />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root"),
);
