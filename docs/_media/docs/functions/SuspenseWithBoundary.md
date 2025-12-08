[**@jonlaing/effect-ui**](../README.md)

***

[@jonlaing/effect-ui](../globals.md) / SuspenseWithBoundary

# Function: SuspenseWithBoundary()

> **SuspenseWithBoundary**\<`E`, `E2`, `E3`\>(`asyncRender`, `fallbackRender`, `catchRender`): [`Element`](../type-aliases/Element.md)\<`E2` \| `E3`\>

Defined in: [src/dom/Control.ts:87](https://github.com/jonlaing/effect-ui/blob/6787207a59cbb4387cd33d98f63150448eeca508/src/dom/Control.ts#L87)

Combines Suspense with ErrorBoundary for async renders that may fail.

## Type Parameters

### E

`E`

### E2

`E2` = `never`

### E3

`E3` = `never`

## Parameters

### asyncRender

() => `Effect`\<`HTMLElement`, `E`, `Scope`\>

Async function that may fail

### fallbackRender

() => [`Element`](../type-aliases/Element.md)\<`E2`\>

Function to render the loading state

### catchRender

(`error`) => [`Element`](../type-aliases/Element.md)\<`E3`\>

Function to render the error state

## Returns

[`Element`](../type-aliases/Element.md)\<`E2` \| `E3`\>

## Example

```ts
SuspenseWithBoundary(
  () => fetchAndRenderData(),
  () => div(["Loading..."]),
  (error) => div(["Failed to load: ", String(error)])
)
```
