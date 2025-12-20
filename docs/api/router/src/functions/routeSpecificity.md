[**effex-monorepo**](../../../README.md)

***

[effex-monorepo](../../../modules.md) / [router/src](../README.md) / routeSpecificity

# Function: routeSpecificity()

> **routeSpecificity**(`segments`): `number`

Defined in: [packages/router/src/router/Route.ts:33](https://github.com/jonlaing/effex/blob/6a1b9c8b38e226609ce7e1a1f5173769b8aad981/packages/router/src/router/Route.ts#L33)

Calculate route specificity for sorting.
Higher = more specific.
Static segments worth more than params, params worth more than catch-all.

## Parameters

### segments

readonly [`PathSegment`](../type-aliases/PathSegment.md)[]

## Returns

`number`
