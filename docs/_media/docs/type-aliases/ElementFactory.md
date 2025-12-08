[**@jonlaing/effect-ui**](../README.md)

***

[@jonlaing/effect-ui](../globals.md) / ElementFactory

# Type Alias: ElementFactory()\<K\>

> **ElementFactory**\<`K`\> = \{\<`E`\>(`attrs`, `children`): `Effect`\<`HTMLElementTagNameMap`\[`K`\], `E`, `Scope`\>; \<`E`\>(`attrs`, `child`): `Effect`\<`HTMLElementTagNameMap`\[`K`\], `E`, `Scope`\>; (`attrs`): `Effect`\<`HTMLElementTagNameMap`\[`K`\], `never`, `Scope`\>; \<`E`\>(`children`): `Effect`\<`HTMLElementTagNameMap`\[`K`\], `E`, `Scope`\>; \<`E`\>(`child`): `Effect`\<`HTMLElementTagNameMap`\[`K`\], `E`, `Scope`\>; (): `Effect`\<`HTMLElementTagNameMap`\[`K`\], `never`, `Scope`\>; \}

Defined in: [src/dom/Element/types.ts:161](https://github.com/jonlaing/effect-ui/blob/6787207a59cbb4387cd33d98f63150448eeca508/src/dom/Element/types.ts#L161)

Factory function for creating a specific HTML element type.
Supports multiple call signatures for convenience.
The error type is inferred from children.

## Type Parameters

### K

`K` *extends* keyof `HTMLElementTagNameMap`

The HTML element tag name

## Call Signature

> \<`E`\>(`attrs`, `children`): `Effect`\<`HTMLElementTagNameMap`\[`K`\], `E`, `Scope`\>

### Type Parameters

#### E

`E` = `never`

### Parameters

#### attrs

[`HTMLAttributes`](HTMLAttributes.md)\<`K`\>

#### children

readonly [`Child`](Child.md)\<`E`\>[]

### Returns

`Effect`\<`HTMLElementTagNameMap`\[`K`\], `E`, `Scope`\>

## Call Signature

> \<`E`\>(`attrs`, `child`): `Effect`\<`HTMLElementTagNameMap`\[`K`\], `E`, `Scope`\>

### Type Parameters

#### E

`E` = `never`

### Parameters

#### attrs

[`HTMLAttributes`](HTMLAttributes.md)\<`K`\>

#### child

[`Child`](Child.md)\<`E`\>

### Returns

`Effect`\<`HTMLElementTagNameMap`\[`K`\], `E`, `Scope`\>

## Call Signature

> (`attrs`): `Effect`\<`HTMLElementTagNameMap`\[`K`\], `never`, `Scope`\>

### Parameters

#### attrs

[`HTMLAttributes`](HTMLAttributes.md)\<`K`\>

### Returns

`Effect`\<`HTMLElementTagNameMap`\[`K`\], `never`, `Scope`\>

## Call Signature

> \<`E`\>(`children`): `Effect`\<`HTMLElementTagNameMap`\[`K`\], `E`, `Scope`\>

### Type Parameters

#### E

`E` = `never`

### Parameters

#### children

readonly [`Child`](Child.md)\<`E`\>[]

### Returns

`Effect`\<`HTMLElementTagNameMap`\[`K`\], `E`, `Scope`\>

## Call Signature

> \<`E`\>(`child`): `Effect`\<`HTMLElementTagNameMap`\[`K`\], `E`, `Scope`\>

### Type Parameters

#### E

`E` = `never`

### Parameters

#### child

[`Child`](Child.md)\<`E`\>

### Returns

`Effect`\<`HTMLElementTagNameMap`\[`K`\], `E`, `Scope`\>

## Call Signature

> (): `Effect`\<`HTMLElementTagNameMap`\[`K`\], `never`, `Scope`\>

### Returns

`Effect`\<`HTMLElementTagNameMap`\[`K`\], `never`, `Scope`\>
