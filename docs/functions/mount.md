[**@jonlaing/effect-ui**](../README.md)

***

[@jonlaing/effect-ui](../globals.md) / mount

# Function: mount()

> **mount**(`element`, `container`): `Effect`\<`void`, `never`, `Scope`\>

Defined in: [src/dom/Mount.ts:44](https://github.com/jonlaing/effect-ui/blob/6787207a59cbb4387cd33d98f63150448eeca508/src/dom/Mount.ts#L44)

Mount an Element into a DOM container. Automatically cleans up when the scope closes.

The element must have no errors (Element<never>). If your component can fail,
handle all errors before mounting using ErrorBoundary or Effect.catchAll.

## Parameters

### element

[`Element`](../type-aliases/Element.md)\<`never`\>

The Element to mount (must be error-free)

### container

`HTMLElement`

The DOM container to mount into

## Returns

`Effect`\<`void`, `never`, `Scope`\>

## Examples

```ts
const app = div([
  h1(["Hello, Effect UI!"])
])

// Mount the app and run it
Effect.runPromise(
  Effect.scoped(
    mount(app, document.getElementById("root")!)
  )
)
```

```ts
// Handle errors before mounting
const riskyApp = fetchAndRenderData() // Element<FetchError>

const safeApp = ErrorBoundary(
  () => riskyApp,
  (error) => div(["Failed to load: ", String(error)])
) // Element<never>

Effect.runPromise(
  Effect.scoped(
    mount(safeApp, document.getElementById("root")!)
  )
)
```
