[**@jonlaing/effect-ui**](../README.md)

***

[@jonlaing/effect-ui](../globals.md) / MatchCase

# Interface: MatchCase\<A, E\>

Defined in: [src/dom/Control.ts:183](https://github.com/jonlaing/effect-ui/blob/6787207a59cbb4387cd33d98f63150448eeca508/src/dom/Control.ts#L183)

A case for pattern matching with [match](../functions/match.md).

## Type Parameters

### A

`A`

### E

`E` = `never`

## Properties

### pattern

> `readonly` **pattern**: `A`

Defined in: [src/dom/Control.ts:185](https://github.com/jonlaing/effect-ui/blob/6787207a59cbb4387cd33d98f63150448eeca508/src/dom/Control.ts#L185)

The value to match against

***

### render()

> `readonly` **render**: () => [`Element`](../type-aliases/Element.md)\<`E`\>

Defined in: [src/dom/Control.ts:187](https://github.com/jonlaing/effect-ui/blob/6787207a59cbb4387cd33d98f63150448eeca508/src/dom/Control.ts#L187)

Element to render when matched

#### Returns

[`Element`](../type-aliases/Element.md)\<`E`\>
