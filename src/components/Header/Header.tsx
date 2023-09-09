import React, { FC } from "react";
import { Box, IconButton, useTheme } from "@mui/material";
import { ModeButton } from "./ModeButton";

import MenuIcon from "@mui/icons-material/MenuRounded";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";

import { useAppDispatch, useAppSelector, useIsDarkMode } from "../../hooks";
import { setTheme } from "../../redux/slices/theme";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const [activeMode, setActiveMode] = React.useState(0);
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const isDarkMode = useIsDarkMode();

  const onChangeMode = (i: number) => {
    setActiveMode(i);
  };

  const changeTheme = () => {
    const newValue = theme.palette.mode === "light" ? "dark" : "light";

    dispatch(setTheme(newValue));
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 0.5,
      }}>
      <IconButton sx={{ ml: -1 }}>
        <MenuIcon />
      </IconButton>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          overflowX: "auto",
          [theme.breakpoints.down("md")]: {
            maxWidth: 170,
            overflowX: "scroll",
            mt: 1.3,
            pb: 1.3,
            "& > button": {
              flexShrink: 0,
            },
          },
        }}>
        {["Calculator", "Converter"].map((name, i) => (
          <ModeButton
            key={name}
            isActive={activeMode === i}
            onClick={() => onChangeMode(i)}>
            {name}
          </ModeButton>
        ))}
      </Box>
      <IconButton onClick={changeTheme} sx={{ mr: -1 }}>
        {isDarkMode ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
      </IconButton>
    </Box>
  );
};

export { Header };
