[**@jonlaing/effect-ui**](../README.md)

***

[@jonlaing/effect-ui](../globals.md) / SignalType

# Type Alias: SignalType

> **SignalType** = `object`

Defined in: [src/core/Signal.ts:15](https://github.com/jonlaing/effect-ui/blob/6787207a59cbb4387cd33d98f63150448eeca508/src/core/Signal.ts#L15)

Signal module namespace containing factory functions.

## Properties

### make()

> **make**: \<`A`\>(`initial`, `options?`) => `Effect`\<`Signal`\<`A`\>, `never`, `Scope`\>

Defined in: [src/core/Signal.ts:100](https://github.com/jonlaing/effect-ui/blob/6787207a59cbb4387cd33d98f63150448eeca508/src/core/Signal.ts#L100)

Create a new Signal with an initial value.

#### Type Parameters

##### A

`A`

#### Parameters

##### initial

`A`

The initial value

##### options?

[`SignalOptions`](../interfaces/SignalOptions.md)\<`A`\>

Optional configuration

#### Returns

`Effect`\<`Signal`\<`A`\>, `never`, `Scope`\>

***

### SignalRegistry

> **SignalRegistry**: *typeof* [`SignalRegistry`](../classes/SignalRegistry.md)

Defined in: [src/core/Signal.ts:101](https://github.com/jonlaing/effect-ui/blob/6787207a59cbb4387cd33d98f63150448eeca508/src/core/Signal.ts#L101)
