[**effex-monorepo**](../../../README.md)

***

[effex-monorepo](../../../modules.md) / [dom/src](../README.md) / runEnterAnimation

# Function: runEnterAnimation()

> **runEnterAnimation**(`element`, `options`): `Effect`\<`void`\>

Defined in: [packages/dom/src/Animation/core.ts:116](https://github.com/jonlaing/effex/blob/6a1b9c8b38e226609ce7e1a1f5173769b8aad981/packages/dom/src/Animation/core.ts#L116)

Run an enter animation on an element.

Sequence:
1. Call onBeforeEnter hook
2. Add enterFrom classes (if provided)
3. Add enter classes
4. Force reflow
5. Remove enterFrom classes (triggers transition)
6. Add enterTo classes
7. Wait for animation/transition to complete
8. Remove enter classes
9. Call onEnter hook

## Parameters

### element

`HTMLElement`

### options

[`AnimationOptions`](../interfaces/AnimationOptions.md)

## Returns

`Effect`\<`void`\>
