import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { ReactNode } from "react";
export type TooltipProps = React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> & Omit<React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Provider>, "delayDuration"> & React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Root> & React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Portal> & React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Trigger> & {
    providerDelay?: number;
    content?: string;
    children?: ReactNode | ReactNode[];
    arrow?: {
        width: number;
        height: number;
    };
};
//# sourceMappingURL=props.d.ts.map