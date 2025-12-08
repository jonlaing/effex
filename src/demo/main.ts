import { Effect } from "effect";
import {
  $,
  Signal,
  SignalRegistry,
  Derived,
  component,
  mount,
  when,
  each,
} from "../index.js";
import "./style.css";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const Counter = component("Counter", () =>
  Effect.gen(function* () {
    const count = yield* Signal.make(0);
    const doubled = yield* Derived.sync([count], ([n]) => n * 2);

    return yield* $.div({ className: "card" }, [
      $.p(count.map((c) => `Count: ${c}`)),
      $.p(doubled.map((d) => `Doubled: ${d}`)),
      $.div({ className: "button-group" }, [
        $.button(
          {
            onClick: () => count.update((n) => n - 1),
          },
          "-",
        ),
        $.button({ onClick: () => count.update((n) => n + 1) }, "+"),
      ]),
    ]);
  }),
);

const TodoApp = component("TodoApp", () =>
  Effect.gen(function* () {
    const todos = yield* Signal.make<Todo[]>([
      { id: 1, text: "Learn Effect.ts", completed: true },
      { id: 2, text: "Build Effect UI", completed: false },
      { id: 3, text: "Write tests", completed: false },
    ]);
    const newTodoText = yield* Signal.make("");
    let nextId = 4;

    const stats = yield* Derived.sync([todos], ([items]) => ({
      total: items.length,
      completed: items.filter((t) => t.completed).length,
      remaining: items.filter((t) => !t.completed).length,
    }));

    const addTodo = () =>
      Effect.gen(function* () {
        const text = yield* newTodoText.get;
        if (text.trim()) {
          yield* todos.update((items) => [
            ...items,
            { id: nextId++, text: text.trim(), completed: false },
          ]);
          yield* newTodoText.set("");
        }
      });

    const toggleTodo = (id: number) =>
      todos.update((items) =>
        items.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
      );

    const removeTodo = (id: number) =>
      todos.update((items) => items.filter((t) => t.id !== id));

    return yield* $.div({ className: "todo-app" }, [
      $.h1("Todo List"),
      $.div({ className: "todo-input" }, [
        $.input({
          type: "text",
          placeholder: "What needs to be done?",
          value: newTodoText,
          onInput: (e) => newTodoText.set((e.target as HTMLInputElement).value),
          onKeyDown: (e) => {
            if (e.key === "Enter") {
              return addTodo();
            }
          },
        }),
        $.button({ onClick: () => addTodo() }, "Add"),
      ]),
      $.ul({ className: "todo-list" }, [
        each(
          todos,
          (todo) => String(todo.id),
          (todoReadable) =>
            Effect.gen(function* () {
              const todo = yield* todoReadable.get;
              return yield* $.li(
                {
                  className: todoReadable.map((t) =>
                    t.completed ? "todo-item completed" : "todo-item",
                  ),
                },
                [
                  $.span(
                    {
                      onClick: () => toggleTodo(todo.id),
                      className: "todo-text",
                    },
                    todoReadable.map((t) => t.text),
                  ),
                  $.button(
                    {
                      onClick: () => removeTodo(todo.id),
                      className: "delete-btn",
                    },
                    "×",
                  ),
                ],
              );
            }),
        ),
      ]),
      $.div({ className: "todo-stats" }, [
        $.span(stats.map((s) => `Total: ${s.total}`)),
        $.span(stats.map((s) => ` | Completed: ${s.completed}`)),
        $.span(stats.map((s) => ` | Remaining: ${s.remaining}`)),
      ]),
      when(
        stats.map((s) => s.remaining === 0 && s.total > 0),
        () => $.p({ className: "success-message" }, "All done! 🎉"),
        () => $.span(),
      ),
    ]);
  }),
);

const App = component("App", () =>
  Effect.gen(function* () {
    return yield* $.div({ className: "app" }, [
      $.h1("Effect UI Demo"),
      $.p("A reactive UI framework built on Effect.ts primitives."),
      Counter({}),
      TodoApp({}),
    ]);
  }),
);

const appElement = document.getElementById("app");

const program = Effect.gen(function* () {
  const appEffect = App({});

  yield* mount(appEffect, appElement!);

  // Keep the scope alive forever (until page unload)
  yield* Effect.never;
});

Effect.scoped(program).pipe(
  Effect.provide(SignalRegistry.Live),
  Effect.runPromise,
);
