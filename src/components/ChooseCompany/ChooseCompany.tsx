import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Button, ButtonProps, Slider, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { DB } from "../../db/db";
import styles from "./ChooseCompany.module.css";
import RadioItem from "../RadioItem";
import { User } from "../../db/user";

const ColorButton = styled(Button)<ButtonProps>(() => ({
  color: "#FFF",
  backgroundColor: "#52af77",
  "&:hover": {
    backgroundColor: "#52af77",
  },
}));

interface IMainForm {
  onClickForward: () => void;
  onClickBack: () => void;
}

export const ChooseCompany: React.FC<IMainForm> = ({
  onClickForward,
  onClickBack,
}) => {
  const [selectedCompany, setSelectedCompany] = useState<number>(DB.data[0].id);

  const onClickForwardHandle = () => {
    //save toSTORe
    onClickForward();
  };

  return (
    <Box className={styles.main}>
      <Typography>Выберите партнера</Typography>
      <Box className={styles.radioWrapper}>
        {DB.data.map((company, index) => (
          <RadioItem
            id={company.id}
            key={`company-item-${index}`}
            active={selectedCompany === company.id}
            onClick={setSelectedCompany}
            image={company.image || ""}
          />
        ))}
      </Box>

      <Stack direction={"row"} spacing={4} sx={{ marginTop: "12px" }}>
        <ColorButton variant="contained" fullWidth onClick={onClickBack}>
          Назад
        </ColorButton>

        <ColorButton
          variant="contained"
          fullWidth
          onClick={onClickForwardHandle}
        >
          Далее
        </ColorButton>
      </Stack>
    </Box>
  );
};
