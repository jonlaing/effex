[**effex-monorepo**](../../../README.md)

***

[effex-monorepo](../../../modules.md) / [dom/src](../README.md) / delay

# Function: delay()

> **delay**\<`A`, `E`, `R`\>(`ms`, `effect`): `Effect`\<`A`, `E`, `R`\>

Defined in: [packages/dom/src/Animation/index.ts:101](https://github.com/jonlaing/effex/blob/54ecd92e6ce2cfbeee604b727471aa18d6829626/packages/dom/src/Animation/index.ts#L101)

Add a delay before running an effect.

## Type Parameters

### A

`A`

### E

`E`

### R

`R`

## Parameters

### ms

`number`

### effect

`Effect`\<`A`, `E`, `R`\>

## Returns

`Effect`\<`A`, `E`, `R`\>

## Example

```ts
yield* delay(200, runEnterAnimation(element, options))
```
