import styled from "@emotion/styled";
import { theme } from "../../../themes/base";

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const Circle = styled.button<{ active?: boolean }>`
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
  ${({ active }) => active && `background-color: ${theme.colors.primary};`}
`;
