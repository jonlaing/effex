/**
 * Calculate transform value for positioning and alignment.
 * Handles both:
 * 1. Side positioning - for top/left, shift by 100% so content doesn't cover trigger
 * 2. Alignment - center or end alignment along the cross axis
 */
export function getTransform(
  side: "top" | "bottom" | "left" | "right",
  align: "start" | "center" | "end",
): string {
  const isVertical = side === "top" || side === "bottom";

  let translateX = "0";
  let translateY = "0";

  // Handle side positioning - top/left need to shift by their own dimensions
  if (side === "top") {
    translateY = "-100%";
  } else if (side === "left") {
    translateX = "-100%";
  }

  // Handle alignment on the cross axis
  if (isVertical) {
    // Horizontal alignment for top/bottom sides
    switch (align) {
      case "center":
        translateX = "-50%";
        break;
      case "end":
        translateX = "-100%";
        break;
    }
  } else {
    // Vertical alignment for left/right sides
    switch (align) {
      case "center":
        translateY = "-50%";
        break;
      case "end":
        translateY = "-100%";
        break;
    }
  }

  if (translateX === "0" && translateY === "0") {
    return "none";
  }

  return `translate(${translateX}, ${translateY})`;
}
