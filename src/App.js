import React from "react";
import "./App.css";

function App({ keycloak }) {
  const logout = () => {
    keycloak.logout({ redirectUri: window.location.origin });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My React App</h1>
        {keycloak?.token ? (
          <>
            <p>Hello, {keycloak?.tokenParsed?.preferred_username}!</p>
            <button onClick={logout}>Logout</button>
            {/* <p>Token: {keycloak.token}</p> */}
          </>
        ) : (
          <p>Not authenticated</p>
        )}
      </header>
    </div>
  );
}

export default App;
