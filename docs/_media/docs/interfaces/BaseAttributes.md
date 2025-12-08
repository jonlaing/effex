[**@jonlaing/effect-ui**](../README.md)

***

[@jonlaing/effect-ui](../globals.md) / BaseAttributes

# Interface: BaseAttributes

Defined in: [src/dom/Element/types.ts:93](https://github.com/jonlaing/effect-ui/blob/6787207a59cbb4387cd33d98f63150448eeca508/src/dom/Element/types.ts#L93)

Base attributes available on all elements.

## Example

```ts
// Static class
div({ className: "container" }, [...])

// Reactive class
const isActive = yield* Signal.make(false)
div({ className: isActive.map(a => a ? "active" : "inactive") }, [...])

// Static styles
div({ style: { color: "red", "font-size": "16px" } }, [...])

// Reactive styles
const width = yield* Signal.make(100)
div({ style: { width: width.map(w => `${w}px`) } }, [...])
```

## Properties

### className?

> `readonly` `optional` **className**: `string` \| [`Readable`](Readable.md)\<`string`\>

Defined in: [src/dom/Element/types.ts:95](https://github.com/jonlaing/effect-ui/blob/6787207a59cbb4387cd33d98f63150448eeca508/src/dom/Element/types.ts#L95)

CSS class name(s)

***

### id?

> `readonly` `optional` **id**: `string`

Defined in: [src/dom/Element/types.ts:101](https://github.com/jonlaing/effect-ui/blob/6787207a59cbb4387cd33d98f63150448eeca508/src/dom/Element/types.ts#L101)

Element ID

***

### style?

> `readonly` `optional` **style**: `Record`\<`string`, `StyleValue`\> \| [`Readable`](Readable.md)\<`Record`\<`string`, `string`\>\>

Defined in: [src/dom/Element/types.ts:97](https://github.com/jonlaing/effect-ui/blob/6787207a59cbb4387cd33d98f63150448eeca508/src/dom/Element/types.ts#L97)

Inline styles as a record of property-value pairs
