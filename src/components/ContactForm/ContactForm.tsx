import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import {
  OutlinedInputProps,
  Stack,
  styled,
  TextField,
  TextFieldProps,
  Typography,
} from "@mui/material";
import { UserContext } from "../..";
import MainButton from "../MainButton";
import { useDataBind } from "../../hooks/useDataBind";
import { IContactInfo } from "../../db/user";
import styles from "./ContactForm.module.css";

const FormTextField = styled((props: TextFieldProps) => (
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

interface IContactForm {
  onClickForward?: () => void;
  onClickBack?: () => void;
}

export const ContactForm: React.FC<IContactForm> = ({
  onClickForward,
  onClickBack,
}) => {
  const User = useContext(UserContext);
  const fieldName = useDataBind();
  const fieldSername = useDataBind();
  const fieldLastname = useDataBind();
  const fieldPhone = useDataBind();
  const fieldEmail = useDataBind();

  const onClickForwardHandle = () => {
    const contact: IContactInfo = {
      name: fieldName.value,
      sername: fieldSername.value,
      lastname: fieldLastname.value,
      phone: fieldPhone.value,
      email: fieldEmail.value,
    };
    User.setContact(contact);
    onClickForward?.();
  };

  return (
    <Box className={styles.main}>
      <Typography sx={{ fontSize: "20px" }}>Контактная информация</Typography>

      <Stack spacing={2} sx={{ marginTop: "12px" }}>
        <FormTextField label="Имя" id="name-input" autoFocus {...fieldName} />
        <FormTextField label="Фамилия" id="sername-input" {...fieldSername} />

        <FormTextField
          label="Отчество"
          id="Lastname-input"
          {...fieldLastname}
        />
        <FormTextField label="Телефон" id="phone-input" {...fieldPhone} />
        <FormTextField
          label="Email"
          type="email"
          id="email-input"
          {...fieldEmail}
        />
      </Stack>

      <Stack direction={"row"} spacing={4} sx={{ marginTop: "20px" }}>
        <MainButton variant="contained" fullWidth onClick={onClickBack}>
          Назад
        </MainButton>

        <MainButton
          variant="contained"
          fullWidth
          onClick={onClickForwardHandle}
        >
          Далее
        </MainButton>
      </Stack>
    </Box>
  );
};
