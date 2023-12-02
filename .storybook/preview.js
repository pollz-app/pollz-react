import { ProviderFn } from "../src/ui/helpers/provider";

/** @type { import('@storybook/react').Preview } */
const preview = {
  decorators: [ProviderFn],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
