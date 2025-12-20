[**effex-monorepo**](../../../README.md)

***

[effex-monorepo](../../../modules.md) / [primitives/src](../README.md) / DialogContentProps

# Interface: DialogContentProps

Defined in: [packages/primitives/src/primitives/Dialog/Dialog.ts:73](https://github.com/jonlaing/effex/blob/6a1b9c8b38e226609ce7e1a1f5173769b8aad981/packages/primitives/src/primitives/Dialog/Dialog.ts#L73)

Props for Dialog.Content

## Properties

### class?

> `readonly` `optional` **class**: [`Reactive`](../../../core/src/namespaces/Readable/type-aliases/Reactive.md)\<`string`\>

Defined in: [packages/primitives/src/primitives/Dialog/Dialog.ts:75](https://github.com/jonlaing/effex/blob/6a1b9c8b38e226609ce7e1a1f5173769b8aad981/packages/primitives/src/primitives/Dialog/Dialog.ts#L75)

Additional class names

***

### onEscapeKeyDown()?

> `readonly` `optional` **onEscapeKeyDown**: (`event`) => `Effect`\<`void`\>

Defined in: [packages/primitives/src/primitives/Dialog/Dialog.ts:77](https://github.com/jonlaing/effex/blob/6a1b9c8b38e226609ce7e1a1f5173769b8aad981/packages/primitives/src/primitives/Dialog/Dialog.ts#L77)

Called when Escape key is pressed (before close)

#### Parameters

##### event

`KeyboardEvent`

#### Returns

`Effect`\<`void`\>
