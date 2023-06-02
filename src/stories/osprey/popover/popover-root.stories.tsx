import type { Meta, StoryObj } from "@storybook/react";
import { Popover as PopoverComponent } from "../../../components/overlays/popover/view/Popover";

const meta = {
  title: "Components/Popover/Root",
  component: PopoverComponent,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: false,
    },
    defaultOpen: {
      description:
        "The open state of the popover when it is initially rendered. Use when you do not need to control its open state.",
      type: "boolean",
    },
    open: {
      description: "The controlled open state of the popover. Must be used in conjunction with onOpenChange.",
      type: "boolean",
    },
    modal: {
      description:
        "The modality of the popover. When set to true, interaction with outside elements will be disabled and only popover content will be visible to screen readers.",
      type: "boolean",
      defaultValue: false,
    },
  },
} satisfies Meta<typeof PopoverComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Contains all the parts of a popover.
 */
export const PopoverRoot: Story = {
  args: {
    children: (
      <p className="inline">
        This component serves as a parent container for{" "}
        <p className="inline font-mono font-medium text-gray-600 border bg-gray-100 py-1 px-2 rounded">
          PopoverTrigger
        </p>{" "}
        and{" "}
        <p className="inline font-mono font-medium text-gray-600 border bg-gray-100 py-1 px-2 rounded">
          PopoverContent
        </p>
        , thus, does not render anything.
      </p>
    ),
  },
};
