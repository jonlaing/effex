[**@jonlaing/effect-ui**](../README.md)

***

[@jonlaing/effect-ui](../globals.md) / HTMLAttributes

# Type Alias: HTMLAttributes\<K\>

> **HTMLAttributes**\<`K`\> = [`BaseAttributes`](../interfaces/BaseAttributes.md) & [`EventAttributes`](../interfaces/EventAttributes.md) & \{ readonly \[P in Exclude\<keyof HTMLElementTagNameMap\[K\], ExcludedKeys\>\]?: HTMLElementTagNameMap\[K\]\[P\] extends string ? string \| Readable\<string\> : HTMLElementTagNameMap\[K\]\[P\] extends number ? number \| Readable\<number\> : HTMLElementTagNameMap\[K\]\[P\] extends boolean ? boolean \| Readable\<boolean\> : never \}

Defined in: [src/dom/Element/types.ts:140](https://github.com/jonlaing/effect-ui/blob/6787207a59cbb4387cd33d98f63150448eeca508/src/dom/Element/types.ts#L140)

Full HTML attributes for a specific element type, including base, events, and element-specific attributes.

## Type Parameters

### K

`K` *extends* keyof `HTMLElementTagNameMap`

The HTML element tag name
