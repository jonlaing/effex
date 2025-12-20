[**effex-monorepo**](../../../README.md)

***

[effex-monorepo](../../../modules.md) / [primitives/src](../README.md) / DropdownMenuSubProps

# Interface: DropdownMenuSubProps

Defined in: [packages/primitives/src/primitives/DropdownMenu/DropdownMenu.ts:142](https://github.com/jonlaing/effex/blob/6a1b9c8b38e226609ce7e1a1f5173769b8aad981/packages/primitives/src/primitives/DropdownMenu/DropdownMenu.ts#L142)

Props for DropdownMenu.Sub

## Properties

### defaultOpen?

> `readonly` `optional` **defaultOpen**: `boolean`

Defined in: [packages/primitives/src/primitives/DropdownMenu/DropdownMenu.ts:146](https://github.com/jonlaing/effex/blob/6a1b9c8b38e226609ce7e1a1f5173769b8aad981/packages/primitives/src/primitives/DropdownMenu/DropdownMenu.ts#L146)

Default open state

***

### onOpenChange()?

> `readonly` `optional` **onOpenChange**: (`open`) => `Effect`\<`void`\>

Defined in: [packages/primitives/src/primitives/DropdownMenu/DropdownMenu.ts:148](https://github.com/jonlaing/effex/blob/6a1b9c8b38e226609ce7e1a1f5173769b8aad981/packages/primitives/src/primitives/DropdownMenu/DropdownMenu.ts#L148)

Callback when open state changes

#### Parameters

##### open

`boolean`

#### Returns

`Effect`\<`void`\>

***

### open?

> `readonly` `optional` **open**: [`Signal`](../../../core/src/interfaces/Signal.md)\<`boolean`\>

Defined in: [packages/primitives/src/primitives/DropdownMenu/DropdownMenu.ts:144](https://github.com/jonlaing/effex/blob/6a1b9c8b38e226609ce7e1a1f5173769b8aad981/packages/primitives/src/primitives/DropdownMenu/DropdownMenu.ts#L144)

Controlled open state
