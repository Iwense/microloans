import { Box, ButtonBase } from "@mui/material";
import cn from "classnames";
import styles from "./RadioItem.module.css";

interface IRadioItem {
  className?: string;
  id: number;
  active: boolean;
  onClick: (id: number) => void;
  image: string;
}

export const RadioItem: React.FC<IRadioItem> = ({
  active,
  onClick,
  image,
  id,
}) => {
  const handleClick = () => {
    onClick?.(id);
  };

  return (
    <ButtonBase className={styles.main} disableRipple onClick={handleClick}>
      <Box className={cn(styles.item, { [styles.active]: active })}>
        <img className={styles.image} src={image} alt="company"></img>
      </Box>
    </ButtonBase>
  );
};
