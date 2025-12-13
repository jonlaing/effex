import type { Effect } from "effect";
import type { Signal } from "@core/Signal";

/**
 * Props for Toggle.Root component.
 */
export interface ToggleProps {
  /**
   * The id attribute for the toggle button.
   */
  readonly id?: string;

  /**
   * The controlled pressed state. Pass a Signal for controlled mode.
   */
  readonly pressed?: Signal<boolean>;

  /**
   * The default pressed state for uncontrolled mode.
   * @default false
   */
  readonly defaultPressed?: boolean;

  /**
   * Callback fired when the pressed state changes.
   */
  readonly onPressedChange?: (pressed: boolean) => Effect.Effect<void>;

  /**
   * Whether the toggle is disabled.
   * @default false
   */
  readonly disabled?: boolean;

  /**
   * CSS class name(s) for styling.
   */
  readonly class?: string;
}
