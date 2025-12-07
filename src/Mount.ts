import { Effect, Scope } from "effect";
import type { Element } from "./Element";

/**
 * Mount an Element into a DOM container. Automatically cleans up when the scope closes.
 *
 * The element must have no errors (Element<never>). If your component can fail,
 * handle all errors before mounting using ErrorBoundary or Effect.catchAll.
 *
 * @param element - The Element to mount (must be error-free)
 * @param container - The DOM container to mount into
 *
 * @example
 * ```ts
 * const app = div([
 *   h1(["Hello, Effect UI!"])
 * ])
 *
 * // Mount the app and run it
 * Effect.runPromise(
 *   Effect.scoped(
 *     mount(app, document.getElementById("root")!)
 *   )
 * )
 * ```
 *
 * @example
 * ```ts
 * // Handle errors before mounting
 * const riskyApp = fetchAndRenderData() // Element<FetchError>
 *
 * const safeApp = ErrorBoundary(
 *   () => riskyApp,
 *   (error) => div(["Failed to load: ", String(error)])
 * ) // Element<never>
 *
 * Effect.runPromise(
 *   Effect.scoped(
 *     mount(safeApp, document.getElementById("root")!)
 *   )
 * )
 * ```
 */
export const mount = (
  element: Element<never>,
  container: HTMLElement,
): Effect.Effect<void, never, Scope.Scope> =>
  Effect.gen(function* () {
    const el = yield* element;
    container.appendChild(el);

    yield* Effect.addFinalizer(() =>
      Effect.sync(() => {
        if (el.parentNode === container) {
          container.removeChild(el);
        }
      }),
    );
  });
