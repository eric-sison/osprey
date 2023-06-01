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

export const WithArrow: Story = {
  args: {
    children: <span>Tooltip with arrow</span>,
    content: "This tooltip has an arrow anchored into its trigger",
    arrow: {
      width: 10,
      height: 5,
    },
  },
  argTypes: {
    children: {
      control: false,
    },
  },
};
