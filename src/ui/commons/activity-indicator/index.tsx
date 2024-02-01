import React from "react";
import { usePollz } from "../../../use-pollz";
import { Spinner } from "./styles";

type Props = {
  size?: number;
  color?: string;
};

export const ActivityIndicator: React.FC<Props> = ({ size, color }) => {
  const { theme } = usePollz();
  return <Spinner size={size} color={theme?.colors.primary || color} />;
};
