[**effex-monorepo**](../../../README.md)

***

[effex-monorepo](../../../modules.md) / [dom/src](../README.md) / each

# Function: each()

> **each**\<`A`, `E`, `R`\>(`items`, `config`): [`Element`](../type-aliases/Element.md)\<`E`, `R`\>

Defined in: [packages/dom/src/Control.ts:421](https://github.com/jonlaing/effex/blob/6a1b9c8b38e226609ce7e1a1f5173769b8aad981/packages/dom/src/Control.ts#L421)

Render a list of items with efficient updates using keys.

## Type Parameters

### A

`A`

### E

`E` = `never`

### R

`R` = `never`

## Parameters

### items

[`Readable`](../../../core/src/interfaces/Readable.md)\<readonly `A`[]\>

Reactive array of items

### config

[`EachConfig`](../interfaces/EachConfig.md)\<`A`, `E`, `R`\>

Configuration object with key, render, optional container and animate

## Returns

[`Element`](../type-aliases/Element.md)\<`E`, `R`\>

## Examples

```ts
interface Todo { id: string; text: string }
const todos = yield* Signal.make<Todo[]>([])

each(todos, {
  container: () => $.ul({ class: "todo-list" }),
  key: (todo) => todo.id,
  render: (todo) => $.li(todo.map(t => t.text))
})
```

```ts
// With staggered animations
each(items, {
  container: () => $.ul({ class: "animated-list" }),
  key: (item) => item.id,
  render: (item) => ListItem(item),
  animate: {
    enter: "slide-in",
    exit: "slide-out",
    stagger: 50  // 50ms between items
  }
})
```
