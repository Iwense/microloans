import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { User } from "./db/user";

export const UserContext = React.createContext(User);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <UserContext.Provider value={User}>
      <App />
    </UserContext.Provider>
  </React.StrictMode>
);
