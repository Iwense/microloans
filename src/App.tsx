import React, { useContext, useEffect, useMemo, useState } from "react";
import MainForm from "./components/MainForm";
import ChooseCompany from "./components/ChooseCompany";
import ContactForm from "./components/ContactForm";
import PersonalForm from "./components/PersonalForm";
import StepperForm from "./components/StepperForm";
import { Box, Typography } from "@mui/material";
import "./App.css";
import { UserContext } from ".";

// @ts-ignore: Unreachable code error
const telegram = window.Telegram.WebApp;

const App = () => {
  const [step, setStep] = useState<number>(1);

  const User = useContext(UserContext);

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
      case 3:
        return (
          <ContactForm
            onClickForward={forwardClickHandle}
            onClickBack={onClickBackHandle}
          />
        );
      case 4:
        return (
          <PersonalForm
            onClickForward={forwardClickHandle}
            onClickBack={onClickBackHandle}
          />
        );

      case 5:
        console.log("USER =", User);
        return (
          <Box className="block">
            <Typography variant="h5">Готово</Typography>
          </Box>
        );
      default:
        setStep(1);
        break;
    }
  }, [step]);

  useEffect(() => {
    telegram.ready();
  });

  return (
    <div className="App">
      {step < 5 && <StepperForm step={step} />}
      {Component}
    </div>
  );
};

export default App;
