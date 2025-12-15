/**
 * Calculate position for floating content relative to an anchor element.
 */
export function calculatePosition(
  anchorRect: DOMRect,
  side: "top" | "bottom" | "left" | "right",
  align: "start" | "center" | "end",
  sideOffset: number,
  alignOffset: number,
): { top: number; left: number } {
  let top = 0;
  let left = 0;

  // Calculate main axis position
  switch (side) {
    case "top":
      top = anchorRect.top - sideOffset;
      break;
    case "bottom":
      top = anchorRect.bottom + sideOffset;
      break;
    case "left":
      left = anchorRect.left - sideOffset;
      break;
    case "right":
      left = anchorRect.right + sideOffset;
      break;
  }

  // Calculate cross axis alignment
  if (side === "top" || side === "bottom") {
    switch (align) {
      case "start":
        left = anchorRect.left + alignOffset;
        break;
      case "center":
        left = anchorRect.left + anchorRect.width / 2 + alignOffset;
        break;
      case "end":
        left = anchorRect.right + alignOffset;
        break;
    }
  } else {
    // left/right sides
    switch (align) {
      case "start":
        top = anchorRect.top + alignOffset;
        break;
      case "center":
        top = anchorRect.top + anchorRect.height / 2 + alignOffset;
        break;
      case "end":
        top = anchorRect.bottom + alignOffset;
        break;
    }
  }

  return { top, left };
}
