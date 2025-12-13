import type { Effect } from "effect";
import type { Signal } from "@core/Signal";

/**
 * Props for Switch component.
 */
export interface SwitchProps {
  /**
   * The controlled checked state. Pass a Signal for controlled mode.
   */
  readonly checked?: Signal<boolean>;

  /**
   * The default checked state for uncontrolled mode.
   * @default false
   */
  readonly defaultChecked?: boolean;

  /**
   * Callback fired when the checked state changes.
   */
  readonly onCheckedChange?: (checked: boolean) => Effect.Effect<void>;

  /**
   * Whether the switch is disabled.
   * @default false
   */
  readonly disabled?: boolean;

  /**
   * Whether the switch is required in a form context.
   * @default false
   */
  readonly required?: boolean;

  /**
   * The name attribute for form submission.
   */
  readonly name?: string;

  /**
   * The value attribute for form submission.
   * @default "on"
   */
  readonly value?: string;

  /**
   * CSS class name(s) for styling.
   */
  readonly class?: string;
}
