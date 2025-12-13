import { Effect } from "effect";
import { Signal } from "@core/Signal";
import { component } from "@dom/Component";
import { $ } from "@dom/Element/Element";
import type { SwitchProps } from "./types";

/**
 * A control that toggles between on and off states.
 *
 * Uses `role="switch"` for proper accessibility semantics.
 * Renders a button with a thumb element for styling.
 *
 * @example
 * ```ts
 * // Uncontrolled
 * Switch({ defaultChecked: false, class: "switch" })
 *
 * // Controlled
 * const enabled = yield* Signal.make(false)
 * Switch({ checked: enabled, class: "switch" })
 *
 * // With callback
 * Switch({
 *   onCheckedChange: (checked) => Effect.log(`Switched: ${checked}`)
 * })
 *
 * // In a form
 * Switch({ name: "notifications", value: "enabled" })
 * ```
 */
export const Switch = component("Switch", (props: SwitchProps) =>
  Effect.gen(function* () {
    const checked: Signal<boolean> = props.checked
      ? props.checked
      : yield* Signal.make(props.defaultChecked ?? false);

    const handleClick = () =>
      Effect.gen(function* () {
        if (props.disabled) return;

        const newChecked = !(yield* checked.get);
        yield* checked.set(newChecked);

        if (props.onCheckedChange) {
          yield* props.onCheckedChange(newChecked);
        }
      });

    const dataState = checked.map((c) => (c ? "checked" : "unchecked"));
    const ariaChecked = checked.map((c) => (c ? "true" : "false"));
    const dataDisabled = props.disabled ? "" : undefined;

    // The thumb is a visual element inside the switch
    const thumb = $.span({ "data-switch-thumb": "" });

    return yield* $.button(
      {
        type: "button",
        role: "switch",
        class: props.class,
        disabled: props.disabled,
        "aria-checked": ariaChecked,
        "aria-required": props.required ? "true" : undefined,
        "data-state": dataState,
        "data-disabled": dataDisabled,
        name: props.name,
        value: props.value ?? "on",
        onClick: handleClick,
      },
      [thumb],
    );
  }),
);
