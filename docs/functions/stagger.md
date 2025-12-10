[**@jonlaing/effect-ui**](../README.md)

***

[@jonlaing/effect-ui](../globals.md) / stagger

# Function: stagger()

> **stagger**(`delayMs`): [`StaggerFunction`](../type-aliases/StaggerFunction.md)

Defined in: [src/dom/Animation/index.ts:36](https://github.com/jonlaing/effect-ui/blob/734f667177209887be58fbcdeaf94e3632c47f02/src/dom/Animation/index.ts#L36)

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
