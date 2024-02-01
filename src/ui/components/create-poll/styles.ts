import styled from "@emotion/styled";
import { Text, TextSemiBold } from "../../commons/text";
import { theme } from "../../themes/base";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 16px;
  background-color: white;
  gap: 16px;
  width: 100%;
`;
export const InputLabel = styled(TextSemiBold)`
  font-size: 16px;
  margin: 0;
  font-weight: bold;
`;

export const InputField = styled.input`
  display: flex;
  padding: 8px;
  flex-grow: 1;
  font-family: Outfit;
  border: none;
`;

export const CreateButton = styled.button<{ color?: string | undefined }>`
  background-color: ${({ color = theme.colors.primary }) => color};
  padding: 10px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 8px;
  border: none;
`;

export const CreateButtonText = styled(Text)`
  color: white;
  font-size: 16px;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CheckboxLabel = styled(Text)`
  font-size: 14px;
  margin-left: 8px;
`;

export const BorderedInputField = styled(InputField)`
  border: 1px solid #aaa;
  border-radius: 5px;
`;

export const listStyles = {
  borderRadius: 5,
  border: "1px solid #aaa",
  borderColor: "#aaa",
  display: "flex",
  flexDirection: "column",
};

export const OptionWrapper = styled.div<{
  isFirst: boolean;
  isLast: boolean;
  isError: boolean;
}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: ${({ isLast }) => (isLast ? "0px" : "1px solid #aaa")};
  background-color: ${({ isError }) => (isError ? "#fdd" : "transparent")};
  border-radius: ${({ isFirst, isLast }) =>
    isFirst ? "4px 4px 0px 0px" : isLast ? "0px 0px 5px 5px" : "0px"};

  input {
    border: none;
    font-family: Outfit;
    background-color: transparent;
  }
`;
