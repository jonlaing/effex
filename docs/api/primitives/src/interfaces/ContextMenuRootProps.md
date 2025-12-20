[**effex-monorepo**](../../../README.md)

***

[effex-monorepo](../../../modules.md) / [primitives/src](../README.md) / ContextMenuRootProps

# Interface: ContextMenuRootProps

Defined in: [packages/primitives/src/primitives/ContextMenu/ContextMenu.ts:38](https://github.com/jonlaing/effex/blob/54ecd92e6ce2cfbeee604b727471aa18d6829626/packages/primitives/src/primitives/ContextMenu/ContextMenu.ts#L38)

Props for ContextMenu.Root

## Properties

### onOpenChange()?

> `readonly` `optional` **onOpenChange**: (`open`) => `Effect`\<`void`\>

Defined in: [packages/primitives/src/primitives/ContextMenu/ContextMenu.ts:42](https://github.com/jonlaing/effex/blob/54ecd92e6ce2cfbeee604b727471aa18d6829626/packages/primitives/src/primitives/ContextMenu/ContextMenu.ts#L42)

Callback when open state changes

#### Parameters

##### open

`boolean`

#### Returns

`Effect`\<`void`\>

***

### open?

> `readonly` `optional` **open**: [`Signal`](../../../core/src/interfaces/Signal.md)\<`boolean`\>

Defined in: [packages/primitives/src/primitives/ContextMenu/ContextMenu.ts:40](https://github.com/jonlaing/effex/blob/54ecd92e6ce2cfbeee604b727471aa18d6829626/packages/primitives/src/primitives/ContextMenu/ContextMenu.ts#L40)

Controlled open state
