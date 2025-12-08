[**@jonlaing/effect-ui**](../README.md)

***

[@jonlaing/effect-ui](../globals.md) / Child

# Type Alias: Child\<E\>

> **Child**\<`E`\> = `string` \| `number` \| [`Element`](Element.md)\<`E`\> \| [`Readable`](../interfaces/Readable.md)\<`string`\> \| [`Readable`](../interfaces/Readable.md)\<`number`\> \| readonly `Child`\<`E`\>[]

Defined in: [src/dom/Element/types.ts:41](https://github.com/jonlaing/effect-ui/blob/6787207a59cbb4387cd33d98f63150448eeca508/src/dom/Element/types.ts#L41)

Valid child types for an element: strings, numbers, elements, reactive values, or arrays thereof.

## Type Parameters

### E

`E` = `never`

The error type for child elements

## Example

```ts
// Static text
div(["Hello, world!"])

// Reactive text
const count = yield* Signal.make(0)
div([count])  // Updates automatically when count changes

// Nested elements
div([
  h1(["Title"]),
  p(["Content"])
])
```
