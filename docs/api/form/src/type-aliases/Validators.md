[**effex-monorepo**](../../../README.md)

***

[effex-monorepo](../../../modules.md) / [form/src](../README.md) / Validators

# Type Alias: Validators\<T, E, R\>

> **Validators**\<`T`, `E`, `R`\> = `{ readonly [K in keyof T]?: AsyncValidator<T[K], E, R> }`

Defined in: [packages/form/src/form/types.ts:71](https://github.com/jonlaing/effex/blob/6a1b9c8b38e226609ce7e1a1f5173769b8aad981/packages/form/src/form/types.ts#L71)

Validators configuration for a form.
Maps field names to async validator functions.

## Type Parameters

### T

`T`

### E

`E` = `never`

### R

`R` = `never`
