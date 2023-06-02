import type { Meta, StoryObj } from "@storybook/react";
import {
  Popover as PopoverComponent,
  PopoverTrigger,
  PopoverContent as PopoverContentComponent,
} from "../../../components/overlays/popover/view/Popover";

const meta = {
  title: "Components/Popover/Content",
  component: PopoverContentComponent,
  tags: ["autodocs"],
  argTypes: {
    onOpenAutoFocus: {
      description:
        "Event handler called when focus moves into the component after opening. It can be prevented by calling event.preventDefault.",
      type: "function",
    },
    onCloseAutoFocus: {
      description:
        "Event handler called when focus moves to the trigger after closing. It can be prevented by calling event.preventDefault.",
      type: "function",
    },
    onEscapeKeyDown: {
      description:
        "Event handler called when the escape key is down. It can be prevented by calling event.preventDefault.",
      type: "function",
    },
    onPointerDownOutside: {
      description:
        "Event handler called when a pointer event occurs outside the bounds of the component. It can be prevented by calling event.preventDefault.",
      type: "function",
    },
    onFocusOutside: {
      description:
        "Event handler called when focus moves outside the bounds of the component. It can be prevented by calling event.preventDefault.",
      type: "function",
    },
    onInteractOutside: {
      description:
        "Event handler called when an interaction (pointer or focus event) happens outside the bounds of the component. It can be prevented by calling event.preventDefault.",
      type: "function",
    },
    forceMount: {
      description:
        "Used to force mounting when more control is needed. Useful when controlling animation with React animation libraries. It inherits from Popover.Portal.",
      type: "boolean",
    },
    side: {
      description:
        "The preferred side of the anchor to render against when open. Will be reversed when collisions occur and avoidCollisions is enabled.",
      options: ["top", "right", "bottom", "left"],
      control: { type: "radio" },
      defaultValue: "bottom",
    },
    sideOffset: {
      description: "The distance in pixels from the anchor.",
      type: "number",
      defaultValue: 0,
    },
    align: {
      description: "The preferred alignment against the anchor. May change when collisions occur.",
      options: ["start", "center", "end"],
      control: { type: "radio" },
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
    },
    collisionPadding: {
      description:
        "The distance in pixels from the boundary edges where collision detection should occur. Accepts a number (same for all sides), or a partial padding object, for example: { top: 20, left: 20 }.",
      type: "number",
      defaultValue: 0,
    },
    arrowPadding: {
      description:
        "The padding between the arrow and the edges of the content. If your content has border-radius, this will prevent it from overflowing the corners.",
      type: "number",
      defaultValue: 0,
    },
    sticky: {
      description:
        "The sticky behavior on the align axis. 'partial' will keep the content in the boundary as long as the trigger is at least partially in the boundary whilst 'always' will keep the content in the boundary regardless.",
      options: ["partial", "always"],
      control: { type: "radio" },
      defaultValue: "partial",
    },
    hideWhenDetached: {
      description: "Whether to hide the content when the trigger becomes fully occluded.",
      type: "boolean",
      defaultValue: false,
    },
  },
} satisfies Meta<typeof PopoverContentComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * The component that pops out when the popover is open.
 */
export const PopoverContent: Story = {
  render: (args) => {
    return (
      <div className="flex w-full justify-center">
        <PopoverComponent>
          <PopoverTrigger>Click Me!</PopoverTrigger>
          <PopoverContentComponent {...args} side="bottom">
            <div className="bg-white shadow-md rounded-lg w-80 border overflow-clip">
              <div className="py-2 px-4 border-b flex items-center justify-between">
                <h3 className="text-lg font-bold text-gray-700">Notifications</h3>
                <a href="#" className="text-blue-500 text-xs">
                  Mark all as read
                </a>
              </div>
              <ul>
                <li role="button" className="px-4 py-3 border-b hover:bg-gray-50">
                  <div className="flex items-start gap-2">
                    <div className="h-12 w-12 rounded-full shrink-0 flex items-center justify-center text-white overflow-clip">
                      <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" />
                    </div>
                    <div>
                      <h3 className="text-gray-700 text-sm">
                        <strong>Carla Smith</strong> wants to edit <strong>UI Design</strong>
                      </h3>
                      <p className="text-xs text-gray-400">5 mins ago</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-2 pl-14">
                    <button className="text-sm bg-blue-500 text-white px-2 py-1 rounded">Accept</button>
                    <button className="text-sm bg-white shadow-sm px-2 py-1 border rounded">Deny</button>
                  </div>
                </li>

                <li role="button" className="px-4 py-3 border-b hover:bg-gray-50">
                  <div className="flex items-start gap-2">
                    <div className="h-12 w-12 rounded-full overflow-clip shrink-0 flex items-center justify-center text-white">
                      <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" />
                    </div>
                    <div>
                      <h3 className="text-gray-700 text-sm">
                        <strong>Robert Fox</strong> added file to <strong>Dark Mode</strong>
                      </h3>
                      <p className="text-xs text-gray-400">5 mins ago</p>
                    </div>
                  </div>
                  <div className="flex items-center mt-2 pl-12">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-10 h-10 text-indigo-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                      />
                    </svg>

                    <div>
                      <h3 className="text-sm text-gray-700 font-medium">Dark_Mode_v102.fig</h3>
                      <p className="text-xs text-gray-400">1.2 MB</p>
                    </div>
                  </div>
                </li>

                <li role="button" className="px-4 py-3 border-b hover:bg-gray-50">
                  <div className="flex items-start gap-2">
                    <div className="h-12 w-12 bg-rose-500 rounded-full shrink-0 flex items-center justify-center text-white">
                      JW
                    </div>
                    <div>
                      <h3 className="text-gray-700 text-sm">
                        <strong>Jenny Wilson</strong> completed <strong>Create new component</strong>
                      </h3>
                      <p className="text-xs text-gray-400">1:12 pm</p>
                    </div>
                  </div>
                </li>

                <li role="button" className="px-4 py-3 border-b hover:bg-gray-50">
                  <div className="flex items-start gap-2">
                    <div className="h-12 w-12 bg-amber-500 rounded-full shrink-0 flex items-center justify-center text-white">
                      JJ
                    </div>
                    <div>
                      <h3 className="text-gray-700 text-sm">
                        <strong>Jacob Jones</strong> mentioned you in <strong>Rewrite button component</strong>
                      </h3>
                      <p className="text-xs text-gray-400">2:48 pm</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </PopoverContentComponent>
        </PopoverComponent>
      </div>
    );
  },
};
