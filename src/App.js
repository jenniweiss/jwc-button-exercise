import React from "react";
import { createGlobalStyle } from "styled-components";
import ButtonTable from "./ButtonTable";

const GlobalStyles = createGlobalStyle`
  * {
    box-model: border-box;
    font-family: Roboto, sans-serif;
  }

 
`;

export default function App() {
  return (
    <>
      <GlobalStyles />
      <ButtonTable />
    </>
  );
}
