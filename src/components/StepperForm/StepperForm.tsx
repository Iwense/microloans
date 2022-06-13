import { Stepper, Step, StepLabel } from "@mui/material";

interface IStepperForm {
  step: number;
}
export const StepperForm: React.FC<IStepperForm> = ({ step }) => {
  return (
    <Stepper
      activeStep={step - 1}
      sx={{
        marginBottom: "12px",
        "& .MuiStepConnector-root": {
          color: "#17742a",
        },
      }}
    >
      {[1, 2, 3, 4].map((label) => (
        <Step
          key={label}
          sx={{
            "& .MuiStepLabel-root .Mui-completed": {
              color: "#1dba5b", // circle color (COMPLETED)
            },
            "& .MuiStepLabel-root .Mui-active": {
              color: "#f70", // circle color (ACTIVE)
            },
            "& .MuiStepLabel-root .MuiStepIcon-text": {
              fill: "#68f191", // circle's number (ACTIVE)
            },
            "& .MuiStepLabel-root .Mui-active .MuiStepIcon-text": {
              fill: "#FFF", // circle's number (ACTIVE)
            },
          }}
        >
          <StepLabel></StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};
