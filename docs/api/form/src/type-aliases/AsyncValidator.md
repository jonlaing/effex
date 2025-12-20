[**effex-monorepo**](../../../README.md)

***

[effex-monorepo](../../../modules.md) / [form/src](../README.md) / AsyncValidator

# Type Alias: AsyncValidator()\<A, E, R\>

> **AsyncValidator**\<`A`, `E`, `R`\> = (`value`) => `Effect.Effect`\<readonly `string`[], `E`, `R`\>

Defined in: [packages/form/src/form/types.ts:63](https://github.com/jonlaing/effex/blob/6a1b9c8b38e226609ce7e1a1f5173769b8aad981/packages/form/src/form/types.ts#L63)

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
