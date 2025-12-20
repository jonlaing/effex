[**effex-monorepo**](../../../../../README.md)

***

[effex-monorepo](../../../../../modules.md) / [core/src](../../../README.md) / [Readable](../README.md) / Reactive

# Type Alias: Reactive\<T\>

> **Reactive**\<`T`\> = `T` \| [`Readable`](../interfaces/Readable.md)\<`T`\>

Defined in: [packages/core/src/Readable.ts:55](https://github.com/jonlaing/effex/blob/6a1b9c8b38e226609ce7e1a1f5173769b8aad981/packages/core/src/Readable.ts#L55)

A value that can be either static or reactive.
Use `Readable.of()` to normalize to a `Readable<T>`.

## Type Parameters

### T

`T`

## Example

```ts
interface ButtonProps {
  disabled?: Readable.Reactive<boolean>;
  class?: Readable.Reactive<string>;
}

const Button = (props: ButtonProps) =>
  Effect.gen(function* () {
    const disabled = Readable.of(props.disabled ?? false);
    // Now disabled is Readable<boolean>
  });
```
