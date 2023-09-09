import React, { FC } from "react";
import { Box } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { ActionButton } from "../ActionButton";

import BackspaceIcon from "@mui/icons-material/BackspaceOutlined";
import { setExpression, setReset, setResult } from "../../redux/slices/calculator";

export const mathSigns = {
  divide: "÷",
  multiply: "×",
  minus: "−",
  plus: "+",
  equal: "=",
};

interface ButtonsBlockProps {}

const ButtonsBlock: FC<ButtonsBlockProps> = () => {
  const dispatch = useAppDispatch();
  const { expression, isError } = useAppSelector((store) => store.calculator);

  const typeValueHandler = (value: string) => {
    const numberRegex = /^\d+(\.\d*)?$/;
    const tokensRegex = /([+\-*/]|(\d+\.\d*|\.\d+|\d+\.)|\d+)/g;
    const isSignValue = Object.values(mathSigns).includes(value);

    if (value === "AC") {
      return dispatch(setReset());
    }
    if (value === "erase") {
      const newExpression = expression.slice(0, -1);

      if (newExpression === "") {
        return dispatch(setExpression("0"));
      }

      return dispatch(setExpression(newExpression));
    }
    if (isError) {
      dispatch(setReset());
      dispatch(setExpression(value));

      return;
    }

    const tokens = expression.match(tokensRegex);
    if (!tokens) return;

    const lastIndex = tokens.length - 1;
    const lastElement = tokens[lastIndex];

    // add number
    if (
      (numberRegex.test(lastElement) && !isSignValue) ||
      (!numberRegex.test(lastElement) && !isSignValue)
    ) {
      if (lastElement.includes(".") && value === ".") return;
      if (lastElement === "0") {
        if (value.match(/[1-9]/g)) {
          tokens[lastIndex] = value;
        }
        if (value === ".") {
          tokens[lastIndex] += value;
        }
      } else {
        tokens[lastIndex] += value;
      }
    }
    // add sign
    if (numberRegex.test(lastElement) && isSignValue) {
      switch (value) {
        case mathSigns.divide:
          tokens.push("/");
          break;
        case mathSigns.multiply:
          tokens.push("*");
          break;
        case mathSigns.minus:
          tokens.push("-");
          break;
        case mathSigns.plus:
          tokens.push("+");
          break;
        case mathSigns.equal:
          if (
            lastElement === "-" ||
            lastElement === "+" ||
            lastElement === "/" ||
            lastElement === "*"
          ) {
            return;
          } else {
            return dispatch(setResult());
          }
      }
    }
    // change sign
    if (!numberRegex.test(lastElement) && isSignValue) {
      switch (value) {
        case mathSigns.divide:
          tokens[lastIndex] = "/";
          break;
        case mathSigns.multiply:
          tokens[lastIndex] = "*";
          break;
        case mathSigns.minus:
          tokens[lastIndex] = "-";
          break;
        case mathSigns.plus:
          tokens[lastIndex] = "+";
          break;

        default:
          break;
      }
    }

    const newExpression = tokens.join("");

    dispatch(setExpression(newExpression));
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Box>
        <Box>
          <ActionButton onClick={() => typeValueHandler("AC")}>AC</ActionButton>
          <ActionButton onClick={() => typeValueHandler("erase")} disabled={isError}>
            <BackspaceIcon />
          </ActionButton>
          <ActionButton
            onClick={() => alert("It doesn't work because I'm lazy 🤓🤓")}
            disabled={isError}
            sx={{ color: "primary.main" }}>
            %
          </ActionButton>
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateRows: "repeat(4, 1fr)",
            gridTemplateColumns: "repeat(3, 1fr)",
          }}>
          {[7, 8, 9, 4, 5, 6, 1, 2, 3, "00", 0, "."].map((value) => (
            <ActionButton
              disabled={isError && (value === "00" || value === ".")}
              onClick={() => typeValueHandler(value.toString())}
              key={value}>
              {value}
            </ActionButton>
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}>
        {[
          mathSigns.divide,
          mathSigns.multiply,
          mathSigns.minus,
          mathSigns.plus,
          mathSigns.equal,
        ].map((value) => (
          <ActionButton
            disabled={isError}
            onClick={() => typeValueHandler(value)}
            key={value}
            sx={{ color: "primary.main", fontSize: 32 }}>
            {value}
          </ActionButton>
        ))}
      </Box>
    </Box>
  );
};

export { ButtonsBlock };
