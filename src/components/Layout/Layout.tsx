import React, { FC } from "react";
import { Container } from "@mui/material";
import { StatusBar } from "../StatusBar";
import { Wrapper } from "../Wrapper";
import { Header } from "../Header";
import { CalculationScreen } from "../CalculationScreen";
import { ButtonsBlock } from "../ButtonsBlock";

interface LayoutProps {}

const Layout: FC<LayoutProps> = () => {
  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Wrapper>
        <StatusBar />
        <Header />
        <CalculationScreen />
        <ButtonsBlock />
      </Wrapper>
    </Container>
  );
};

export { Layout };
