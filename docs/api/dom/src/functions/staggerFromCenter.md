[**effex-monorepo**](../../../README.md)

***

[effex-monorepo](../../../modules.md) / [dom/src](../README.md) / staggerFromCenter

# Function: staggerFromCenter()

> **staggerFromCenter**(`delayMs`): [`StaggerFunction`](../type-aliases/StaggerFunction.md)

Defined in: [packages/dom/src/Animation/index.ts:52](https://github.com/jonlaing/effex/blob/6a1b9c8b38e226609ce7e1a1f5173769b8aad981/packages/dom/src/Animation/index.ts#L52)

Create a stagger function that animates from the center outward.
Items in the middle animate first, edges animate last.

## Parameters

### delayMs

`number`

## Returns

[`StaggerFunction`](../type-aliases/StaggerFunction.md)

## Example

```ts
each(items, keyFn, render, {
  animate: {
    enter: "scale-in",
    stagger: staggerFromCenter(30)
  }
})
```
