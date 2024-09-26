import styled from "@emotion/native";
import { Pressable, TextInput, View } from "react-native";

export const AddOptionContainer = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const AddOptionInput = styled(TextInput)`
  display: flex;
  flex: 1;
  border: 1px solid #aaa;
  border-radius: 5px;
  margin-right: 8px;
  padding: 10px;
  font-family: Outfit;
`;

export const AddOptionButton = styled(Pressable)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  cursor: pointer;
`;
