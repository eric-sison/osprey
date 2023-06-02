import { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { Tooltip } from "../../overlays/tooltip/view/Tooltip";
import { ButtonProps } from "../utils/props";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, asChild = false, tooltip, ...props }, ref) => {
    const ButtonSlot = asChild ? Slot : "button";

    return (
      <>
        {tooltip !== undefined ? (
          <Tooltip content={tooltip} sideOffset={2} arrow={{ width: 10, height: 5 }} asChild>
            <ButtonSlot
              ref={ref}
              {...props}
              className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
            >
              {children}
            </ButtonSlot>
          </Tooltip>
        ) : (
          <ButtonSlot className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
            {children}
          </ButtonSlot>
        )}
      </>
    );
  }
);

Button.displayName = "Button";
