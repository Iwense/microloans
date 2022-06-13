import React, { useContext, useEffect, useMemo, useState } from "react";
import Box from "@mui/material/Box";
import { Stack, Typography } from "@mui/material";
import { DB, ICompanies } from "../../db/db";
import styles from "./ChooseCompany.module.css";
import RadioItem from "../RadioItem";
import { UserContext } from "../..";
import MainButton from "../MainButton";

interface IMainForm {
  onClickForward: () => void;
  onClickBack: () => void;
}

const filteredCompany = (
  companies: ICompanies[],
  amount: number,
  days: number
): ICompanies[] => {
  return companies.reduce<ICompanies[]>((acc, company) => {
    if (company.limitDays >= days && company.amount >= amount) {
      acc.push(company);
    }
    return acc;
  }, []);
};

export const ChooseCompany: React.FC<IMainForm> = ({
  onClickForward,
  onClickBack,
}) => {
  const User = useContext(UserContext);
  const filtered = useMemo(
    () => filteredCompany(DB.data, User.amount, User.days),
    [User]
  );

  const [selectedCompany, setSelectedCompany] = useState<number>(
    filtered[0].id
  );

  const onClickForwardHandle = () => {
    const company = DB.data.find((company) => company.id === selectedCompany);
    User.setCompany = company;
    onClickForward();
  };

  useEffect(() => {
    const selectedCompany =
      filteredCompany(DB.data, User.amount, User.days)?.[0]?.id || 0;
    setSelectedCompany(selectedCompany);
  }, [User]);

  return (
    <Box className={styles.main}>
      <Typography>Выберите партнера</Typography>
      <Box className={styles.radioWrapper}>
        {filtered.map((company, index) => (
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
