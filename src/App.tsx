import React, { useEffect, useMemo, useState } from "react";
import MainForm from "./components/MainForm";
import ChooseCompany from "./components/ChooseCompany";
import "./App.css";

// @ts-ignore: Unreachable code error
const telegram = window.Telegram.WebApp;

const App = () => {
  const [step, setStep] = useState<number>(1);

  const forwardClickHandle = () => {
    setStep((prev) => prev + 1);
  };

  const onClickBackHandle = () => {
    setStep((prev) => prev - 1);
  };

  const Component = useMemo(() => {
    switch (step) {
      case 1:
        return <MainForm onClick={forwardClickHandle} />;
      case 2:
        return (
          <ChooseCompany
            onClickForward={forwardClickHandle}
            onClickBack={onClickBackHandle}
          />
        );

      default:
        setStep(1);
        break;
    }
  }, [step]);

  useEffect(() => {
    telegram.ready();
  });

  return <div className="App">{Component}</div>;
};

export default App;
