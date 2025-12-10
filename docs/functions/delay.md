[**@jonlaing/effect-ui**](../README.md)

***

[@jonlaing/effect-ui](../globals.md) / delay

# Function: delay()

> **delay**\<`A`, `E`, `R`\>(`ms`, `effect`): `Effect`\<`A`, `E`, `R`\>

Defined in: [src/dom/Animation/index.ts:103](https://github.com/jonlaing/effect-ui/blob/734f667177209887be58fbcdeaf94e3632c47f02/src/dom/Animation/index.ts#L103)

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
