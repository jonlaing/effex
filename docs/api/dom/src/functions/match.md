[**effex-monorepo**](../../../README.md)

***

[effex-monorepo](../../../modules.md) / [dom/src](../README.md) / match

# Function: match()

> **match**\<`A`, `E`, `R`, `E2`, `R2`\>(`value`, `config`): [`Element`](../type-aliases/Element.md)\<`E` \| `E2`, `R` \| `R2`\>

Defined in: [packages/dom/src/Control.ts:279](https://github.com/jonlaing/effex/blob/6a1b9c8b38e226609ce7e1a1f5173769b8aad981/packages/dom/src/Control.ts#L279)

Pattern match on a reactive value and render the corresponding element.

## Type Parameters

### A

`A`

### E

`E` = `never`

### R

`R` = `never`

### E2

`E2` = `never`

### R2

`R2` = `never`

## Parameters

### value

[`Readable`](../../../core/src/interfaces/Readable.md)\<`A`\>

Reactive value to match against

### config

[`MatchConfig`](../interfaces/MatchConfig.md)\<`A`, `E`, `R`, `E2`, `R2`\>

Configuration object with cases, optional fallback, container and animate

## Returns

[`Element`](../type-aliases/Element.md)\<`E` \| `E2`, `R` \| `R2`\>

## Examples

```ts
type Status = "loading" | "success" | "error"
const status = yield* Signal.make<Status>("loading")

match(status, {
  cases: [
    { pattern: "loading", render: () => $.div("Loading...") },
    { pattern: "success", render: () => $.div("Done!") },
    { pattern: "error", render: () => $.div("Failed") },
  ]
})
```

```ts
// With fallback and animations
match(status, {
  cases: [
    { pattern: "loading", render: () => Spinner() },
    { pattern: "success", render: () => SuccessMessage() },
  ],
  fallback: () => $.div("Unknown status"),
  animate: { enter: "fade-in", exit: "fade-out" }
})
```
