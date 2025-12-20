[**effex-monorepo**](../../../README.md)

***

[effex-monorepo](../../../modules.md) / [router/src](../README.md) / RouteState

# Interface: RouteState\<P\>

Defined in: [packages/router/src/router/types.ts:83](https://github.com/jonlaing/effex/blob/6a1b9c8b38e226609ce7e1a1f5173769b8aad981/packages/router/src/router/types.ts#L83)

State for an individual route within the router.

## Type Parameters

### P

`P` = `unknown`

The params type

## Properties

### isActive

> `readonly` **isActive**: [`Readable`](../../../core/src/namespaces/Readable/interfaces/Readable.md)\<`boolean`\>

Defined in: [packages/router/src/router/types.ts:85](https://github.com/jonlaing/effex/blob/6a1b9c8b38e226609ce7e1a1f5173769b8aad981/packages/router/src/router/types.ts#L85)

Whether this route is currently active

***

### params

> `readonly` **params**: [`Readable`](../../../core/src/namespaces/Readable/interfaces/Readable.md)\<`P`\>

Defined in: [packages/router/src/router/types.ts:87](https://github.com/jonlaing/effex/blob/6a1b9c8b38e226609ce7e1a1f5173769b8aad981/packages/router/src/router/types.ts#L87)

The current params (only meaningful when active)
