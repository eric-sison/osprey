import type { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: import("react").ForwardRefExoticComponent<import("react").ButtonHTMLAttributes<HTMLButtonElement> & {
        asChild?: boolean | undefined;
        tooltip?: string | undefined;
    } & import("react").RefAttributes<HTMLButtonElement>>;
    parameters: {
        layout: string;
    };
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
//# sourceMappingURL=button.stories.d.ts.map