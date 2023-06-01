import type { Meta, StoryObj } from "@storybook/react";
import { Button as ButtonComponent } from "../../../components/button/view/Button";

const meta = {
  title: "Example/Button",
  component: ButtonComponent,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    children: {
      control: false,
    },
  },
} satisfies Meta<typeof ButtonComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <>Button</>,
  },
  argTypes: {
    tooltip: {
      control: false,
    },
  },
};

export const WithTooltip: Story = {
  args: {
    children: <>Hover on me</>,
    tooltip: "I am a button with a tooltip!",
  },
};
