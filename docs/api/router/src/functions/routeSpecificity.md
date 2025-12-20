[**effex-monorepo**](../../../README.md)

***

[effex-monorepo](../../../modules.md) / [router/src](../README.md) / routeSpecificity

# Function: routeSpecificity()

> **routeSpecificity**(`segments`): `number`

Defined in: [packages/router/src/router/Route.ts:33](https://github.com/jonlaing/effex/blob/54ecd92e6ce2cfbeee604b727471aa18d6829626/packages/router/src/router/Route.ts#L33)

Calculate route specificity for sorting.
Higher = more specific.
Static segments worth more than params, params worth more than catch-all.

## Parameters

### segments

readonly [`PathSegment`](../type-aliases/PathSegment.md)[]

## Returns

`number`
