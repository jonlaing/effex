[**effex-monorepo**](../../../README.md)

***

[effex-monorepo](../../../modules.md) / [router/src](../README.md) / makeRoute

# Function: makeRoute()

> **makeRoute**\<`Path`, `P`\>(`path`, `options?`): [`RouteType`](../interfaces/RouteType.md)\<`Path`, `P`\>

Defined in: [packages/router/src/router/Route.ts:115](https://github.com/jonlaing/effex/blob/6a1b9c8b38e226609ce7e1a1f5173769b8aad981/packages/router/src/router/Route.ts#L115)

Create a route definition.

## Type Parameters

### Path

`Path` *extends* `string`

### P

`P` *extends* `AnyNoContext` = `AnyNoContext`

## Parameters

### path

`Path`

The path pattern (e.g., "/users/:id")

### options?

[`RouteOptions`](../interfaces/RouteOptions.md)\<`P`\>

Route configuration including params schema

## Returns

[`RouteType`](../interfaces/RouteType.md)\<`Path`, `P`\>

## Example

```ts
const UserRoute = Route.make("/users/:id", {
  params: Schema.Struct({ id: Schema.String })
})

const HomeRoute = Route.make("/")

const CatchAllRoute = Route.make("/*")
```
