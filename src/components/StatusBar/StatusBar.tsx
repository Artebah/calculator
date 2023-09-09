import React, { FC } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { useGetCurrentTime } from "../../hooks";
import SignalCellularAltRoundedIcon from "@mui/icons-material/SignalCellularAltRounded";
import WifiRoundedIcon from "@mui/icons-material/WifiRounded";
import Battery50RoundedIcon from "@mui/icons-material/Battery50Rounded";

interface StatusBarProps {}

const StatusBar: FC<StatusBarProps> = () => {
  const theme = useTheme();
  const currentTime = useGetCurrentTime();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
      }}>
      <Typography color="text.primary" variant="body2" fontWeight={700}>
        {currentTime}
      </Typography>

      <Box
        sx={{
          "& > svg": {
            color: theme.palette.text.primary,
            fontSize: 16,
          },
        }}>
        <SignalCellularAltRoundedIcon />
        <WifiRoundedIcon />
        <Battery50RoundedIcon />
      </Box>
    </Box>
  );
};

export { StatusBar };
