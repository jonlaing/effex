[**effex-monorepo**](../../../README.md)

***

[effex-monorepo](../../../modules.md) / [dom/src](../README.md) / stagger

# Function: stagger()

> **stagger**(`delayMs`): [`StaggerFunction`](../type-aliases/StaggerFunction.md)

Defined in: [packages/dom/src/Animation/index.ts:34](https://github.com/jonlaing/effex/blob/6a1b9c8b38e226609ce7e1a1f5173769b8aad981/packages/dom/src/Animation/index.ts#L34)

Create a linear stagger function with fixed delay between items.

## Parameters

### delayMs

`number`

## Returns

[`StaggerFunction`](../type-aliases/StaggerFunction.md)

## Example

```ts
each(items, keyFn, render, {
  animate: {
    enter: "fade-in",
    stagger: stagger(50)  // 0ms, 50ms, 100ms, 150ms...
  }
})
```
