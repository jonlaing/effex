[**@jonlaing/effect-ui**](../README.md)

***

[@jonlaing/effect-ui](../globals.md) / AsyncStrategy

# Type Alias: AsyncStrategy

> **AsyncStrategy** = `"abort"` \| `"queue"` \| `"debounce"`

Defined in: [src/core/Derived/types.ts:33](https://github.com/jonlaing/effect-ui/blob/6787207a59cbb4387cd33d98f63150448eeca508/src/core/Derived/types.ts#L33)

Strategy for handling concurrent async computations.
- "abort": Cancel the previous computation when a new one starts
- "queue": Wait for the previous computation to complete
- "debounce": Delay computation and reset timer on new triggers
