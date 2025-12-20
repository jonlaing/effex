[**effex-monorepo**](../../../README.md)

***

[effex-monorepo](../../../modules.md) / [core/src](../README.md) / error

# Function: error()

> **error**\<`N`, `E`, `R1`, `E2`, `R2`\>(`tryRender`, `catchRender`): [`Element`](../type-aliases/Element.md)\<`N`, `E2`, `R1` \| `R2`\>

Defined in: [packages/core/src/Boundary.ts:321](https://github.com/jonlaing/effex/blob/6a1b9c8b38e226609ce7e1a1f5173769b8aad981/packages/core/src/Boundary.ts#L321)

Error boundary that catches errors from a render function and displays a fallback element.

## Type Parameters

### N

`N`

### E

`E`

### R1

`R1` = `never`

### E2

`E2` = `never`

### R2

`R2` = `never`

## Parameters

### tryRender

() => `Effect`\<`N`, `E`, `Scope` \| `R1`\>

Function that may fail with an error

### catchRender

(`error`) => [`Element`](../type-aliases/Element.md)\<`N`, `E2`, `R2`\>

Function to render the error fallback

## Returns

[`Element`](../type-aliases/Element.md)\<`N`, `E2`, `R1` \| `R2`\>

## Example

```ts
Boundary.error(
  () => riskyComponent(),
  (error) => div(["Something went wrong: ", String(error)])
)
```
