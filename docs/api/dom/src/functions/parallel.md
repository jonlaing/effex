[**effex-monorepo**](../../../README.md)

***

[effex-monorepo](../../../modules.md) / [dom/src](../README.md) / parallel

# Function: parallel()

> **parallel**\<`A`, `E`, `R`\>(...`effects`): `Effect`\<`A`[], `E`, `R`\>

Defined in: [packages/dom/src/Animation/index.ts:133](https://github.com/jonlaing/effex/blob/6a1b9c8b38e226609ce7e1a1f5173769b8aad981/packages/dom/src/Animation/index.ts#L133)

Run multiple animation effects in parallel.

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
yield* parallel(
  runExitAnimation(element1, options),
  runExitAnimation(element2, options),
  runExitAnimation(element3, options)
)
```
