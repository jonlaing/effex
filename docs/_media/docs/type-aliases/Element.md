[**@jonlaing/effect-ui**](../README.md)

***

[@jonlaing/effect-ui](../globals.md) / Element

# Type Alias: Element\<E\>

> **Element**\<`E`\> = `Effect.Effect`\<`HTMLElement`, `E`, `Scope.Scope`\>

Defined in: [src/dom/Element/types.ts:19](https://github.com/jonlaing/effect-ui/blob/6787207a59cbb4387cd33d98f63150448eeca508/src/dom/Element/types.ts#L19)

A DOM element wrapped in an Effect with scope management.

## Type Parameters

### E

`E` = `never`

The error type (defaults to never for infallible elements)

## Example

```ts
const myButton: Element = button({ className: "primary" }, ["Click me"])

// Component that can fail
const UserProfile: Element<UserNotFoundError> = Effect.gen(function* () {
  const user = yield* fetchUser(userId)
  return yield* div([user.name])
})
```
