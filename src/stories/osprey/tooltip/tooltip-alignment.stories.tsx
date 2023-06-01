import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip as TooltipComponent } from "../../../components/overlays/tooltip/view/Tooltip";

const meta = {
  title: "Example/Tooltip",
  component: TooltipComponent,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof TooltipComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Alignment = {
  render: (args: Story) => (
    <div className="flex items-center gap-4">
      <TooltipComponent align="start" content="This tooltip is aligned at the start of its trigger" {...args}>
        <span>Start</span>
      </TooltipComponent>

      <TooltipComponent align="center" content="This tooltip is aligned at the center of its trigger" {...args}>
        <span>Center</span>
      </TooltipComponent>

      <TooltipComponent align="end" content="This tooltip is aligned at the end its trigger" {...args}>
        <span>End</span>
      </TooltipComponent>
    </div>
  ),
};
