import styled from "@emotion/styled";
import { theme } from "../../themes/base";

export const SwitchWrapper = styled.label`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 21px;
`;

export const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background-color: ${theme.colors.primary};
  }

  &:focus + span {
    box-shadow: 0 0 1px ${theme.colors.primary};
  }

  &:checked + span:before {
    transform: translateX(18px);
  }
`;

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  border-radius: 15px;
  transition: 0.4s;

  &:before {
    position: absolute;
    content: "";
    height: 15px;
    width: 15px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    border-radius: 50%;
    transition: 0.4s;
  }
`;
