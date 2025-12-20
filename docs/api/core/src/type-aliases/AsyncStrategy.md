[**effex-monorepo**](../../../README.md)

***

[effex-monorepo](../../../modules.md) / [core/src](../README.md) / AsyncStrategy

# Type Alias: AsyncStrategy

> **AsyncStrategy** = `"abort"` \| `"queue"` \| `"debounce"`

Defined in: [packages/core/src/Derived/types.ts:33](https://github.com/jonlaing/effex/blob/54ecd92e6ce2cfbeee604b727471aa18d6829626/packages/core/src/Derived/types.ts#L33)

Strategy for handling concurrent async computations.
- "abort": Cancel the previous computation when a new one starts
- "queue": Wait for the previous computation to complete
- "debounce": Delay computation and reset timer on new triggers
