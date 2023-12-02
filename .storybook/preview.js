import { ProviderFn } from "../src/ui/helpers/provider";

/** @type { import('@storybook/react').Preview } */
const preview = {
  applyDecorators: (Story) => {
    return ProviderFn(Story);
  },
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
