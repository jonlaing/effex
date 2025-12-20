[**effex-monorepo**](../../../README.md)

***

[effex-monorepo](../../../modules.md) / [primitives/src](../README.md) / CollapsibleRootProps

# Interface: CollapsibleRootProps

Defined in: [packages/primitives/src/primitives/Collapsible/Collapsible.ts:31](https://github.com/jonlaing/effex/blob/6a1b9c8b38e226609ce7e1a1f5173769b8aad981/packages/primitives/src/primitives/Collapsible/Collapsible.ts#L31)

Props for Collapsible.Root

## Properties

### defaultOpen?

> `readonly` `optional` **defaultOpen**: `boolean`

Defined in: [packages/primitives/src/primitives/Collapsible/Collapsible.ts:35](https://github.com/jonlaing/effex/blob/6a1b9c8b38e226609ce7e1a1f5173769b8aad981/packages/primitives/src/primitives/Collapsible/Collapsible.ts#L35)

Default open state for uncontrolled usage

***

### disabled?

> `readonly` `optional` **disabled**: [`Reactive`](../../../core/src/namespaces/Readable/type-aliases/Reactive.md)\<`boolean`\>

Defined in: [packages/primitives/src/primitives/Collapsible/Collapsible.ts:37](https://github.com/jonlaing/effex/blob/6a1b9c8b38e226609ce7e1a1f5173769b8aad981/packages/primitives/src/primitives/Collapsible/Collapsible.ts#L37)

Whether the collapsible is disabled

***

### onOpenChange()?

> `readonly` `optional` **onOpenChange**: (`open`) => `Effect`\<`void`\>

Defined in: [packages/primitives/src/primitives/Collapsible/Collapsible.ts:39](https://github.com/jonlaing/effex/blob/6a1b9c8b38e226609ce7e1a1f5173769b8aad981/packages/primitives/src/primitives/Collapsible/Collapsible.ts#L39)

Callback when open state changes

#### Parameters

##### open

`boolean`

#### Returns

`Effect`\<`void`\>

***

### open?

> `readonly` `optional` **open**: [`Signal`](../../../core/src/interfaces/Signal.md)\<`boolean`\>

Defined in: [packages/primitives/src/primitives/Collapsible/Collapsible.ts:33](https://github.com/jonlaing/effex/blob/6a1b9c8b38e226609ce7e1a1f5173769b8aad981/packages/primitives/src/primitives/Collapsible/Collapsible.ts#L33)

Controlled open state - if provided, component is controlled
