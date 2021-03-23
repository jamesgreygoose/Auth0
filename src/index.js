import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "../src/Components/App/App";
import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="jamesgreygoose.eu.auth0.com"
    clientId="VwRidnipNI6pAJtbzoSKikQ9rvyOb28J"
    redirectUri="http://localhost:3000/info"
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Auth0Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
