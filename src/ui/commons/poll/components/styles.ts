import styled from "@emotion/native";
import { Pressable, View } from "react-native";
import { theme } from "../../../themes/base";

export const Row = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const Circle = styled(Pressable)<{
  active?: boolean;
  color: string | undefined;
}>`
  padding: 0;
  width: 20px;
  height: 20px;
  margin-right: 8px;
  border-radius: 10px;
  background: transparent;
  border: 1px solid #aaa;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ active, color = theme.colors.primary }) =>
    active && `background-color: ${color};`}
`;
export const OptionButtonLabel = styled(View)`
  padding: 5px;
  font-size: 18px;
`;
export const OptionButtonWrapper = styled(Pressable)<{
  backgroundColor: string;
  borderColor: string;
}>`
  cursor: pointer;
  border-radius: 8px;
  border: 1px solid;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-color: ${({ borderColor }) => borderColor};
`;
