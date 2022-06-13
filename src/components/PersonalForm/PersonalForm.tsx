import React, { useContext } from "react";
import Box from "@mui/material/Box";
import { Stack, Typography } from "@mui/material";
import { UserContext } from "../..";
import MainButton from "../MainButton";
import { useDataBind } from "../../hooks/useDataBind";
import styles from "./PersonalForm.module.css";
import FormTextField from "../FormTextField";
import { formatDate } from "../../utils";
import { IPassportInfo } from "../../db/user";

interface IPersonalForm {
  onClickForward?: () => void;
  onClickBack?: () => void;
}

export const PersonalForm: React.FC<IPersonalForm> = ({
  onClickForward,
  onClickBack,
}) => {
  const User = useContext(UserContext);
  const fieldSeria = useDataBind();
  const fieldNumber = useDataBind();
  const fieldDate = useDataBind(formatDate());

  const onClickForwardHandle = () => {
    const passportInfo: IPassportInfo = {
      seria: fieldSeria.value,
      number: fieldNumber.value,
      date: fieldDate.value,
    };
    User.setPersonal(passportInfo);
    onClickForward?.();
  };

  return (
    <Box className={styles.main}>
      <Typography sx={{ fontSize: "20px" }}>Паспортные данные</Typography>

      <Stack spacing={2} sx={{ marginTop: "12px" }}>
        <FormTextField
          label="Серия"
          id="seria-input"
          autoFocus
          {...fieldSeria}
        />
        <FormTextField label="Номер" id="number-input" {...fieldNumber} />
        <FormTextField
          InputLabelProps={{ shrink: true }}
          label="Дата выдачи"
          id="date-input"
          type={"date"}
          {...fieldDate}
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
