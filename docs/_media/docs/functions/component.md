[**@jonlaing/effect-ui**](../README.md)

***

[@jonlaing/effect-ui](../globals.md) / component

# Function: component()

> **component**\<`Name`, `Props`, `E`\>(`name`, `render`): [`Component`](../interfaces/Component.md)\<`Name`, `Props`, `E`\>

Defined in: [src/dom/Component.ts:49](https://github.com/jonlaing/effect-ui/blob/6787207a59cbb4387cd33d98f63150448eeca508/src/dom/Component.ts#L49)

Create a named component from a render function.

## Type Parameters

### Name

`Name` *extends* `string`

### Props

`Props` = `object`

### E

`E` = `never`

## Parameters

### name

`Name`

Unique name for the component (useful for debugging)

### render

(`props`) => [`Element`](../type-aliases/Element.md)\<`E`\>

Function that renders props to an Element

## Returns

[`Component`](../interfaces/Component.md)\<`Name`, `Props`, `E`\>

## Examples

```ts
interface ButtonProps {
  label: string
  onClick: () => void
}

const Button = component("Button", (props: ButtonProps) =>
  button({ onClick: props.onClick }, [props.label])
)

// Usage
Button({ label: "Click me", onClick: () => console.log("clicked") })
```

```ts
// Component that can fail
class UserNotFoundError { readonly _tag = "UserNotFoundError" }

const UserProfile = component("UserProfile", (props: { userId: string }) =>
  Effect.gen(function* () {
    const user = yield* fetchUser(props.userId)
    return yield* div([user.name])
  })
)
// Type: Component<"UserProfile", { userId: string }, UserNotFoundError>
```
