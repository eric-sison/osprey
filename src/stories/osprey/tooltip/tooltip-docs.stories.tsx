import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip as TooltipComponent } from "../../../components/overlays/tooltip/view/Tooltip";

const meta = {
  title: "Example/Tooltip",
  component: TooltipComponent,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    children: {
      description: "A react node to render where the tooltip will be triggered.",
      control: false,
    },
    content: {
      description: "This content of the tooltip component.",
      type: "string",
    },
    providerDelay: {
      description: "The duration from when the mouse enters a tooltip trigger until the tooltip opens.",
      type: "number",
      defaultValue: 700,
    },
    skipDelayDuration: {
      description: "How much time a user has to enter another trigger without incurring a delay again.",
      type: "number",
      defaultValue: 300,
    },
    disableHoverableContent: {
      description:
        "Prevents Tooltip.Content from remaining open when hovering. Disabling this has accessibility consequences.",
      type: "boolean",
    },
    defaultOpen: {
      description:
        "The open state of the tooltip when it is initially rendered. Use when you do not need to control its open state.",
      type: "boolean",
    },
    open: {
      description: "The controlled open state of the tooltip. Must be used in conjunction with onOpenChange.",
      type: "boolean",
    },
    onOpenChange: {
      description: "Event handler called when the open state of the tooltip changes.",
      type: "function",
    },
    delayDuration: {
      description: "Override the duration given to the `Provider` to customise the open delay for a specific tooltip.",
      type: "number",
      defaultValue: 700,
    },
    asChild: {
      description:
        "Change the default rendered element for the one passed as a child, merging their props and behavior.",
      type: "boolean",
      defaultValue: false,
    },
    forceMount: {
      description:
        "Used to force mounting when more control is needed. Useful when controlling animation with React animation libraries. If used on this part, it will be inherited by Tooltip.Content.",
      type: "boolean",
    },
    container: {
      description: "Specify a container element to portal the content into.",
    },
    onEscapeKeyDown: {
      description:
        "Event handler called when the escape key is down. It can be prevented by calling event.preventDefault.",
      type: "function",
    },
    onPointerDown: {
      description:
        "Event handler called when a pointer event occurs outside the bounds of the component. It can be prevented by calling event.preventDefault.",
      type: "function",
    },
    side: {
      description:
        "The preferred side of the trigger to render against when open. Will be reversed when collisions occur and avoidCollisions is enabled.",
      options: ["top", "right", "bottom", "left"],
      control: {
        type: "radio",
      },
      defaultValue: "top",
    },
    sideOffset: {
      description: "The distance in pixels from the trigger.",
      type: "number",
      defaultValue: 0,
    },
    align: {
      description: "The preferred alignment against the trigger. May change when collisions occur.",
      options: ["start", "center", "end"],
      control: {
        type: "radio",
      },
      type: "string",
      defaultValue: "center",
    },
    alignOffset: {
      description: "An offset in pixels from the 'start' or 'end' alignment options.",
      type: "number",
      defaultValue: 0,
    },
    avoidCollisions: {
      description: "When true, overrides the side andalign preferences to prevent collisions with boundary edges.",
      type: "boolean",
      defaultValue: true,
    },
    collisionBoundary: {
      description:
        "The element used as the collision boundary. By default this is the viewport, though you can provide additional element(s) to be included in this check.",
      type: "symbol",
      defaultValue: [],
    },
    collisionPadding: {
      description:
        "The distance in pixels from the boundary edges where collision detection should occur. Accepts a number (same for all sides), or a partial padding object, for example: { top: 20, left: 20 }.",
    },
    arrowPadding: {
      description:
        "The padding between the arrow and the edges of the content. If your content has border-radius, this will prevent it from overflowing the corners.",
      type: "number",
    },
    sticky: {
      description:
        "The sticky behavior on the align axis. 'partial' will keep the content in the boundary as long as the trigger is at least partially in the boundary whilst 'always' will keep the content in the boundary regardless.",
      options: ["always", "partial"],
      control: { type: "radio" },
      defaultValue: "partial",
    },
    hideWhenDetached: {
      description: "Whether to hide the content when the trigger becomes fully occluded.",
      type: "boolean",
      defaultValue: false,
    },
    arrow: {
      description:
        "An optional arrow element to render alongside the tooltip. This can be used to help visually link the trigger with the Tooltip.Content. Must be rendered inside Tooltip.Content.",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TooltipComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.
 */
export const Default: Story = {
  args: {
    children: <span className="animate-pulse hover:animate-none text-lg font-bold">Hover on me</span>,
    content: "This is a sample tooltip",
    arrow: { width: 10, height: 5 },
  },
};
