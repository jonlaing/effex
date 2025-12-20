[**effex-monorepo**](../../../README.md)

***

[effex-monorepo](../../../modules.md) / [dom/src](../README.md) / sequence

# Function: sequence()

> **sequence**\<`A`, `E`, `R`\>(...`effects`): `Effect`\<`A`[], `E`, `R`\>

Defined in: [packages/dom/src/Animation/index.ts:117](https://github.com/jonlaing/effex/blob/54ecd92e6ce2cfbeee604b727471aa18d6829626/packages/dom/src/Animation/index.ts#L117)

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
