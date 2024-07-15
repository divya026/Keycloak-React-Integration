import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import keycloak from "./keycloak";

keycloak
  .init({ onLoad: "login-required" })
  .then((authenticated) => {
    ReactDOM.render(
      <React.StrictMode>
        <App keycloak={keycloak} />
      </React.StrictMode>,
      document.getElementById("root")
    );
  })
  .catch((error) => {
    console.error("Keycloak initialization failed:", error);
  });
