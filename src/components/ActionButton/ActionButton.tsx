import { IconButton, SxProps } from "@mui/material";
import React, { FC } from "react";

interface ActionButtonProps {
  children: React.ReactNode;
  onClick?: any;
  sx?: SxProps;
  disabled?: boolean;
}

const ActionButton: FC<ActionButtonProps> = ({ children, onClick, sx, disabled }) => {
  return (
    <IconButton
      onClick={onClick}
      disabled={disabled}
      sx={{
        width: 70,
        height: 70,
        margin: 0.2,
        ...sx,
      }}>
      {children}
    </IconButton>
  );
};

export { ActionButton };
