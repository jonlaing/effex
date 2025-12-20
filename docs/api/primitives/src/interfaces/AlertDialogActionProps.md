[**effex-monorepo**](../../../README.md)

***

[effex-monorepo](../../../modules.md) / [primitives/src](../README.md) / AlertDialogActionProps

# Interface: AlertDialogActionProps

Defined in: [packages/primitives/src/primitives/AlertDialog/AlertDialog.ts:94](https://github.com/jonlaing/effex/blob/6a1b9c8b38e226609ce7e1a1f5173769b8aad981/packages/primitives/src/primitives/AlertDialog/AlertDialog.ts#L94)

Props for AlertDialog.Action

## Properties

### class?

> `readonly` `optional` **class**: [`Reactive`](../../../core/src/namespaces/Readable/type-aliases/Reactive.md)\<`string`\>

Defined in: [packages/primitives/src/primitives/AlertDialog/AlertDialog.ts:96](https://github.com/jonlaing/effex/blob/6a1b9c8b38e226609ce7e1a1f5173769b8aad981/packages/primitives/src/primitives/AlertDialog/AlertDialog.ts#L96)

Additional class names

***

### onClick()?

> `readonly` `optional` **onClick**: () => `Effect`\<`void`\>

Defined in: [packages/primitives/src/primitives/AlertDialog/AlertDialog.ts:98](https://github.com/jonlaing/effex/blob/6a1b9c8b38e226609ce7e1a1f5173769b8aad981/packages/primitives/src/primitives/AlertDialog/AlertDialog.ts#L98)

Called when action button is clicked (before close)

#### Returns

`Effect`\<`void`\>
