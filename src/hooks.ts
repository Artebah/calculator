import React from "react";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import type { AppDispatch, RootState } from "./redux/store";
import { useTheme } from "@mui/material";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export function useGetCurrentTime() {
  const [date, setDate] = React.useState<Date>(new Date());

  React.useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return date.toLocaleTimeString().slice(0, -3);
}
export function useIsDarkMode() {
  const theme = useTheme();

  return theme.palette.mode === "dark";
}
