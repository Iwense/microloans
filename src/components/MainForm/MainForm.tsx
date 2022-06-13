import React, { useContext } from "react";
import Box from "@mui/material/Box";
import { Slider, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { DB } from "../../db/db";
import styles from "./MainForm.module.css";
import { UserContext } from "../..";
import MainButton from "../MainButton";

function currencyFormat(num: number) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ") + " ₽";
}

function daysFormat(num: number) {
  return `${num} дней`;
}

const MoneySlider = styled(Slider)({
  color: "#52af77",
  height: 4,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: "6px 12px",
    borderRadius: "4px",
    backgroundColor: "#52af77",
  },
});

interface IMainForm {
  onClick?: () => void;
}

export const MainForm: React.FC<IMainForm> = ({ onClick }) => {
  const User = useContext(UserContext);
  const [moneyValue, setMoneyValue] = React.useState<
    number | string | Array<number | string>
  >(User.amount || 15000);

  const [dayValue, setDayValue] = React.useState<
    number | string | Array<number | string>
  >(User.days || 7);

  const money = typeof moneyValue === "number" ? moneyValue : 0;
  const days = typeof dayValue === "number" ? dayValue : 0;

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setMoneyValue(newValue);
  };

  const handleSliderDaysChange = (
    event: Event,
    newValue: number | number[]
  ) => {
    setDayValue(newValue);
  };

  const handleClick = () => {
    User.setMoney(money, days);
    onClick?.();
  };

  return (
    <Box className={styles.main}>
      <Typography sx={{ fontSize: "20px" }}>
        Первый займ <span className={styles.free}>БЕСПЛАТНО</span>
      </Typography>

      <Box className={styles.form}>
        <Stack
          justifyContent="space-between"
          alignItems="center"
          direction="row"
        >
          <Typography>Выберите сумму</Typography>
          <Box className={styles.moneyBox}>
            <Typography sx={{ fontWeight: "500" }}>
              {currencyFormat(money)}
            </Typography>
          </Box>
        </Stack>
        <MoneySlider
          aria-label="MicroLoans"
          defaultValue={15_000}
          value={money}
          onChange={handleSliderChange}
          valueLabelDisplay="off"
          max={DB.maxAmount || 30_000}
          step={1_000}
          min={3_000}
        />

        <Box className={styles.sliderMarks}>
          <Typography sx={{ fontSize: "12px" }}>
            {currencyFormat(3000)}
          </Typography>
          <Typography sx={{ fontSize: "12px" }}>
            {currencyFormat(DB.maxAmount || 30_000)}
          </Typography>
        </Box>

        <Box sx={{ mt: 2 }}>
          <Stack
            justifyContent="space-between"
            alignItems="center"
            direction="row"
          >
            <Typography>Выберите cрок</Typography>
            <Box className={styles.moneyBox}>
              <Typography sx={{ fontWeight: "500" }}>
                {daysFormat(days)}
              </Typography>
            </Box>
          </Stack>
          <MoneySlider
            aria-label="MicroLoans"
            defaultValue={7}
            value={days}
            onChange={handleSliderDaysChange}
            valueLabelDisplay="off"
            max={DB.limitsDays}
            step={1}
            min={5}
          />

          <Box className={styles.sliderMarks}>
            <Typography sx={{ fontSize: "12px" }}>{daysFormat(5)}</Typography>
            <Typography sx={{ fontSize: "12px" }}>
              {daysFormat(DB.limitsDays || 12)}
            </Typography>
          </Box>
        </Box>
        <MainButton
          variant="contained"
          fullWidth
          sx={{ backgroundColor: "#52af77", marginTop: "16px" }}
          onClick={handleClick}
        >
          Далее
        </MainButton>
      </Box>
    </Box>
  );
};
