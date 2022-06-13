import {
  OutlinedInputProps,
  styled,
  TextField,
  TextFieldProps,
} from "@mui/material";

export const FormTextField = styled((props: TextFieldProps) => (
  <TextField
    InputProps={{ disableUnderline: true } as Partial<OutlinedInputProps>}
    variant="filled"
    size={"small"}
    fullWidth
    {...props}
  />
))(() => ({
  "& label.Mui-focused": {
    color: "#52af77",
  },
  "& .MuiFilledInput-root": {
    border: "1px solid #e2e2e1",
    overflow: "hidden",
    borderRadius: 4,
    backgroundColor: "#fff",
    "&:hover": {
      backgroundColor: "transparent",
    },
    "&.Mui-focused": {
      backgroundColor: "transparent",
      boxShadow: `#52af77 0 0 0 1px`,
      borderColor: "#52af77",
    },
  },
}));
