[**effex-monorepo**](../../../README.md)

***

[effex-monorepo](../../../modules.md) / [dom/src](../README.md) / FocusTrapOptions

# Interface: FocusTrapOptions

Defined in: [packages/dom/src/FocusTrap/FocusTrap.ts:18](https://github.com/jonlaing/effex/blob/6a1b9c8b38e226609ce7e1a1f5173769b8aad981/packages/dom/src/FocusTrap/FocusTrap.ts#L18)

Options for creating a focus trap.

## Properties

### container

> `readonly` **container**: `HTMLElement`

Defined in: [packages/dom/src/FocusTrap/FocusTrap.ts:20](https://github.com/jonlaing/effex/blob/6a1b9c8b38e226609ce7e1a1f5173769b8aad981/packages/dom/src/FocusTrap/FocusTrap.ts#L20)

Element to trap focus within

***

### initialFocus?

> `readonly` `optional` **initialFocus**: `HTMLElement` \| `null`

Defined in: [packages/dom/src/FocusTrap/FocusTrap.ts:22](https://github.com/jonlaing/effex/blob/6a1b9c8b38e226609ce7e1a1f5173769b8aad981/packages/dom/src/FocusTrap/FocusTrap.ts#L22)

Initial element to focus (default: first focusable element)

***

### returnFocus?

> `readonly` `optional` **returnFocus**: `HTMLElement` \| `null`

Defined in: [packages/dom/src/FocusTrap/FocusTrap.ts:24](https://github.com/jonlaing/effex/blob/6a1b9c8b38e226609ce7e1a1f5173769b8aad981/packages/dom/src/FocusTrap/FocusTrap.ts#L24)

Element to return focus to when deactivated (default: previously focused element)
