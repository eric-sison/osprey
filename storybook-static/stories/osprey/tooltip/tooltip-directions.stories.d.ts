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
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Directions: {
    render: (args: Story) => import("react/jsx-runtime").JSX.Element;
};
//# sourceMappingURL=tooltip-directions.stories.d.ts.map