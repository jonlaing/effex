[**effex-monorepo**](../../../README.md)

***

[effex-monorepo](../../../modules.md) / [primitives/src](../README.md) / DropdownMenuRadioGroupProps

# Interface: DropdownMenuRadioGroupProps

Defined in: [packages/primitives/src/primitives/DropdownMenu/DropdownMenu.ts:202](https://github.com/jonlaing/effex/blob/6a1b9c8b38e226609ce7e1a1f5173769b8aad981/packages/primitives/src/primitives/DropdownMenu/DropdownMenu.ts#L202)

Props for DropdownMenu.RadioGroup

## Properties

### class?

> `readonly` `optional` **class**: [`Reactive`](../../../core/src/namespaces/Readable/type-aliases/Reactive.md)\<`string`\>

Defined in: [packages/primitives/src/primitives/DropdownMenu/DropdownMenu.ts:204](https://github.com/jonlaing/effex/blob/6a1b9c8b38e226609ce7e1a1f5173769b8aad981/packages/primitives/src/primitives/DropdownMenu/DropdownMenu.ts#L204)

Additional class names

***

### defaultValue?

> `readonly` `optional` **defaultValue**: `string`

Defined in: [packages/primitives/src/primitives/DropdownMenu/DropdownMenu.ts:208](https://github.com/jonlaing/effex/blob/6a1b9c8b38e226609ce7e1a1f5173769b8aad981/packages/primitives/src/primitives/DropdownMenu/DropdownMenu.ts#L208)

Default value (uncontrolled)

***

### onValueChange()?

> `readonly` `optional` **onValueChange**: (`value`) => `Effect`\<`void`\>

Defined in: [packages/primitives/src/primitives/DropdownMenu/DropdownMenu.ts:210](https://github.com/jonlaing/effex/blob/6a1b9c8b38e226609ce7e1a1f5173769b8aad981/packages/primitives/src/primitives/DropdownMenu/DropdownMenu.ts#L210)

Callback when value changes

#### Parameters

##### value

`string`

#### Returns

`Effect`\<`void`\>

***

### value?

> `readonly` `optional` **value**: [`Signal`](../../../core/src/interfaces/Signal.md)\<`string`\>

Defined in: [packages/primitives/src/primitives/DropdownMenu/DropdownMenu.ts:206](https://github.com/jonlaing/effex/blob/6a1b9c8b38e226609ce7e1a1f5173769b8aad981/packages/primitives/src/primitives/DropdownMenu/DropdownMenu.ts#L206)

Controlled value
