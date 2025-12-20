[**effex-monorepo**](../../../README.md)

***

[effex-monorepo](../../../modules.md) / [primitives/src](../README.md) / PopoverRootProps

# Interface: PopoverRootProps

Defined in: [packages/primitives/src/primitives/Popover/Popover.ts:37](https://github.com/jonlaing/effex/blob/54ecd92e6ce2cfbeee604b727471aa18d6829626/packages/primitives/src/primitives/Popover/Popover.ts#L37)

Props for Popover.Root

## Properties

### defaultOpen?

> `readonly` `optional` **defaultOpen**: `boolean`

Defined in: [packages/primitives/src/primitives/Popover/Popover.ts:41](https://github.com/jonlaing/effex/blob/54ecd92e6ce2cfbeee604b727471aa18d6829626/packages/primitives/src/primitives/Popover/Popover.ts#L41)

Default open state for uncontrolled usage

***

### onOpenChange()?

> `readonly` `optional` **onOpenChange**: (`open`) => `Effect`\<`void`\>

Defined in: [packages/primitives/src/primitives/Popover/Popover.ts:43](https://github.com/jonlaing/effex/blob/54ecd92e6ce2cfbeee604b727471aa18d6829626/packages/primitives/src/primitives/Popover/Popover.ts#L43)

Callback when open state changes

#### Parameters

##### open

`boolean`

#### Returns

`Effect`\<`void`\>

***

### open?

> `readonly` `optional` **open**: [`Signal`](../../../core/src/interfaces/Signal.md)\<`boolean`\>

Defined in: [packages/primitives/src/primitives/Popover/Popover.ts:39](https://github.com/jonlaing/effex/blob/54ecd92e6ce2cfbeee604b727471aa18d6829626/packages/primitives/src/primitives/Popover/Popover.ts#L39)

Controlled open state - if provided, component is controlled
