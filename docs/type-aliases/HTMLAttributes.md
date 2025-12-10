[**@jonlaing/effect-ui**](../README.md)

***

[@jonlaing/effect-ui](../globals.md) / HTMLAttributes

# Type Alias: HTMLAttributes\<K\>

> **HTMLAttributes**\<`K`\> = [`BaseAttributes`](../interfaces/BaseAttributes.md) & [`EventAttributes`](../interfaces/EventAttributes.md) & \{ readonly \[P in Exclude\<keyof HTMLElementTagNameMap\[K\], ExcludedKeys\>\]?: HTMLElementTagNameMap\[K\]\[P\] extends string ? string \| Readable\<string\> : HTMLElementTagNameMap\[K\]\[P\] extends number ? number \| Readable\<number\> : HTMLElementTagNameMap\[K\]\[P\] extends boolean ? boolean \| Readable\<boolean\> : HTMLElementTagNameMap\[K\]\[P\] extends (args: unknown\[\]) =\> unknown ? undefined : never \}

Defined in: [src/dom/Element/types.ts:174](https://github.com/jonlaing/effect-ui/blob/734f667177209887be58fbcdeaf94e3632c47f02/src/dom/Element/types.ts#L174)

Full HTML attributes for a specific element type, including base, events, and element-specific attributes.

## Type Parameters

### K

`K` *extends* keyof `HTMLElementTagNameMap`

The HTML element tag name
