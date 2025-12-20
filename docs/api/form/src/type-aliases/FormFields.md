[**effex-monorepo**](../../../README.md)

***

[effex-monorepo](../../../modules.md) / [form/src](../README.md) / FormFields

# Type Alias: FormFields\<T\>

> **FormFields**\<`T`\> = `{ readonly [K in keyof T]: T[K] extends readonly (infer Item)[] ? FieldArray<Item> : FieldType<T[K]> }`

Defined in: [packages/form/src/form/types.ts:100](https://github.com/jonlaing/effex/blob/6a1b9c8b38e226609ce7e1a1f5173769b8aad981/packages/form/src/form/types.ts#L100)

Extracts field types from a schema type.
Maps each property to a Field of that type.

## Type Parameters

### T

`T`
