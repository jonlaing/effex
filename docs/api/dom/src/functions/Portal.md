[**effex-monorepo**](../../../README.md)

***

[effex-monorepo](../../../modules.md) / [dom/src](../README.md) / Portal

# Function: Portal()

## Call Signature

> **Portal**\<`E`, `R`\>(`children`): [`Element`](../type-aliases/Element.md)\<`E`, `R`\>

Defined in: [packages/dom/src/Portal.ts:31](https://github.com/jonlaing/effex/blob/6a1b9c8b38e226609ce7e1a1f5173769b8aad981/packages/dom/src/Portal.ts#L31)

Render children into a different DOM node, outside the normal component hierarchy.
Useful for modals, dropdowns, tooltips that need to escape overflow/z-index issues.

### Type Parameters

#### E

`E` = `never`

#### R

`R` = `never`

### Parameters

#### children

() => [`Element`](../type-aliases/Element.md)\<`E`, `R`\>

### Returns

[`Element`](../type-aliases/Element.md)\<`E`, `R`\>

### Example

```ts
// Render to document.body (default)
Portal(() => Modal({ ... }))

// Render to specific element
Portal({ target: "#modal-root" }, () => Dropdown({ ... }))

// Render to element reference
Portal({ target: containerElement }, () => Tooltip({ ... }))
```

## Call Signature

> **Portal**\<`E`, `R`\>(`options`, `children`): [`Element`](../type-aliases/Element.md)\<`E`, `R`\>

Defined in: [packages/dom/src/Portal.ts:34](https://github.com/jonlaing/effex/blob/6a1b9c8b38e226609ce7e1a1f5173769b8aad981/packages/dom/src/Portal.ts#L34)

Render children into a different DOM node, outside the normal component hierarchy.
Useful for modals, dropdowns, tooltips that need to escape overflow/z-index issues.

### Type Parameters

#### E

`E` = `never`

#### R

`R` = `never`

### Parameters

#### options

[`PortalOptions`](../interfaces/PortalOptions.md)

#### children

() => [`Element`](../type-aliases/Element.md)\<`E`, `R`\>

### Returns

[`Element`](../type-aliases/Element.md)\<`E`, `R`\>

### Example

```ts
// Render to document.body (default)
Portal(() => Modal({ ... }))

// Render to specific element
Portal({ target: "#modal-root" }, () => Dropdown({ ... }))

// Render to element reference
Portal({ target: containerElement }, () => Tooltip({ ... }))
```
