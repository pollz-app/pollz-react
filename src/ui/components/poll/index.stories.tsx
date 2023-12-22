import { action } from "@storybook/addon-actions";
import { boolean, select } from "@storybook/addon-knobs";
import { Meta, StoryObj } from "@storybook/react";
import { Poll } from ".";
import { PollPresentation } from "../../commons/types";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Poll> = {
  component: Poll,
};

export default meta;

type Story = StoryObj<typeof Poll>;

export const SingleChoice: Story = {
  args: {
    canAddOptions: boolean("canAddOptions", true),
    withoutFeedback: boolean("withoutFeedback", false),
    confirmToVote: boolean("confirmToVote", true),
    pollId: 101,
    userId: "STORYBOOK_USER",
    onSubmitted: action("onSubmitted"),
    presentation: select(
      "presentation",
      Object.values(PollPresentation),
      PollPresentation.Default
    ),
  },
};

export const MultipleChoices: Story = {
  args: {
    canAddOptions: boolean("canAddOptions", true),
    withoutFeedback: boolean("withoutFeedback", false),
    confirmToVote: boolean("confirmToVote", true),
    pollId: 30,
    userId: "STORYBOOK_USER",
    onSubmitted: action("onSubmitted"),
  },
};
