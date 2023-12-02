import React from "react";
import { Spinner } from "./styles";

type Props = {
  size?: number;
  color?: string;
};

export const ActivityIndicator: React.FC<Props> = ({ size, color }) => {
  return <Spinner size={size} color={color} />;
};
