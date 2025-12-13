import type { Effect } from "effect";
import type { Signal } from "@core/Signal";

/**
 * Checkbox state - can be checked, unchecked, or indeterminate.
 */
export type CheckedState = boolean | "indeterminate";

/**
 * Props for Checkbox component.
 */
export interface CheckboxProps {
  /**
   * The id attribute for the checkbox button.
   */
  readonly id?: string;

  /**
   * The controlled checked state. Pass a Signal for controlled mode.
   */
  readonly checked?: Signal<CheckedState>;

  /**
   * The default checked state for uncontrolled mode.
   * @default false
   */
  readonly defaultChecked?: CheckedState;

  /**
   * Callback fired when the checked state changes.
   */
  readonly onCheckedChange?: (checked: CheckedState) => Effect.Effect<void>;

  /**
   * Whether the checkbox is disabled.
   * @default false
   */
  readonly disabled?: boolean;

  /**
   * Whether the checkbox is required in a form context.
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
