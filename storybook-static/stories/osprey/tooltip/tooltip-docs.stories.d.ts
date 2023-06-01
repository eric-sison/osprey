import type { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: import("react").ForwardRefExoticComponent<Omit<import("@radix-ui/react-tooltip").TooltipContentProps & import("react").RefAttributes<HTMLDivElement>, "ref"> & Omit<import("@radix-ui/react-tooltip").TooltipProviderProps, "delayDuration"> & import("@radix-ui/react-tooltip").TooltipProps & import("@radix-ui/react-tooltip").TooltipPortalProps & Omit<import("@radix-ui/react-tooltip").TooltipTriggerProps & import("react").RefAttributes<HTMLButtonElement>, "ref"> & {
        providerDelay?: number | undefined;
        content?: string | undefined;
        children?: import("react").ReactNode | import("react").ReactNode[];
        arrow?: {
            width: number;
            height: number;
        } | undefined;
    } & import("react").RefAttributes<HTMLDivElement>>;
    parameters: {
        layout: string;
    };
    argTypes: {
        children: {
            description: string;
            control: boolean;
        };
        content: {
            description: string;
            type: "string";
        };
        providerDelay: {
            description: string;
            type: "number";
            defaultValue: number;
        };
        skipDelayDuration: {
            description: string;
            type: "number";
            defaultValue: number;
        };
        disableHoverableContent: {
            description: string;
            type: "boolean";
        };
        defaultOpen: {
            description: string;
            type: "boolean";
        };
        open: {
            description: string;
            type: "boolean";
        };
        onOpenChange: {
            description: string;
            type: "function";
        };
        delayDuration: {
            description: string;
            type: "number";
            defaultValue: number;
        };
        asChild: {
            description: string;
            type: "boolean";
            defaultValue: boolean;
        };
        forceMount: {
            description: string;
            type: "boolean";
        };
        container: {
            description: string;
        };
        onEscapeKeyDown: {
            description: string;
            type: "function";
        };
        onPointerDown: {
            description: string;
            type: "function";
        };
        side: {
            description: string;
            options: string[];
            control: {
                type: string;
            };
            defaultValue: string;
        };
        sideOffset: {
            description: string;
            type: "number";
            defaultValue: number;
        };
        align: {
            description: string;
            options: string[];
            control: {
                type: string;
            };
            type: "string";
            defaultValue: string;
        };
        alignOffset: {
            description: string;
            type: "number";
            defaultValue: number;
        };
        avoidCollisions: {
            description: string;
            type: "boolean";
            defaultValue: boolean;
        };
        collisionBoundary: {
            description: string;
            type: "symbol";
            defaultValue: never[];
        };
        collisionPadding: {
            description: string;
        };
        arrowPadding: {
            description: string;
            type: "number";
        };
        sticky: {
            description: string;
            options: string[];
            control: {
                type: string;
            };
            defaultValue: string;
        };
        hideWhenDetached: {
            description: string;
            type: "boolean";
            defaultValue: boolean;
        };
        arrow: {
            description: string;
        };
    };
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
/**
 * A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.
 */
export declare const Default: Story;
//# sourceMappingURL=tooltip-docs.stories.d.ts.map