import type { Element } from "./Element";

/**
 * A named component function that renders props to an Element.
 * @template Name - The component's tag name for identification
 * @template Props - The props type accepted by the component
 * @template E - The error type that can be produced by the component
 */
export interface Component<Name extends string, Props = object, E = never> {
  /** The component's identifying tag name */
  readonly _tag: Name;
  (props: Props): Element<E>;
}

/**
 * Create a named component from a render function.
 * @param name - Unique name for the component (useful for debugging)
 * @param render - Function that renders props to an Element
 *
 * @example
 * ```ts
 * interface ButtonProps {
 *   label: string
 *   onClick: () => void
 * }
 *
 * const Button = component("Button", (props: ButtonProps) =>
 *   button({ onClick: props.onClick }, [props.label])
 * )
 *
 * // Usage
 * Button({ label: "Click me", onClick: () => console.log("clicked") })
 * ```
 *
 * @example
 * ```ts
 * // Component that can fail
 * class UserNotFoundError { readonly _tag = "UserNotFoundError" }
 *
 * const UserProfile = component("UserProfile", (props: { userId: string }) =>
 *   Effect.gen(function* () {
 *     const user = yield* fetchUser(props.userId)
 *     return yield* div([user.name])
 *   })
 * )
 * // Type: Component<"UserProfile", { userId: string }, UserNotFoundError>
 * ```
 */
export const component = <Name extends string, Props = object, E = never>(
  name: Name,
  render: (props: Props) => Element<E>,
): Component<Name, Props, E> => {
  const fn = (props: Props): Element<E> => render(props);

  return Object.assign(fn, { _tag: name }) as Component<Name, Props, E>;
};
