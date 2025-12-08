[**@jonlaing/effect-ui**](../README.md)

***

[@jonlaing/effect-ui](../globals.md) / each

# Function: each()

> **each**\<`A`, `E`\>(`items`, `keyFn`, `render`): [`Element`](../type-aliases/Element.md)\<`E`\>

Defined in: [src/dom/Control.ts:272](https://github.com/jonlaing/effect-ui/blob/6787207a59cbb4387cd33d98f63150448eeca508/src/dom/Control.ts#L272)

Render a list of items with efficient updates using keys.

## Type Parameters

### A

`A`

### E

`E` = `never`

## Parameters

### items

[`Readable`](../interfaces/Readable.md)\<readonly `A`[]\>

Reactive array of items

### keyFn

(`item`) => `string`

Function to extract a unique key from each item

### render

(`item`) => [`Element`](../type-aliases/Element.md)\<`E`\>

Function to render each item (receives a Readable for the item)

## Returns

[`Element`](../type-aliases/Element.md)\<`E`\>

## Example

```ts
interface Todo { id: string; text: string }
const todos = yield* Signal.make<Todo[]>([])

each(
  todos,
  (todo) => todo.id,
  (todo) => li([todo.map(t => t.text)])
)
```
