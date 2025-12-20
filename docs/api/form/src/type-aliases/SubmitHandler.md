[**effex-monorepo**](../../../README.md)

***

[effex-monorepo](../../../modules.md) / [form/src](../README.md) / SubmitHandler

# Type Alias: SubmitHandler()\<T, E, R\>

> **SubmitHandler**\<`T`, `E`, `R`\> = (`values`) => `Effect.Effect`\<`void`, `E`, `R`\>

Defined in: [packages/form/src/form/types.ts:112](https://github.com/jonlaing/effex/blob/6a1b9c8b38e226609ce7e1a1f5173769b8aad981/packages/form/src/form/types.ts#L112)

Submit handler function type.

## Type Parameters

### T

`T`

The validated form data type

### E

`E` = `never`

The error type

### R

`R` = `never`

The requirements

## Parameters

### values

`T`

## Returns

`Effect.Effect`\<`void`, `E`, `R`\>
