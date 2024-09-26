import React from "react";
import { ActivityIndicator as BaseActivityIndicator } from "react-native";
import { usePollz } from "../../../use-pollz";

type Props = {
  size?: number;
  color?: string;
};

export const ActivityIndicator: React.FC<Props> = ({ size, color }) => {
  const { theme } = usePollz();

  return (
    <BaseActivityIndicator size={size} color={theme?.colors.primary || color} />
  );
};
