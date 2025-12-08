# Effect UI

A reactive UI framework built on [Effect](https://effect.website/). Effect UI provides a declarative way to build web interfaces with fine-grained reactivity, automatic cleanup, and full type safety.

## Installation

```bash
pnpm add @jonlaing/effect-ui effect
```

## Basic Usage

```ts
import { Effect } from "effect"
import { Signal, SignalRegistry, div, button, span, mount } from "@jonlaing/effect-ui"

const Counter = Effect.gen(function* () {
  const count = yield* Signal.make(0)

  return yield* div([
    button({ onClick: () => count.update((n) => n - 1) }, "-"),
    span(count),
    button({ onClick: () => count.update((n) => n + 1) }, "+"),
  ])
})

Effect.runPromise(
  Effect.scoped(
    Effect.gen(function* () {
      const app = yield* Counter
      yield* mount(app, document.getElementById("root")!)
      yield* Effect.never
    })
  ).pipe(Effect.provide(SignalRegistry.Live))
)
```

## Core Concepts

### Signals

Signals are reactive values that can be read and updated:

```ts
const count = yield* Signal.make(0)

// Read the current value
const current = yield* count.get

// Update the value
yield* count.set(5)
yield* count.update((n) => n + 1)
```

### Derived Values

Derived values automatically recompute when their dependencies change:

```ts
const firstName = yield* Signal.make("John")
const lastName = yield* Signal.make("Doe")

const fullName = yield* Derived.sync(
  [firstName, lastName],
  ([first, last]) => `${first} ${last}`
)
```

### Elements

Create DOM elements with reactive attributes and children. Elements are Effects that must be yielded:

```ts
yield* div({ className: "container", style: { color: "red" } }, [
  h1(["Hello, ", name]),
  p([count, " items"]),
])
```

Single children don't need to be wrapped in arrays:

```ts
yield* h1("Hello World")
yield* button({ onClick: handleClick }, "Click me")
```

### Control Flow

Conditionally render elements:

```ts
when(
  isLoggedIn,
  () => div("Welcome back!"),
  () => div("Please log in")
)

each(
  todos,
  (todo) => todo.id,
  (todo) => li(todo.map((t) => t.text))
)
```

## API Documentation

See the [docs](./docs) folder for full API documentation.

## License

MIT
