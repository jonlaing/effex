[**effex-monorepo**](../../../README.md)

***

[effex-monorepo](../../../modules.md) / [router/src](../README.md) / MatchedRoute

# Interface: MatchedRoute\<P\>

Defined in: [packages/router/src/router/types.ts:72](https://github.com/jonlaing/effex/blob/6a1b9c8b38e226609ce7e1a1f5173769b8aad981/packages/router/src/router/types.ts#L72)

A matched route with its parsed params.

## Type Parameters

### P

`P` = `unknown`

## Properties

### params

> `readonly` **params**: `P`

Defined in: [packages/router/src/router/types.ts:76](https://github.com/jonlaing/effex/blob/6a1b9c8b38e226609ce7e1a1f5173769b8aad981/packages/router/src/router/types.ts#L76)

The parsed and validated params

***

### route

> `readonly` **route**: [`RouteType`](RouteType.md)\<`string`, `AnyNoContext`\>

Defined in: [packages/router/src/router/types.ts:74](https://github.com/jonlaing/effex/blob/6a1b9c8b38e226609ce7e1a1f5173769b8aad981/packages/router/src/router/types.ts#L74)

The route that matched
