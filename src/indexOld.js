import React, { createContext } from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App';
// import App from './Login';
// import App from './Register';
// import App from './Hooks-news';
import App from "./ToDo.js";
import * as serviceWorker from "./serviceWorker";

export const UserContext = createContext();

const username = "Ciprian";

ReactDOM.render(
  <React.StrictMode>
    <UserContext.Provider value={username}>
      <App />
    </UserContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
