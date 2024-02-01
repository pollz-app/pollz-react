import styled from "@emotion/styled";
import { Text, TextSemiBold } from "../../commons/text";
import { theme } from "../../themes/base";

export const VoteText = styled(Text)`
  color: white;
  font-size: 16px;
`;
export const VoteButton = styled.button<{ color: string | undefined }>`
  display: flex;
  background-color: ${({ color = theme.colors.primary }) => color};
  padding: 10px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  border: none;
`;

export const OptionLabel = styled(Text)`
  display: flex;
  font-size: 16px;
  flex: 1;
`;

export const Tick = styled.div`
  width: 10px;
  height: 10px;
  background-color: white;
  border-radius: 5px;
`;

export const OptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
  cursor: pointer;
`;

export const PollName = styled(TextSemiBold)`
  font-size: 18px;
  margin: 0;
  margin-bottom: 8px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: white;
  width: 100%;
  justify-content: space-between;
  gap: 10px;
`;

export const NoPollWrapper = styled.div`
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 16px;
  background-color: white;
  width: 100%;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const VotedText = styled(Text)`
  font-size: 20px;
`;

export const VotedWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  gap: 10px;
  margin: 20px 0;
`;
