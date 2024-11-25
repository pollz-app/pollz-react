import { PollzSDK } from "pollz-js";
import React, {
  createContext,
  FC,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from "react";
import { theme as defaultTheme } from "./ui/themes/base";

export type Theme = {
  colors: {
    primary: string;
    secondary: string;
  };
};

export const PollzContext = createContext<
  { sdk: PollzSDK; initialized: boolean; theme?: Theme } | undefined
>(undefined);

/**
 * PollzProvider is a context provider that initializes the Pollz SDK and provides it to the rest of the application.
 * @param appId - The application ID to initialize the Pollz SDK.
 * @param appSecret - The application secret to initialize the Pollz SDK.
 * @param theme - The theme to use for the Pollz UI components.
 */
export const PollzProvider: FC<
  PropsWithChildren<
    { theme?: Theme } & (
      | { appId: string; appSecret: string }
      | { appId?: undefined; appSecret?: undefined }
    )
  >
> = ({
  children,
  appId,
  appSecret,
  theme = {
    colors: {
      primary: defaultTheme.colors.primary,
      secondary: defaultTheme.colors.secondary,
    },
  },
}) => {
  console.log("PollzProvider");

  const sdk = useRef(new PollzSDK());
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (appId && appSecret && !initialized) {
      sdk.current.init({ appId, appSecret }).then(() => {
        setInitialized(true);
      });
    }
  }, [appId, appSecret, initialized]);

  return (
    <PollzContext.Provider
      value={{
        sdk: sdk.current,
        initialized,
        theme,
      }}
    >
      {children}
    </PollzContext.Provider>
  );
};
