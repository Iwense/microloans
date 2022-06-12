import React, { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value: number) {
  return `${value}₽`;
}

export const SliderMain = () => {
  return (
    <Box>
      <Slider
        aria-label="MicroLoans"
        defaultValue={3000}
        getAriaValueText={valuetext}
        color="secondary"
        max={30000}
      />
    </Box>
  );
};
