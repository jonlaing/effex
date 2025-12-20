[**effex-monorepo**](../../../README.md)

***

[effex-monorepo](../../../modules.md) / [core/src](../README.md) / MatchCase

# Interface: MatchCase\<A, N, E, R\>

Defined in: [packages/core/src/Control.ts:30](https://github.com/jonlaing/effex/blob/6a1b9c8b38e226609ce7e1a1f5173769b8aad981/packages/core/src/Control.ts#L30)

A case for pattern matching with [match](../functions/match.md).

## Extended by

- [`MatchCase`](../../../dom/src/interfaces/MatchCase.md)

## Type Parameters

### A

`A`

### N

`N`

### E

`E` = `never`

### R

`R` = `never`

## Properties

### pattern

> `readonly` **pattern**: `A`

Defined in: [packages/core/src/Control.ts:31](https://github.com/jonlaing/effex/blob/6a1b9c8b38e226609ce7e1a1f5173769b8aad981/packages/core/src/Control.ts#L31)

***

### render()

> `readonly` **render**: () => [`Element`](../type-aliases/Element.md)\<`N`, `E`, `R`\>

Defined in: [packages/core/src/Control.ts:32](https://github.com/jonlaing/effex/blob/6a1b9c8b38e226609ce7e1a1f5173769b8aad981/packages/core/src/Control.ts#L32)

#### Returns

[`Element`](../type-aliases/Element.md)\<`N`, `E`, `R`\>
