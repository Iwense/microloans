import { Button, ButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";

export const MainButton = styled(Button)<ButtonProps>(() => ({
  color: "#FFF",
  backgroundColor: "#52af77",
  "&:hover": {
    backgroundColor: "#52af77",
  },
}));
