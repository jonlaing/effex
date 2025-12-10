[**@jonlaing/effect-ui**](../README.md)

***

[@jonlaing/effect-ui](../globals.md) / Validators

# Type Alias: Validators\<T, E, R\>

> **Validators**\<`T`, `E`, `R`\> = `{ readonly [K in keyof T]?: AsyncValidator<T[K], E, R> }`

Defined in: [src/form/types.ts:72](https://github.com/jonlaing/effect-ui/blob/734f667177209887be58fbcdeaf94e3632c47f02/src/form/types.ts#L72)

Validators configuration for a form.
Maps field names to async validator functions.

## Type Parameters

### T

`T`

### E

`E` = `never`

### R

`R` = `never`
