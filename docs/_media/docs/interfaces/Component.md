[**@jonlaing/effect-ui**](../README.md)

***

[@jonlaing/effect-ui](../globals.md) / Component

# Interface: Component()\<Name, Props, E\>

Defined in: [src/dom/Component.ts:9](https://github.com/jonlaing/effect-ui/blob/6787207a59cbb4387cd33d98f63150448eeca508/src/dom/Component.ts#L9)

A named component function that renders props to an Element.

## Type Parameters

### Name

`Name` *extends* `string`

The component's tag name for identification

### Props

`Props` = `object`

The props type accepted by the component

### E

`E` = `never`

The error type that can be produced by the component

> **Component**(`props`): [`Element`](../type-aliases/Element.md)\<`E`\>

Defined in: [src/dom/Component.ts:12](https://github.com/jonlaing/effect-ui/blob/6787207a59cbb4387cd33d98f63150448eeca508/src/dom/Component.ts#L12)

A named component function that renders props to an Element.

## Parameters

### props

`Props`

## Returns

[`Element`](../type-aliases/Element.md)\<`E`\>

## Properties

### \_tag

> `readonly` **\_tag**: `Name`

Defined in: [src/dom/Component.ts:11](https://github.com/jonlaing/effect-ui/blob/6787207a59cbb4387cd33d98f63150448eeca508/src/dom/Component.ts#L11)

The component's identifying tag name
