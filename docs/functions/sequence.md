[**@jonlaing/effect-ui**](../README.md)

***

[@jonlaing/effect-ui](../globals.md) / sequence

# Function: sequence()

> **sequence**\<`A`, `E`, `R`\>(...`effects`): `Effect`\<`A`[], `E`, `R`\>

Defined in: [src/dom/Animation/index.ts:119](https://github.com/jonlaing/effect-ui/blob/734f667177209887be58fbcdeaf94e3632c47f02/src/dom/Animation/index.ts#L119)

Run multiple animation effects in sequence.

## Type Parameters

### A

`A`

### E

`E`

### R

`R`

## Parameters

### effects

...`Effect`\<`A`, `E`, `R`\>[]

## Returns

`Effect`\<`A`[], `E`, `R`\>

## Example

```ts
yield* sequence(
  runExitAnimation(oldElement, options),
  runEnterAnimation(newElement, options)
)
```
