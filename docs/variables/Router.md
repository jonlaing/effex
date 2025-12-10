[**@jonlaing/effect-ui**](../README.md)

***

[@jonlaing/effect-ui](../globals.md) / Router

# Variable: Router

> `const` **Router**: `object`

Defined in: [src/router/Router.ts:257](https://github.com/jonlaing/effect-ui/blob/734f667177209887be58fbcdeaf94e3632c47f02/src/router/Router.ts#L257)

Router module namespace.

## Type Declaration

### make()

> **make**: \<`Routes`\>(`routes`, `options?`) => `Effect`\<[`RouterType`](../interfaces/RouterType.md)\<`Routes`\>, `never`, `Scope`\>

Create a Router from a record of routes.

#### Type Parameters

##### Routes

`Routes` *extends* `Record`\<`string`, [`RouteType`](../interfaces/RouteType.md)\<`string`, `AnyNoContext`\>\>

#### Parameters

##### routes

`Routes`

A record mapping route names to Route definitions

##### options?

[`RouterOptions`](../interfaces/RouterOptions.md)

Optional router configuration

#### Returns

`Effect`\<[`RouterType`](../interfaces/RouterType.md)\<`Routes`\>, `never`, `Scope`\>

#### Example

```ts
const HomeRoute = Route.make("/")
const UserRoute = Route.make("/users/:id", {
  params: Schema.Struct({ id: Schema.String })
})

const router = yield* Router.make({
  home: HomeRoute,
  user: UserRoute,
})

// Navigate
yield* router.push("/users/123")

// Access route state
const isUserActive = yield* router.routes.user.isActive.get
const userParams = yield* router.routes.user.params.get
```
