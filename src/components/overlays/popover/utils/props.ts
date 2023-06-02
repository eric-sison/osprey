import { Portal, Content } from "@radix-ui/react-popover";

export type PopoverContentProps = Omit<React.ComponentPropsWithoutRef<typeof Content>, "asChild"> &
  Omit<React.ComponentPropsWithoutRef<typeof Portal>, "forceMount">;
