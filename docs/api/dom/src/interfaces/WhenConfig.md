[**effex-monorepo**](../../../README.md)

***

[effex-monorepo](../../../modules.md) / [dom/src](../README.md) / WhenConfig

# Interface: WhenConfig\<E1, R1, E2, R2\>

Defined in: [packages/dom/src/Control.ts:35](https://github.com/jonlaing/effex/blob/6a1b9c8b38e226609ce7e1a1f5173769b8aad981/packages/dom/src/Control.ts#L35)

Configuration for the `when` control flow (DOM-specific with animation support).

## Type Parameters

### E1

`E1` = `never`

### R1

`R1` = `never`

### E2

`E2` = `never`

### R2

`R2` = `never`

## Properties

### animate?

> `readonly` `optional` **animate**: [`AnimationOptions`](AnimationOptions.md)

Defined in: [packages/dom/src/Control.ts:51](https://github.com/jonlaing/effex/blob/6a1b9c8b38e226609ce7e1a1f5173769b8aad981/packages/dom/src/Control.ts#L51)

Optional animation configuration

***

### container()?

> `readonly` `optional` **container**: () => [`Element`](../type-aliases/Element.md)\<`never`, `never`\>

Defined in: [packages/dom/src/Control.ts:45](https://github.com/jonlaing/effex/blob/6a1b9c8b38e226609ce7e1a1f5173769b8aad981/packages/dom/src/Control.ts#L45)

Optional custom container element. If not provided, defaults to a div
with `display: contents`.

#### Returns

[`Element`](../type-aliases/Element.md)\<`never`, `never`\>

#### Example

```ts
container: () => $.tbody({ class: "data-rows" })
```

***

### onFalse()

> `readonly` **onFalse**: () => [`Element`](../type-aliases/Element.md)\<`E2`, `R2`\>

Defined in: [packages/dom/src/Control.ts:49](https://github.com/jonlaing/effex/blob/6a1b9c8b38e226609ce7e1a1f5173769b8aad981/packages/dom/src/Control.ts#L49)

Element to render when condition is false

#### Returns

[`Element`](../type-aliases/Element.md)\<`E2`, `R2`\>

***

### onTrue()

> `readonly` **onTrue**: () => [`Element`](../type-aliases/Element.md)\<`E1`, `R1`\>

Defined in: [packages/dom/src/Control.ts:47](https://github.com/jonlaing/effex/blob/6a1b9c8b38e226609ce7e1a1f5173769b8aad981/packages/dom/src/Control.ts#L47)

Element to render when condition is true

#### Returns

[`Element`](../type-aliases/Element.md)\<`E1`, `R1`\>
