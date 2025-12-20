[**effex-monorepo**](../../../README.md)

***

[effex-monorepo](../../../modules.md) / [core/src](../README.md) / makeSignal

# Function: makeSignal()

> **makeSignal**\<`A`\>(`initial`, `options?`): `Effect`\<[`Signal`](../interfaces/Signal.md)\<`A`\>, `never`, `Scope`\>

Defined in: [packages/core/src/Signal.ts:57](https://github.com/jonlaing/effex/blob/6a1b9c8b38e226609ce7e1a1f5173769b8aad981/packages/core/src/Signal.ts#L57)

Create a new Signal with an initial value.

## Type Parameters

### A

`A`

## Parameters

### initial

`A`

The initial value

### options?

[`SignalOptions`](../interfaces/SignalOptions.md)\<`A`\>

Optional configuration

## Returns

`Effect`\<[`Signal`](../interfaces/Signal.md)\<`A`\>, `never`, `Scope`\>
