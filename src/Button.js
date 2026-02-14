import React from "react";
import styled from "styled-components";

import { COLORS } from "./constants";

const Button = ({ variant, size, children }) => {
  return (
    <ButtonWrapper size={size} variant={variant}>
      {children}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button`
  text-transform: uppercase;
  letter-spacing: -2%;

  height: ${(props) => props.size == "large" && "60px"};
  height: ${(props) => props.size == "medium" && "50px"};
  height: ${(props) => props.size == "small" && "30px"};

  font-size: ${(props) => props.size == "large" && "21px"};
  font-size: ${(props) => props.size == "medium" && "18px"};
  font-size: ${(props) => props.size == "small" && "16px"};

  padding-left: ${(props) => props.size == "large" && "36px"};
  padding-right: ${(props) => props.size == "large" && "36px"};
  padding-left: ${(props) => props.size == "medium" && "24px"};
  padding-right: ${(props) => props.size == "medium" && "24px"};
  padding-left: ${(props) => props.size == "small" && "16px"};
  padding-right: ${(props) => props.size == "small" && "16px"};

  border-radius: ${(props) => props.size == "large" && "4px"};
  border-radius: ${(props) => props.size == "medium" && "2px"};
  border-radius: ${(props) => props.size == "small" && "2px"};

  color: ${(props) => props.variant == "fill" && "white"};
  color: ${(props) => props.variant == "outline" && COLORS.primary};
  color: ${(props) => props.variant == "ghost" && COLORS.gray};

  background-color: ${(props) => props.variant == "fill" && COLORS.primary};
  background-color: ${(props) => props.variant == "outline" && COLORS.white};
  background-color: ${(props) => props.variant == "ghost" && "transparent"};

  border: ${(props) =>
    props.variant == "fill" && "solid 2px " + COLORS.primary};
  border: ${(props) =>
    props.variant == "outline" && "solid 2px " + COLORS.primary};
  border: ${(props) => props.variant == "ghost" && "none"};

  &:hover {
    background-color: ${(props) =>
      props.variant == "fill" && COLORS.primaryLight};
    background-color: ${(props) =>
      props.variant == "outline" && COLORS.offwhite};
    background-color: ${(props) =>
      props.variant == "ghost" && COLORS.transparentGray15};
  }
`;
export default Button;

/*
 

const Button = styled.button<{ $primary?: boolean; }>`
  
  background: ${props => props.$primary ? "#BF4F74" : "white"};
  color: ${props => props.$primary ? "white" : "#BF4F74"};

  
  
 
 
  */
