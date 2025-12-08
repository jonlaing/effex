[**@jonlaing/effect-ui**](../README.md)

***

[@jonlaing/effect-ui](../globals.md) / ErrorBoundary

# Function: ErrorBoundary()

> **ErrorBoundary**\<`E`, `E2`\>(`tryRender`, `catchRender`): [`Element`](../type-aliases/Element.md)\<`E2`\>

Defined in: [src/dom/Control.ts:19](https://github.com/jonlaing/effect-ui/blob/6787207a59cbb4387cd33d98f63150448eeca508/src/dom/Control.ts#L19)

Catches errors from a render function and displays a fallback element.

## Type Parameters

### E

`E`

### E2

`E2` = `never`

## Parameters

### tryRender

() => `Effect`\<`HTMLElement`, `E`, `Scope`\>

Function that may fail with an error

### catchRender

(`error`) => [`Element`](../type-aliases/Element.md)\<`E2`\>

Function to render the error fallback

## Returns

[`Element`](../type-aliases/Element.md)\<`E2`\>

## Example

```ts
ErrorBoundary(
  () => riskyComponent(),
  (error) => div(["Something went wrong: ", String(error)])
)
```
