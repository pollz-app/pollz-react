import styled from "@emotion/styled";

export const Spinner = styled.div<{ size?: number; color?: string }>`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top: 4px solid ${(props) => props.color || "#3498db"};
  width: ${(props) => props.size || 40}px;
  height: ${(props) => props.size || 40}px;
  animation: spin 1s linear infinite;
`;
