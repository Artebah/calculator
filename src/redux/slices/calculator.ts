import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface InitialStateType {
  expression: string;
  isError: boolean;
  history: string;
}

const initialState: InitialStateType = {
  expression: "0",
  isError: false,
  history: "",
};

const calculator = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    setExpression: (state, action: PayloadAction<string>) => {
      state.isError = false;
      state.expression = action.payload;
    },
    setResult: (state) => {
      // eslint-disable-next-line no-eval
      const result = eval(state.expression);

      state.history = state.expression;

      if (result === Infinity || result === -Infinity) {
        state.expression = "Cannot divide by zero";
        state.isError = true;
      } else if (isNaN(result)) {
        state.expression = "Incorrect expression";
        state.isError = true;
      } else {
        state.expression = result.toString();
      }
    },
    setReset: (state) => {
      state.expression = "0";
      state.isError = false;
      state.history = "";
    },
  },
});

export const { setExpression, setResult, setReset } = calculator.actions;

export default calculator.reducer;
