[**@jonlaing/effect-ui**](../README.md)

***

[@jonlaing/effect-ui](../globals.md) / AsyncValidator

# Type Alias: AsyncValidator()\<A, E, R\>

> **AsyncValidator**\<`A`, `E`, `R`\> = (`value`) => `Effect.Effect`\<readonly `string`[], `E`, `R`\>

Defined in: [src/form/types.ts:64](https://github.com/jonlaing/effect-ui/blob/734f667177209887be58fbcdeaf94e3632c47f02/src/form/types.ts#L64)

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
