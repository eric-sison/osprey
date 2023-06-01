import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import React from "react";
export declare const Tooltip: React.ForwardRefExoticComponent<Omit<TooltipPrimitive.TooltipContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & Omit<TooltipPrimitive.TooltipProviderProps, "delayDuration"> & TooltipPrimitive.TooltipProps & TooltipPrimitive.TooltipPortalProps & Omit<TooltipPrimitive.TooltipTriggerProps & React.RefAttributes<HTMLButtonElement>, "ref"> & {
    providerDelay?: number | undefined;
    content?: string | undefined;
    children?: React.ReactNode | React.ReactNode[];
    arrow?: {
        width: number;
        height: number;
    } | undefined;
} & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Tooltip.d.ts.map