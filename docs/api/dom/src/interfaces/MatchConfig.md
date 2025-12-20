[**effex-monorepo**](../../../README.md)

***

[effex-monorepo](../../../modules.md) / [dom/src](../README.md) / MatchConfig

# Interface: MatchConfig\<A, E, R, E2, R2\>

Defined in: [packages/dom/src/Control.ts:57](https://github.com/jonlaing/effex/blob/6a1b9c8b38e226609ce7e1a1f5173769b8aad981/packages/dom/src/Control.ts#L57)

Configuration for the `match` control flow (DOM-specific with animation support).

## Type Parameters

### A

`A`

### E

`E` = `never`

### R

`R` = `never`

### E2

`E2` = `never`

### R2

`R2` = `never`

## Properties

### animate?

> `readonly` `optional` **animate**: [`AnimationOptions`](AnimationOptions.md)

Defined in: [packages/dom/src/Control.ts:74](https://github.com/jonlaing/effex/blob/6a1b9c8b38e226609ce7e1a1f5173769b8aad981/packages/dom/src/Control.ts#L74)

Optional animation configuration

***

### cases

> `readonly` **cases**: readonly [`MatchCase`](MatchCase.md)\<`A`, `E`, `R`\>[]

Defined in: [packages/dom/src/Control.ts:70](https://github.com/jonlaing/effex/blob/6a1b9c8b38e226609ce7e1a1f5173769b8aad981/packages/dom/src/Control.ts#L70)

Array of pattern-render pairs

***

### container()?

> `readonly` `optional` **container**: () => [`Element`](../type-aliases/Element.md)\<`never`, `never`\>

Defined in: [packages/dom/src/Control.ts:68](https://github.com/jonlaing/effex/blob/6a1b9c8b38e226609ce7e1a1f5173769b8aad981/packages/dom/src/Control.ts#L68)

Optional custom container element. If not provided, defaults to a div
with `display: contents`.

#### Returns

[`Element`](../type-aliases/Element.md)\<`never`, `never`\>

***

### fallback()?

> `readonly` `optional` **fallback**: () => [`Element`](../type-aliases/Element.md)\<`E2`, `R2`\>

Defined in: [packages/dom/src/Control.ts:72](https://github.com/jonlaing/effex/blob/6a1b9c8b38e226609ce7e1a1f5173769b8aad981/packages/dom/src/Control.ts#L72)

Optional fallback if no pattern matches

#### Returns

[`Element`](../type-aliases/Element.md)\<`E2`, `R2`\>
