[**@jonlaing/effect-ui**](../README.md)

***

[@jonlaing/effect-ui](../globals.md) / match

# Function: match()

> **match**\<`A`, `E`, `E2`\>(`value`, `cases`, `fallback?`): [`Element`](../type-aliases/Element.md)\<`E` \| `E2`\>

Defined in: [src/dom/Control.ts:208](https://github.com/jonlaing/effect-ui/blob/6787207a59cbb4387cd33d98f63150448eeca508/src/dom/Control.ts#L208)

Pattern match on a reactive value and render the corresponding element.

## Type Parameters

### A

`A`

### E

`E` = `never`

### E2

`E2` = `never`

## Parameters

### value

[`Readable`](../interfaces/Readable.md)\<`A`\>

Reactive value to match against

### cases

readonly [`MatchCase`](../interfaces/MatchCase.md)\<`A`, `E`\>[]

Array of pattern-render pairs

### fallback?

() => [`Element`](../type-aliases/Element.md)\<`E2`\>

Optional fallback if no pattern matches

## Returns

[`Element`](../type-aliases/Element.md)\<`E` \| `E2`\>

## Example

```ts
type Status = "loading" | "success" | "error"
const status = yield* Signal.make<Status>("loading")

match(status, [
  { pattern: "loading", render: () => div(["Loading..."]) },
  { pattern: "success", render: () => div(["Done!"]) },
  { pattern: "error", render: () => div(["Failed"]) },
])
```
