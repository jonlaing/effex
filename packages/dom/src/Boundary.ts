import { Duration, Effect, Scope } from "effect";
import type { Element } from "./Element";

/**
 * Options for the suspense boundary.
 */
export interface SuspenseOptions<E, R1, EF> {
  /**
   * Async function that returns the final element.
   * Can fail with error type E if `catch` is provided.
   */
  readonly render: () => Effect.Effect<HTMLElement, E, Scope.Scope | R1>;

  /**
   * Function to render the loading/fallback state.
   * Must have no requirements (will be rendered in detached context if delay > 0).
   */
  readonly fallback: () => Element<EF, never>;

  /**
   * Optional error handler. If provided, errors from render are caught
   * and this function is called to render an error state.
   * Must have no requirements.
   */
  readonly catch?: (error: E) => Element<never, never>;

  /**
   * Delay before showing the fallback.
   * If the render completes before this duration, no fallback is shown.
   * Accepts Effect Duration strings like "200 millis", "1 second", or a number (milliseconds).
   * If not provided, fallback is shown immediately.
   */
  readonly delay?: Duration.DurationInput;
}

/**
 * Suspense boundary for async rendering with loading states.
 *
 * Renders the fallback while waiting for the async render to complete.
 * Optionally delays showing the fallback to avoid loading flashes on fast responses.
 * Optionally catches errors and renders an error state.
 *
 * @example
 * ```ts
 * // Simple - show fallback immediately
 * Boundary.suspense({
 *   render: () => fetchAndRenderUser(userId),
 *   fallback: () => div("Loading..."),
 * })
 * ```
 *
 * @example
 * ```ts
 * // With delay - avoid loading flash on fast responses
 * Boundary.suspense({
 *   render: () => Effect.gen(function* () {
 *     const user = yield* fetchUser(userId)
 *     return yield* UserPage({ user })
 *   }),
 *   fallback: () => div("Loading user..."),
 *   delay: "200 millis",
 * })
 * ```
 *
 * @example
 * ```ts
 * // With error handling
 * Boundary.suspense({
 *   render: () => Effect.gen(function* () {
 *     const user = yield* fetchUser(userId)
 *     return yield* UserPage({ user })
 *   }),
 *   fallback: () => div("Loading..."),
 *   catch: (error) => div(["Error: ", String(error)]),
 *   delay: "200 millis",
 * })
 * ```
 */
export const suspense: {
  // Overload 1: No catch, render cannot fail
  <R1 = never, EF = never>(
    options: SuspenseOptions<never, R1, EF> & { catch?: never },
  ): Element<EF, R1>;

  // Overload 2: With catch, render can fail
  <E, R1 = never, EF = never>(
    options: SuspenseOptions<E, R1, EF> & {
      catch: (error: E) => Element<never, never>;
    },
  ): Element<EF, R1>;
} = <E, R1 = never, EF = never>(
  options: SuspenseOptions<E, R1, EF>,
): Element<EF, R1> => {
  const delayMs =
    options.delay !== undefined ? Duration.toMillis(options.delay) : 0;
  const hasCatch = options.catch !== undefined;
  const hasDelay = delayMs > 0;

  // Dispatch to the appropriate implementation
  if (hasDelay && hasCatch) {
    return suspenseWithDelayAndCatch(
      options.render as () => Effect.Effect<HTMLElement, E, Scope.Scope | R1>,
      options.fallback,
      options.catch as (error: E) => Element<never, never>,
      delayMs,
    ) as Element<EF, R1>;
  } else if (hasDelay) {
    return suspenseWithDelay(
      options.render as () => Effect.Effect<
        HTMLElement,
        never,
        Scope.Scope | R1
      >,
      options.fallback,
      delayMs,
    ) as Element<EF, R1>;
  } else if (hasCatch) {
    return suspenseWithCatch(
      options.render as () => Effect.Effect<HTMLElement, E, Scope.Scope | R1>,
      options.fallback,
      options.catch as (error: E) => Element<never, never>,
    ) as Element<EF, R1>;
  } else {
    return suspenseSimple(
      options.render as () => Effect.Effect<
        HTMLElement,
        never,
        Scope.Scope | R1
      >,
      options.fallback,
    ) as Element<EF, R1>;
  }
};

// Internal implementations

const suspenseSimple = <R1 = never, EF = never>(
  asyncRender: () => Effect.Effect<HTMLElement, never, Scope.Scope | R1>,
  fallbackRender: () => Element<EF, never>,
): Element<EF, R1> =>
  Effect.gen(function* () {
    const scope = yield* Effect.scope;
    const container = document.createElement("div");
    container.style.display = "contents";

    const fallback = yield* fallbackRender();
    container.appendChild(fallback);

    yield* asyncRender().pipe(
      Effect.tap((element) =>
        Effect.sync(() => {
          container.replaceChild(element, fallback);
        }),
      ),
      Effect.forkIn(scope),
    );

    return container as HTMLElement;
  });

const suspenseWithCatch = <E, R1 = never, EF = never>(
  asyncRender: () => Effect.Effect<HTMLElement, E, Scope.Scope | R1>,
  fallbackRender: () => Element<EF, never>,
  catchRender: (error: E) => Element<never, never>,
): Element<EF, R1> =>
  Effect.gen(function* () {
    const scope = yield* Effect.scope;
    const container = document.createElement("div");
    container.style.display = "contents";

    const fallback = yield* fallbackRender();
    container.appendChild(fallback);

    yield* asyncRender().pipe(
      Effect.either,
      Effect.tap((result) =>
        Effect.gen(function* () {
          if (result._tag === "Left") {
            const errorElement = yield* catchRender(result.left);
            container.replaceChild(errorElement, fallback);
          } else {
            container.replaceChild(result.right, fallback);
          }
        }),
      ),
      Effect.forkIn(scope),
    );

    return container as HTMLElement;
  });

const suspenseWithDelay = <R1 = never, EF = never>(
  asyncRender: () => Effect.Effect<HTMLElement, never, Scope.Scope | R1>,
  fallbackRender: () => Element<EF, never>,
  delayMs: number,
): Element<EF, R1> =>
  Effect.gen(function* () {
    const scope = yield* Effect.scope;
    const container = document.createElement("div");
    container.style.display = "contents";

    let completed = false;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    let fallbackElement: HTMLElement | null = null;

    timeoutId = setTimeout(() => {
      if (!completed) {
        Effect.runPromise(
          Effect.gen(function* () {
            fallbackElement = yield* Effect.scoped(fallbackRender());
            if (!completed) {
              container.appendChild(fallbackElement);
            }
          }),
        );
      }
    }, delayMs);

    yield* Effect.addFinalizer(() =>
      Effect.sync(() => {
        if (timeoutId !== null) {
          clearTimeout(timeoutId);
        }
      }),
    );

    yield* asyncRender().pipe(
      Effect.tap((element) =>
        Effect.sync(() => {
          completed = true;
          if (timeoutId !== null) {
            clearTimeout(timeoutId);
            timeoutId = null;
          }
          if (fallbackElement && container.contains(fallbackElement)) {
            container.replaceChild(element, fallbackElement);
          } else {
            container.appendChild(element);
          }
        }),
      ),
      Effect.forkIn(scope),
    );

    return container as HTMLElement;
  });

const suspenseWithDelayAndCatch = <E, R1 = never, EF = never>(
  asyncRender: () => Effect.Effect<HTMLElement, E, Scope.Scope | R1>,
  fallbackRender: () => Element<EF, never>,
  catchRender: (error: E) => Element<never, never>,
  delayMs: number,
): Element<EF, R1> =>
  Effect.gen(function* () {
    const scope = yield* Effect.scope;
    const container = document.createElement("div");
    container.style.display = "contents";

    let completed = false;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    let fallbackElement: HTMLElement | null = null;

    timeoutId = setTimeout(() => {
      if (!completed) {
        Effect.runPromise(
          Effect.gen(function* () {
            fallbackElement = yield* Effect.scoped(fallbackRender());
            if (!completed) {
              container.appendChild(fallbackElement);
            }
          }),
        );
      }
    }, delayMs);

    yield* Effect.addFinalizer(() =>
      Effect.sync(() => {
        if (timeoutId !== null) {
          clearTimeout(timeoutId);
        }
      }),
    );

    yield* asyncRender().pipe(
      Effect.either,
      Effect.tap((result) =>
        Effect.gen(function* () {
          completed = true;
          if (timeoutId !== null) {
            clearTimeout(timeoutId);
            timeoutId = null;
          }

          const newElement =
            result._tag === "Left"
              ? yield* catchRender(result.left)
              : result.right;

          if (fallbackElement && container.contains(fallbackElement)) {
            container.replaceChild(newElement, fallbackElement);
          } else {
            container.appendChild(newElement);
          }
        }),
      ),
      Effect.forkIn(scope),
    );

    return container as HTMLElement;
  });

/**
 * Error boundary that catches errors from a render function and displays a fallback element.
 *
 * @param tryRender - Function that may fail with an error
 * @param catchRender - Function to render the error fallback
 *
 * @example
 * ```ts
 * Boundary.error(
 *   () => riskyComponent(),
 *   (error) => div(["Something went wrong: ", String(error)])
 * )
 * ```
 */
export const error = <E, R1 = never, E2 = never, R2 = never>(
  tryRender: () => Effect.Effect<HTMLElement, E, Scope.Scope | R1>,
  catchRender: (error: E) => Element<E2, R2>,
): Element<E2, R1 | R2> =>
  Effect.gen(function* () {
    const result = yield* tryRender().pipe(Effect.either);

    if (result._tag === "Left") {
      return yield* catchRender(result.left);
    }

    return result.right;
  });

/**
 * Boundary namespace for error and async handling.
 *
 * @example
 * ```ts
 * // Suspense boundary for async loading
 * Boundary.suspense({
 *   render: () => fetchAndRenderData(),
 *   fallback: () => $.div("Loading..."),
 *   catch: (err) => $.div(`Error: ${err}`),
 *   delay: "200 millis",
 * })
 *
 * // Error boundary for catching render errors
 * Boundary.error(
 *   () => riskyComponent(),
 *   (err) => $.div(`Oops: ${err}`)
 * )
 * ```
 */
export const Boundary = {
  suspense,
  error,
} as const;

// Re-export types
export type { SuspenseOptions as BoundarySuspenseOptions };
