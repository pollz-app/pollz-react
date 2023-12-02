import styled from "@emotion/styled";
import { theme } from "../../../themes/base";

export const Row = styled.div`
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const Circle = styled.button<{ active?: boolean }>`
  width: 20px;
  height: 20px;
  margin-right: 8px;
  border-radius: 10px;
  border-width: 1px;
  border-color: #aaa;
  justify-content: center;
  align-items: center;
  ${({ active }) => active && `background-color: ${theme.colors.primary};`}
`;
