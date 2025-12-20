[**effex-monorepo**](../../../README.md)

***

[effex-monorepo](../../../modules.md) / [primitives/src](../README.md) / ContextMenuItemProps

# Interface: ContextMenuItemProps

Defined in: [packages/primitives/src/primitives/ContextMenu/ContextMenu.ts:68](https://github.com/jonlaing/effex/blob/6a1b9c8b38e226609ce7e1a1f5173769b8aad981/packages/primitives/src/primitives/ContextMenu/ContextMenu.ts#L68)

Props for ContextMenu.Item

## Properties

### class?

> `readonly` `optional` **class**: [`Reactive`](../../../core/src/namespaces/Readable/type-aliases/Reactive.md)\<`string`\>

Defined in: [packages/primitives/src/primitives/ContextMenu/ContextMenu.ts:70](https://github.com/jonlaing/effex/blob/6a1b9c8b38e226609ce7e1a1f5173769b8aad981/packages/primitives/src/primitives/ContextMenu/ContextMenu.ts#L70)

Additional class names

***

### disabled?

> `readonly` `optional` **disabled**: [`Reactive`](../../../core/src/namespaces/Readable/type-aliases/Reactive.md)\<`boolean`\>

Defined in: [packages/primitives/src/primitives/ContextMenu/ContextMenu.ts:72](https://github.com/jonlaing/effex/blob/6a1b9c8b38e226609ce7e1a1f5173769b8aad981/packages/primitives/src/primitives/ContextMenu/ContextMenu.ts#L72)

Whether this item is disabled

***

### onSelect()?

> `readonly` `optional` **onSelect**: () => `Effect`\<`void`\>

Defined in: [packages/primitives/src/primitives/ContextMenu/ContextMenu.ts:74](https://github.com/jonlaing/effex/blob/6a1b9c8b38e226609ce7e1a1f5173769b8aad981/packages/primitives/src/primitives/ContextMenu/ContextMenu.ts#L74)

Callback when item is selected

#### Returns

`Effect`\<`void`\>
