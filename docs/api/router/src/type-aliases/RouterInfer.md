[**effex-monorepo**](../../../README.md)

***

[effex-monorepo](../../../modules.md) / [router/src](../README.md) / RouterInfer

# Type Alias: RouterInfer\<Routes\>

> **RouterInfer**\<`Routes`\> = [`RouterType`](../interfaces/RouterType.md)\<`Routes`\>

Defined in: [packages/router/src/router/Router.ts:250](https://github.com/jonlaing/effex/blob/6a1b9c8b38e226609ce7e1a1f5173769b8aad981/packages/router/src/router/Router.ts#L250)

Infer the Router type from a routes record.
Use this to create typed router contexts.

## Type Parameters

### Routes

`Routes` *extends* `Record`\<`string`, [`RouteType`](../interfaces/RouteType.md)\<`string`, `Schema.Schema.AnyNoContext`\>\>

## Example

```ts
const routes = {
  home: Route.make("/"),
  user: Route.make("/users/:id", { params: Schema.Struct({ id: Schema.String }) }),
}

// Infer the router type
type AppRouter = Router.Infer<typeof routes>

// Create a typed context for your app
class AppRouterContext extends Context.Tag("AppRouterContext")<
  AppRouterContext,
  AppRouter
>() {}

// Now you can yield the typed router from context
const router = yield* AppRouterContext
router.currentRoute // Readable<"home" | "user" | null>
router.routes.user.params // Readable<{ id: string } | null>
```
