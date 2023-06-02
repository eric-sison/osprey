import type { Meta, StoryObj } from "@storybook/react";
import {
  Popover as PopoverRoot,
  PopoverTrigger as PopoverTriggerComponent,
  PopoverContent as PopoverContentComponent,
} from "../../../components/overlays/popover/view/Popover";

const meta = {
  title: "Components/Popover/Trigger",
  component: PopoverTriggerComponent,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    asChild: {
      description:
        "Change the default rendered element for the one passed as a child, merging their props and behavior.",
      type: "boolean",
      defaultValue: false,
    },
  },
} satisfies Meta<typeof PopoverTriggerComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Contains all the parts of a popover.
 */
export const PopoverTrigger: Story = {
  render: (args) => {
    return (
      <PopoverRoot>
        <PopoverTriggerComponent {...args}>Trigger Popover Here!</PopoverTriggerComponent>
        <PopoverContentComponent>Hello!</PopoverContentComponent>
      </PopoverRoot>
    );
  },
};
