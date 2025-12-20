[**effex-monorepo**](../../../README.md)

***

[effex-monorepo](../../../modules.md) / [dom/src](../README.md) / sequence

# Function: sequence()

> **sequence**\<`A`, `E`, `R`\>(...`effects`): `Effect`\<`A`[], `E`, `R`\>

Defined in: [packages/dom/src/Animation/index.ts:117](https://github.com/jonlaing/effex/blob/6a1b9c8b38e226609ce7e1a1f5173769b8aad981/packages/dom/src/Animation/index.ts#L117)

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
