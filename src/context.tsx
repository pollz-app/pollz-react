import { PollzSDK } from "pollz-js";
import React, {
  createContext,
  FC,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from "react";

export const PollzContext = createContext<
  { sdk: PollzSDK; initialized: boolean } | undefined
>(undefined);

export const PollzProvider: FC<
  PropsWithChildren<
    | { appId: string; appSecret: string }
    | { appId?: undefined; appSecret?: undefined }
  >
> = ({ children, appId, appSecret }) => {
  const sdk = useRef(new PollzSDK());
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (appId && appSecret) {
      sdk.current.init({ appId, appSecret }).then(() => {
        setInitialized(true);
      });
    }
  }, [appId, appSecret]);

  return (
    <PollzContext.Provider value={{ sdk: sdk.current, initialized }}>
      {children}
    </PollzContext.Provider>
  );
};
