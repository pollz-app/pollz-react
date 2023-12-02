import { withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import { ProviderFn } from "./provider";

export const storyOf = (name: string) => {
  return storiesOf(name, module)
    .addDecorator(withKnobs)
    .addDecorator(ProviderFn);
};
