import React, { FC } from "react";
import { Box, useTheme } from "@mui/material";

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: FC<WrapperProps> = ({ children }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        background: theme.palette.background.default,
        borderRadius: 4,
        padding: theme.spacing(1, 2, 7),
      }}>
      {children}
    </Box>
  );
};

export { Wrapper };
