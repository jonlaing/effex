[**effex-monorepo**](../../../README.md)

***

[effex-monorepo](../../../modules.md) / [primitives/src](../README.md) / Checkbox

# Variable: Checkbox

> `const` **Checkbox**: [`Component`](../../../dom/src/type-aliases/Component.md)\<`"Checkbox"`, [`CheckboxProps`](../interfaces/CheckboxProps.md), `never`, `Scope`\>

Defined in: [packages/primitives/src/primitives/Checkbox/Checkbox.ts:86](https://github.com/jonlaing/effex/blob/54ecd92e6ce2cfbeee604b727471aa18d6829626/packages/primitives/src/primitives/Checkbox/Checkbox.ts#L86)

A checkbox control with support for checked, unchecked, and indeterminate states.

## Example

```ts
// Uncontrolled
Checkbox({ class: "checkbox" })

// Controlled
const accepted = yield* Signal.make<CheckedState>(false)
Checkbox({ checked: accepted, class: "checkbox" })

// Indeterminate (for "select all" patterns)
const selectAll = yield* Signal.make<CheckedState>("indeterminate")
Checkbox({ checked: selectAll, class: "checkbox" })

// In a form
Checkbox({ name: "terms", required: true })
```
