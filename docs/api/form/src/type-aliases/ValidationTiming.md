[**effex-monorepo**](../../../README.md)

***

[effex-monorepo](../../../modules.md) / [form/src](../README.md) / ValidationTiming

# Type Alias: ValidationTiming

> **ValidationTiming** = `"hybrid"` \| `"blur"` \| `"change"` \| `"submit"`

Defined in: [packages/form/src/form/types.ts:11](https://github.com/jonlaing/effex/blob/54ecd92e6ce2cfbeee604b727471aa18d6829626/packages/form/src/form/types.ts#L11)

Validation timing strategy for form fields.
- "hybrid" (default) - validate on blur first, then on change after first blur
- "blur" - validate when field loses focus
- "change" - validate on every keystroke
- "submit" - only validate when submitting
