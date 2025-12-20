[**effex-monorepo**](../../../README.md)

***

[effex-monorepo](../../../modules.md) / [dom/src](../README.md) / t

# Function: t()

> **t**(`strings`, ...`values`): [`Readable`](../../../core/src/interfaces/Readable.md)\<`string`\>

Defined in: [packages/dom/src/Template.ts:28](https://github.com/jonlaing/effex/blob/54ecd92e6ce2cfbeee604b727471aa18d6829626/packages/dom/src/Template.ts#L28)

Tagged template literal for creating reactive strings.
Interpolated Readable values will automatically update the string when they change.

## Parameters

### strings

`TemplateStringsArray`

### values

...readonly `unknown`[]

## Returns

[`Readable`](../../../core/src/interfaces/Readable.md)\<`string`\>

## Example

```ts
const name = yield* Signal.make("World")
const count = yield* Signal.make(0)

// Static parts stay static, reactive parts update
const message = t`Hello, ${name}! Count: ${count}`

// Use in elements
div([message])  // Updates when name or count changes
```
