import { action } from "@storybook/addon-actions";
import { boolean, select } from "@storybook/addon-knobs";
import { Meta, StoryObj } from "@storybook/react";
import { AnonymousPoll } from ".";
import { PollPresentation } from "../../commons/types";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof AnonymousPoll> = {
  component: AnonymousPoll,
};

export default meta;

type Story = StoryObj<typeof AnonymousPoll>;

export const Default: Story = {
  args: {
    withoutFeedback: boolean("withoutFeedback", false),
    confirmToVote: boolean("confirmToVote", true),
    pollToken:
      "h6eNviHnGXQM3IevWzkCO1vImuJev8h%2fJHvZ20V90ci8PjEABRAeGfYd3WNyCXrNhWEArJzz%2flUTeG3ycMjKGwWEKwmx5lvzA%2bnh95GJMME3VPnLFUIKnvrffvqMegPHrdyihqkGxWfz5hpbDrpzrY7Aq23AevmdDqm6vlV6%2bRA%3d",
    onSubmitted: action("onSubmitted"),
    presentation: select(
      "presentation",
      Object.values(PollPresentation),
      PollPresentation.Default
    ),
  },
};
