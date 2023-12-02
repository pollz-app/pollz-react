import styled from "@emotion/styled";
import { theme } from "../../themes/base";

export const Spinner = styled.div<{ size?: number; color?: string }>`
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  border: 4px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top: 4px solid ${(props) => props.color || theme.colors.primary};
  width: ${(props) => props.size || 40}px;
  height: ${(props) => props.size || 40}px;
  animation: spin 1s linear infinite;
`;
