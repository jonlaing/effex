[**@jonlaing/effect-ui**](../README.md)

***

[@jonlaing/effect-ui](../globals.md) / Suspense

# Function: Suspense()

> **Suspense**\<`E`\>(`asyncRender`, `fallbackRender`): [`Element`](../type-aliases/Element.md)\<`E`\>

Defined in: [src/dom/Control.ts:46](https://github.com/jonlaing/effect-ui/blob/6787207a59cbb4387cd33d98f63150448eeca508/src/dom/Control.ts#L46)

Renders a fallback while waiting for an async render to complete.

## Type Parameters

### E

`E` = `never`

## Parameters

### asyncRender

() => `Effect`\<`HTMLElement`, `never`, `Scope`\>

Async function that returns the final element

### fallbackRender

() => [`Element`](../type-aliases/Element.md)\<`E`\>

Function to render the loading state

## Returns

[`Element`](../type-aliases/Element.md)\<`E`\>

## Example

```ts
Suspense(
  () => fetchAndRenderUserProfile(userId),
  () => div(["Loading..."])
)
```
