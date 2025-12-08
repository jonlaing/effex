import { describe, it, expect, beforeEach } from "vitest"
import { Effect } from "effect"
import { Signal } from "@core/Signal"
import { component } from "./Component"
import { div, button, span } from "./Element"

describe("Component", () => {
  beforeEach(() => {
    document.body.innerHTML = ""
  })

  it("should create a named component", () => {
    const MyComponent = component("MyComponent", () => div("Hello"))

    expect(MyComponent._tag).toBe("MyComponent")
  })

  it("should render component without props", async () => {
    const Greeting = component("Greeting", () => div("Hello, World!"))

    const el = await Effect.runPromise(Effect.scoped(Greeting({})))

    expect(el.textContent).toBe("Hello, World!")
  })

  it("should render component with props", async () => {
    interface GreetingProps {
      name: string
    }

    const Greeting = component("Greeting", (props: GreetingProps) =>
      div(`Hello, ${props.name}!`)
    )

    const el = await Effect.runPromise(Effect.scoped(Greeting({ name: "Alice" })))

    expect(el.textContent).toBe("Hello, Alice!")
  })

  it("should render component with reactive state", async () => {
    const Counter = component("Counter", () =>
      Effect.gen(function* () {
        const count = yield* Signal.make(0)

        return yield* div([
          span(count.map((n) => `Count: ${n}`)),
          button(
            { onClick: () => count.update((n) => n + 1) },
            "+"
          ),
        ])
      })
    )

    await Effect.runPromise(
      Effect.scoped(
        Effect.gen(function* () {
          const el = yield* Counter({})

          expect(el.textContent).toContain("Count: 0")

          // Find and click the button
          const btn = el.querySelector("button")!
          btn.click()

          yield* Effect.sleep(10)

          expect(el.textContent).toContain("Count: 1")
        })
      )
    )
  })

  it("should compose components", async () => {
    interface ButtonProps {
      label: string
      onClick: () => void
    }

    const Button = component("Button", (props: ButtonProps) =>
      button({ onClick: props.onClick }, props.label)
    )

    const Counter = component("Counter", () =>
      Effect.gen(function* () {
        const count = yield* Signal.make(0)

        return yield* div([
          span(count),
          Button({ label: "+", onClick: () => Effect.runSync(count.update((n) => n + 1)) }),
        ])
      })
    )

    await Effect.runPromise(
      Effect.scoped(
        Effect.gen(function* () {
          const el = yield* Counter({})

          expect(el.querySelector("span")?.textContent).toBe("0")

          el.querySelector("button")?.click()
          yield* Effect.sleep(10)

          expect(el.querySelector("span")?.textContent).toBe("1")
        })
      )
    )
  })

  it("should handle component with complex props", async () => {
    interface CardProps {
      title: string
      items: string[]
      onSelect?: (item: string) => void
    }

    const Card = component("Card", (props: CardProps) =>
      div({ className: "card" }, [
        div({ className: "title" }, props.title),
        div(
          { className: "items" },
          props.items.map((item) =>
            div(
              {
                className: "item",
                onClick: () => props.onSelect?.(item),
              },
              item
            )
          )
        ),
      ])
    )

    let selected: string | null = null

    const el = await Effect.runPromise(
      Effect.scoped(
        Card({
          title: "My List",
          items: ["Apple", "Banana", "Cherry"],
          onSelect: (item) => {
            selected = item
          },
        })
      )
    )

    expect(el.querySelector(".title")?.textContent).toBe("My List")
    expect(el.querySelectorAll(".item").length).toBe(3)

    // Click an item
    ;(el.querySelectorAll(".item")[1] as HTMLElement).click()
    expect(selected).toBe("Banana")
  })

  it("should preserve component identity through re-renders", async () => {
    const TrackedComponent = component("TrackedComponent", () => {
      const el = document.createElement("div")
      el.dataset.created = Date.now().toString()
      return Effect.succeed(el)
    })

    const el1 = await Effect.runPromise(Effect.scoped(TrackedComponent({})))
    const el2 = await Effect.runPromise(Effect.scoped(TrackedComponent({})))

    // Each call creates a new element instance
    expect(el1).not.toBe(el2)
  })

  it("should work with Effect.gen in render", async () => {
    const AsyncGreeting = component("AsyncGreeting", (props: { name: string }) =>
      Effect.gen(function* () {
        // Simulate some async setup
        yield* Effect.sleep(5)
        return yield* div(`Hello, ${props.name}!`)
      })
    )

    const el = await Effect.runPromise(
      Effect.scoped(AsyncGreeting({ name: "World" }))
    )

    expect(el.textContent).toBe("Hello, World!")
  })
})
