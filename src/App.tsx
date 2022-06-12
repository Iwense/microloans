import React, { useEffect } from "react";
import MainForm from "./components/MainForm";
import "./App.css";

// @ts-ignore: Unreachable code error
const telegram = window.Telegram.WebApp;

const App = () => {
  useEffect(() => {
    telegram.ready();
  });

  return (
    <div className="App">
      <MainForm />
    </div>
  );
};

export default App;
