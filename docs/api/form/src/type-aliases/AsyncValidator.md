[**effex-monorepo**](../../../README.md)

***

[effex-monorepo](../../../modules.md) / [form/src](../README.md) / AsyncValidator

# Type Alias: AsyncValidator()\<A, E, R\>

> **AsyncValidator**\<`A`, `E`, `R`\> = (`value`) => `Effect.Effect`\<readonly `string`[], `E`, `R`\>

Defined in: [packages/form/src/form/types.ts:63](https://github.com/jonlaing/effex/blob/54ecd92e6ce2cfbeee604b727471aa18d6829626/packages/form/src/form/types.ts#L63)

Custom async validator function.
Returns an array of error messages (empty array means valid).

## Type Parameters

### A

`A`

### E

`E` = `never`

### R

`R` = `never`

## Parameters

### value

`A`

## Returns

`Effect.Effect`\<readonly `string`[], `E`, `R`\>
