import { FunctionComponent, forwardRef, useContext, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PopoverContentProps } from "../utils/props";
import { PopoverContext } from "../utils/context";
import { variants } from "../utils/animation";
import * as PopoverPrimitive from "@radix-ui/react-popover";

export const PopoverTrigger = PopoverPrimitive.Trigger;

export const Popover: FunctionComponent<Omit<PopoverPrimitive.PopoverProps, "onOpenChange">> = ({
  children,
  defaultOpen,
  modal,
  open = false,
}) => {
  const [isOpen, setIsOpen] = useState(open);

  return (
    <PopoverPrimitive.Root defaultOpen={defaultOpen} modal={modal} open={isOpen} onOpenChange={setIsOpen}>
      <PopoverContext.Provider value={{ isOpen }}>{children}</PopoverContext.Provider>
    </PopoverPrimitive.Root>
  );
};

export const PopoverContent = forwardRef<React.ElementRef<typeof PopoverPrimitive.Content>, PopoverContentProps>(
  ({ container, children, side, ...props }, ref) => {
    const { isOpen } = useContext(PopoverContext);

    return (
      <AnimatePresence>
        {isOpen && (
          <PopoverPrimitive.Portal container={container} forceMount>
            <PopoverPrimitive.Content ref={ref} side={side} {...props} asChild>
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ duration: 0.2 }}
                variants={variants(side)}
              >
                {children}
              </motion.div>
            </PopoverPrimitive.Content>
          </PopoverPrimitive.Portal>
        )}
      </AnimatePresence>
    );
  }
);

Popover.displayName = PopoverPrimitive.Popover.displayName;

PopoverContent.displayName = PopoverPrimitive.Content.displayName;
