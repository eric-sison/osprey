import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip as TooltipComponent } from "../../../components/overlays/tooltip/view/Tooltip";

const meta = {
  title: "Components/Tooltip",
  component: TooltipComponent,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof TooltipComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Directions = {
  render: (args: Story) => (
    <div className="flex items-center gap-4">
      <TooltipComponent content="This tooltip is on top of its trigger" {...args}>
        <span>Top</span>
      </TooltipComponent>

      <TooltipComponent side="right" content="This tooltip is at the right side its trigger" {...args}>
        <span>Right</span>
      </TooltipComponent>

      <TooltipComponent side="bottom" content="This tooltip is at the bottom its trigger" {...args}>
        <span>Bottom</span>
      </TooltipComponent>

      <TooltipComponent side="left" content="This tooltip is at the left side its trigger" {...args}>
        <span>Left</span>
      </TooltipComponent>
    </div>
  ),
};
