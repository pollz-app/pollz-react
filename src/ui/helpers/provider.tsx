import styled from "@emotion/native";
import React, { PropsWithChildren } from "react";
import { View } from "react-native";
import { PollzProvider } from "../../context";
import { usePollz } from "../../use-pollz";
import { ActivityIndicator } from "../commons/activity-indicator";

const CenteredView = styled(View)`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const WithPollz: React.FC<PropsWithChildren> = ({ children }) => {
  const { initialized } = usePollz();

  if (!initialized) {
    return (
      <CenteredView>
        <ActivityIndicator size={30} />
      </CenteredView>
    );
  }

  return children;
};

export const Provider: React.FC<PropsWithChildren> = ({ children }) => (
  <PollzProvider
    appId="9973a8b9-ca11-451a-b035-c5ad9633fb06"
    appSecret="08fRrLjhM4frjILtO8ylBInPozQ="
  >
    <CenteredView>
      <WithPollz>{children}</WithPollz>
    </CenteredView>
  </PollzProvider>
);

export const ProviderFn = (Story: () => React.ReactNode) => (
  <Provider>
    <Story />
  </Provider>
);
