import { action } from "@storybook/addon-actions";
import { Meta, StoryObj } from "@storybook/react";
import { CreatePoll } from ".";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof CreatePoll> = {
  component: CreatePoll,
};

export default meta;

type Story = StoryObj<typeof CreatePoll>;

export const Default: Story = {
  args: {
    //👇 The args you need here will depend on your component
    onPollCreated: action("onPollCreated"),
  },
};
