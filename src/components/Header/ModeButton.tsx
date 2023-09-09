import React, { FC } from "react";
import { Button, useTheme } from "@mui/material";

interface ModeButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  isActive: boolean;
}

const ModeButton: FC<ModeButtonProps> = ({ children, onClick, isActive }) => {
  return (
    <Button
      variant={isActive ? "contained" : "text"}
      onClick={onClick}
      sx={[
        {
          borderRadius: 5,
          fontSize: 14,
          textTransform: "capitalize",
          height: 35,
        },

        !isActive && {
          color: (theme) => theme.palette.text.secondary,
          ":hover": {
            color: (theme) => theme.palette.text.primary,
          },
        },
      ]}>
      {children}
    </Button>
  );
};

export { ModeButton };
