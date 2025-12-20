[**effex-monorepo**](../../../README.md)

***

[effex-monorepo](../../../modules.md) / [primitives/src](../README.md) / Progress

# Variable: Progress

> `const` **Progress**: `object`

Defined in: [packages/primitives/src/primitives/Progress/Progress.ts:183](https://github.com/jonlaing/effex/blob/6a1b9c8b38e226609ce7e1a1f5173769b8aad981/packages/primitives/src/primitives/Progress/Progress.ts#L183)

Headless Progress primitive for building progress bars.

Features:
- Determinate and indeterminate states
- Full ARIA accessibility support
- Custom value labels for screen readers
- Reactive value updates

## Type Declaration

### Indicator

> **Indicator**: [`Component`](../../../dom/src/type-aliases/Component.md)\<`"ProgressIndicator"`, [`ProgressIndicatorProps`](../interfaces/ProgressIndicatorProps.md), `never`, [`ProgressCtx`](../classes/ProgressCtx.md)\>

### Root()

> **Root**: (`props`, `children`) => [`Element`](../../../dom/src/type-aliases/Element.md)

#### Parameters

##### props

[`ProgressRootProps`](../interfaces/ProgressRootProps.md)

##### children

[`Child`](../../../dom/src/type-aliases/Child.md)\<`never`, [`ProgressCtx`](../classes/ProgressCtx.md)\> | readonly [`Child`](../../../dom/src/type-aliases/Child.md)\<`never`, [`ProgressCtx`](../classes/ProgressCtx.md)\>[]

#### Returns

[`Element`](../../../dom/src/type-aliases/Element.md)

## Example

```ts
// Determinate progress
Progress.Root({ value: 60, max: 100 }, [
  Progress.Indicator({})
])

// Indeterminate (loading)
Progress.Root({ value: null }, [
  Progress.Indicator({})
])

// With reactive value
const progress = yield* Signal.make(0)
Progress.Root({ value: progress }, [
  Progress.Indicator({})
])
```
