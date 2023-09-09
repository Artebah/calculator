import React, { FC } from "react";
import { Box, Typography } from "@mui/material";
import { useAppSelector, useIsDarkMode } from "../../hooks";

interface CalculationScreenProps {}

const CalculationScreen: FC<CalculationScreenProps> = () => {
  const isDarkTheme = useIsDarkMode();
  const calculationRef = React.useRef<HTMLHeadingElement>(null);
  const { expression, history } = useAppSelector((store) => store.calculator);

  React.useEffect(() => {
    const calculation = calculationRef.current;
    if (calculation) {
      calculation.scrollLeft = calculation.scrollWidth;

      if (calculation.innerHTML.length > 9) {
        calculation.style.fontSize = "28px";
      }
    }
  }, [expression]);

  return (
    <Box
      sx={{
        height: 200,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        gap: 1,
        px: 2,
        pb: 5,
      }}>
      <Typography color="text.secondary">{history}</Typography>
      <Typography
        variant="h3"
        ref={calculationRef}
        sx={{
          color: isDarkTheme ? "#fff" : "#000",
          fontWeight: 700,
          textAlign: "end",
          overflowX: "auto",
          overflowY: "hidden",
          width: 1,
          transition: "all 0.3s ease 0s",
        }}>
        {`${expression}`}
      </Typography>
    </Box>
  );
};

export { CalculationScreen };
