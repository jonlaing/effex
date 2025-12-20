[**effex-monorepo**](../../../README.md)

***

[effex-monorepo](../../../modules.md) / [form/src](../README.md) / ValidationTiming

# Type Alias: ValidationTiming

> **ValidationTiming** = `"hybrid"` \| `"blur"` \| `"change"` \| `"submit"`

Defined in: [packages/form/src/form/types.ts:11](https://github.com/jonlaing/effex/blob/6a1b9c8b38e226609ce7e1a1f5173769b8aad981/packages/form/src/form/types.ts#L11)

Validation timing strategy for form fields.
- "hybrid" (default) - validate on blur first, then on change after first blur
- "blur" - validate when field loses focus
- "change" - validate on every keystroke
- "submit" - only validate when submitting
