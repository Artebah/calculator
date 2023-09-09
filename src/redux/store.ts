import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/theme";
import calculatorReducer from "./slices/calculator";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    calculator: calculatorReducer,
  },
  devTools: true,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
