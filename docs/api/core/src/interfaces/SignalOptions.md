[**effex-monorepo**](../../../README.md)

***

[effex-monorepo](../../../modules.md) / [core/src](../README.md) / SignalOptions

# Interface: SignalOptions\<A\>

Defined in: [packages/core/src/Signal.ts:47](https://github.com/jonlaing/effex/blob/6a1b9c8b38e226609ce7e1a1f5173769b8aad981/packages/core/src/Signal.ts#L47)

Options for creating a Signal.

## Type Parameters

### A

`A`

The type of the value

## Properties

### equals()?

> `readonly` `optional` **equals**: (`a`, `b`) => `boolean`

Defined in: [packages/core/src/Signal.ts:49](https://github.com/jonlaing/effex/blob/6a1b9c8b38e226609ce7e1a1f5173769b8aad981/packages/core/src/Signal.ts#L49)

Custom equality function to determine if the value has changed

#### Parameters

##### a

`A`

##### b

`A`

#### Returns

`boolean`
