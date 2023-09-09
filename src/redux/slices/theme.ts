import { createSlice } from "@reduxjs/toolkit";

interface InitialStateType {
  value: "light" | "dark";
}

const initialState: InitialStateType = {
  value: "light",
};

const theme = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setTheme } = theme.actions;

export default theme.reducer;
