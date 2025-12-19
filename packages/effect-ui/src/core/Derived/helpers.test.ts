import { describe, it, expect } from "vitest";
import { Cause, Chunk, Effect, Exit, Option, Stream } from "effect";
import { Signal } from "../Signal";
import {
  defaultEquals,
  combineReadables,
  getCurrentValues,
  makeLoadingState,
  makeReloadingState,
  makeSuccessState,
  makeSuccessStateWithEquality,
  extractFirstError,
  makeErrorState,
  exitToAsyncState,
  awaitAsyncState,
} from "./helpers";

describe("defaultEquals", () => {
  it("should return true for identical primitives", () => {
    expect(defaultEquals(5, 5)).toBe(true);
    expect(defaultEquals("hello", "hello")).toBe(true);
    expect(defaultEquals(true, true)).toBe(true);
  });

  it("should return false for different primitives", () => {
    expect(defaultEquals(5, 6)).toBe(false);
    expect(defaultEquals("hello", "world")).toBe(false);
    expect(defaultEquals(true, false)).toBe(false);
  });

  it("should return false for equal objects (reference equality)", () => {
    const obj1 = { a: 1 };
    const obj2 = { a: 1 };
    expect(defaultEquals(obj1, obj2)).toBe(false);
  });

  it("should return true for same object reference", () => {
    const obj = { a: 1 };
    expect(defaultEquals(obj, obj)).toBe(true);
  });
});

describe("combineReadables", () => {
  it("should return empty array stream for no readables", async () => {
    const result = await Effect.runPromise(
      Stream.runCollect(combineReadables([])).pipe(Effect.map(Chunk.toArray)),
    );
    expect(result).toEqual([[]]);
  });

  it("should handle single readable", async () => {
    const result = await Effect.runPromise(
      Effect.scoped(
        Effect.gen(function* () {
          const signal = yield* Signal.make(42);
          const combined = combineReadables([signal]);
          const first = yield* Stream.runHead(combined);
          return Option.getOrThrow(first);
        }),
      ),
    );
    expect(result).toEqual([42]);
  });

  it("should combine multiple readables", async () => {
    const result = await Effect.runPromise(
      Effect.scoped(
        Effect.gen(function* () {
          const a = yield* Signal.make(1);
          const b = yield* Signal.make(2);
          const c = yield* Signal.make(3);
          const combined = combineReadables([a, b, c]);
          const first = yield* Stream.runHead(combined);
          return Option.getOrThrow(first);
        }),
      ),
    );
    expect(result).toEqual([1, 2, 3]);
  });

  it("should emit when any dependency changes", async () => {
    const result = await Effect.runPromise(
      Effect.scoped(
        Effect.gen(function* () {
          const a = yield* Signal.make(1);
          const b = yield* Signal.make(10);
          const combined = combineReadables([a, b]);

          // Get initial values
          const initial = yield* Stream.runHead(combined);
          expect(Option.getOrThrow(initial)).toEqual([1, 10]);

          // Update a and verify
          yield* a.set(2);
          const afterA = yield* Stream.runHead(combined);
          expect(Option.getOrThrow(afterA)).toEqual([2, 10]);

          // Update b and verify
          yield* b.set(20);
          const afterB = yield* Stream.runHead(combined);
          expect(Option.getOrThrow(afterB)).toEqual([2, 20]);

          return true;
        }),
      ),
    );
    expect(result).toBe(true);
  });
});

describe("getCurrentValues", () => {
  it("should get current values from all readables", async () => {
    const result = await Effect.runPromise(
      Effect.scoped(
        Effect.gen(function* () {
          const a = yield* Signal.make("hello");
          const b = yield* Signal.make(42);
          const c = yield* Signal.make(true);
          return yield* getCurrentValues([a, b, c]);
        }),
      ),
    );
    expect(result).toEqual(["hello", 42, true]);
  });

  it("should return empty tuple for no readables", async () => {
    const result = await Effect.runPromise(getCurrentValues([]));
    expect(result).toEqual([]);
  });
});

describe("makeLoadingState", () => {
  it("should create initial loading state", () => {
    const state = makeLoadingState<string, Error>();
    expect(state.isLoading).toBe(true);
    expect(Option.isNone(state.value)).toBe(true);
    expect(Option.isNone(state.error)).toBe(true);
  });
});

describe("makeReloadingState", () => {
  it("should preserve previous value while loading", () => {
    const previous = makeSuccessState<string, Error>("previous value");
    const state = makeReloadingState(previous);

    expect(state.isLoading).toBe(true);
    expect(Option.isSome(state.value)).toBe(true);
    expect(Option.getOrThrow(state.value)).toBe("previous value");
    expect(Option.isNone(state.error)).toBe(true);
  });

  it("should clear previous error while reloading", () => {
    const previous = makeErrorState<string, Error>(
      makeLoadingState(),
      Option.some(new Error("old error")),
    );
    const state = makeReloadingState(previous);

    expect(state.isLoading).toBe(true);
    expect(Option.isNone(state.error)).toBe(true);
  });
});

describe("makeSuccessState", () => {
  it("should create success state with value", () => {
    const state = makeSuccessState<number, Error>(42);

    expect(state.isLoading).toBe(false);
    expect(Option.isSome(state.value)).toBe(true);
    expect(Option.getOrThrow(state.value)).toBe(42);
    expect(Option.isNone(state.error)).toBe(true);
  });
});

describe("makeSuccessStateWithEquality", () => {
  it("should update when value is different", () => {
    const previous = makeSuccessState<number, Error>(10);
    const state = makeSuccessStateWithEquality(previous, 20, defaultEquals);

    expect(state.isLoading).toBe(false);
    expect(Option.getOrThrow(state.value)).toBe(20);
  });

  it("should not update when value is equal", () => {
    const previous = makeSuccessState<number, Error>(10);
    const state = makeSuccessStateWithEquality(previous, 10, defaultEquals);

    expect(state.isLoading).toBe(false);
    // Should be same reference for value since it didn't change
    expect(Option.getOrThrow(state.value)).toBe(10);
  });

  it("should update when previous had no value", () => {
    const previous = makeLoadingState<number, Error>();
    const state = makeSuccessStateWithEquality(previous, 42, defaultEquals);

    expect(Option.getOrThrow(state.value)).toBe(42);
  });

  it("should use custom equality function", () => {
    type Item = { id: number; name: string };
    const byId = (a: Item, b: Item) => a.id === b.id;

    const previous = makeSuccessState<Item, Error>({ id: 1, name: "old" });
    const state = makeSuccessStateWithEquality(
      previous,
      { id: 1, name: "new" },
      byId,
    );

    // Should not update because IDs are the same
    expect(state).toEqual({ ...previous, isLoading: false });
  });
});

describe("extractFirstError", () => {
  it("should return none for empty cause", () => {
    const cause = Cause.empty;
    const result = extractFirstError(cause);
    expect(Option.isNone(result)).toBe(true);
  });

  it("should extract first error from fail cause", () => {
    const cause = Cause.fail(new Error("test error"));
    const result = extractFirstError(cause);

    expect(Option.isSome(result)).toBe(true);
    expect(Option.getOrThrow(result).message).toBe("test error");
  });

  it("should extract first error from sequential causes", () => {
    const cause = Cause.sequential(
      Cause.fail(new Error("first")),
      Cause.fail(new Error("second")),
    );
    const result = extractFirstError(cause);

    expect(Option.isSome(result)).toBe(true);
    expect(Option.getOrThrow(result).message).toBe("first");
  });
});

describe("makeErrorState", () => {
  it("should create error state preserving previous value", () => {
    const previous = makeSuccessState<string, string>("data");
    const state = makeErrorState(previous, Option.some("error!"));

    expect(state.isLoading).toBe(false);
    expect(Option.getOrThrow(state.value)).toBe("data");
    expect(Option.getOrThrow(state.error)).toBe("error!");
  });

  it("should handle none error", () => {
    const previous = makeLoadingState<string, string>();
    const state = makeErrorState(previous, Option.none());

    expect(state.isLoading).toBe(false);
    expect(Option.isNone(state.error)).toBe(true);
  });
});

describe("exitToAsyncState", () => {
  it("should convert success exit to success state", () => {
    const previous = makeLoadingState<number, string>();
    const exit = Exit.succeed(42);
    const state = exitToAsyncState(previous, exit, defaultEquals);

    expect(state.isLoading).toBe(false);
    expect(Option.getOrThrow(state.value)).toBe(42);
    expect(Option.isNone(state.error)).toBe(true);
  });

  it("should convert failure exit to error state", () => {
    const previous = makeSuccessState<number, string>(10);
    const exit = Exit.fail("something went wrong");
    const state = exitToAsyncState(previous, exit, defaultEquals);

    expect(state.isLoading).toBe(false);
    expect(Option.getOrThrow(state.value)).toBe(10); // Preserves previous
    expect(Option.getOrThrow(state.error)).toBe("something went wrong");
  });

  it("should use equality function for success", () => {
    const previous = makeSuccessState<number, string>(42);
    const exit = Exit.succeed(42);
    const state = exitToAsyncState(previous, exit, defaultEquals);

    // Value unchanged, should just clear loading
    expect(state.isLoading).toBe(false);
    expect(Option.getOrThrow(state.value)).toBe(42);
  });
});

describe("awaitAsyncState", () => {
  it("should succeed with value when available", async () => {
    const state = makeSuccessState<number, Error>(42);
    const result = await Effect.runPromise(awaitAsyncState(() => state));
    expect(result).toBe(42);
  });

  it("should fail with error when error is present", async () => {
    const state = makeErrorState<number, Error>(
      makeLoadingState(),
      Option.some(new Error("failed")),
    );

    await expect(
      Effect.runPromise(awaitAsyncState(() => state)),
    ).rejects.toThrow("failed");
  });

  it("should fail when no value is available", async () => {
    const state = makeLoadingState<number, Error>();

    await expect(
      Effect.runPromise(awaitAsyncState(() => state)),
    ).rejects.toThrow("No value available");
  });
});
