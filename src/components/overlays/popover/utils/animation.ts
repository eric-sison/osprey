export const variants = (side: "top" | "right" | "bottom" | "left" | undefined) => ({
  /**
   * animation values for when popup is visible
   */
  visible: { opacity: 1, y: 0, x: 0 },
  /**
   * animation values for when popup is hidden
   */
  hidden:
    // if side prop is top
    side === "top"
      ? { opacity: 0, y: 5, x: 0 }
      : // if side prop is right
      side === "right"
      ? { opacity: 0, y: 0, x: -5 }
      : // if side prop is bottom
      side === "bottom"
      ? { opacity: 0, y: -5, x: 0 }
      : // if side prop is left
        { opacity: 0, y: 0, x: 5 },
});
