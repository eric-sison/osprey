import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import React, { ReactNode, forwardRef } from "react";
// import { TooltipProps } from "../utils/props";

export type TooltipProps = React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> &
  Omit<React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Provider>, "delayDuration"> &
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Root> &
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Portal> &
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Trigger> & {
    providerDelay?: number;
    content?: string;
    children?: ReactNode | ReactNode[];
    arrow?: {
      width: number;
      height: number;
    };
  };

export const Tooltip = forwardRef<React.ElementRef<typeof TooltipPrimitive.Content>, TooltipProps>(
  (
    {
      providerDelay,
      disableHoverableContent,
      defaultOpen,
      open,
      onOpenChange,
      delayDuration,
      skipDelayDuration,
      children,
      asChild,
      forceMount,
      container,
      content,
      arrow,
      ...props
    },
    ref
  ) => {
    return (
      <TooltipPrimitive.Provider
        delayDuration={providerDelay}
        skipDelayDuration={skipDelayDuration}
        disableHoverableContent={disableHoverableContent}
      >
        <TooltipPrimitive.Root
          defaultOpen={defaultOpen}
          open={open}
          onOpenChange={onOpenChange}
          delayDuration={delayDuration}
          disableHoverableContent={disableHoverableContent}
        >
          <TooltipPrimitive.Trigger asChild={asChild}>{children}</TooltipPrimitive.Trigger>
          <TooltipPrimitive.Portal forceMount={forceMount} container={container}>
            <TooltipPrimitive.Content
              ref={ref}
              {...props}
              className="bg-gray-800/95 px-2 py-1 rounded z-20 dark:bg-gray-800/95"
              asChild={false}
            >
              <p className="text-xs text-gray-200 font-medium">{content}</p>
              {arrow && (
                <TooltipPrimitive.Arrow
                  className="fill-gray-800/95 dark:fill-gray-800/95"
                  width={arrow.width}
                  height={arrow.height}
                  asChild={false}
                />
              )}
            </TooltipPrimitive.Content>
          </TooltipPrimitive.Portal>
        </TooltipPrimitive.Root>
      </TooltipPrimitive.Provider>
    );
  }
);

Tooltip.displayName = TooltipPrimitive.Tooltip.displayName;
