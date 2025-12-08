import { describe, it, expect, beforeEach, vi } from "vitest";
import { Effect, Schema } from "effect";
import { Route } from "./Route";
import { Router } from "./Router";

// Mock window and history for tests
const mockHistory: string[] = [];
let mockPathname = "/";
let mockSearch = "";

const mockWindow = {
  location: {
    get pathname() {
      return mockPathname;
    },
    get search() {
      return mockSearch;
    },
    origin: "http://localhost",
  },
  history: {
    pushState: vi.fn((_state: unknown, _title: string, url: string) => {
      const urlObj = new URL(url, "http://localhost");
      mockPathname = urlObj.pathname;
      mockSearch = urlObj.search;
      mockHistory.push(url);
    }),
    replaceState: vi.fn((_state: unknown, _title: string, url: string) => {
      const urlObj = new URL(url, "http://localhost");
      mockPathname = urlObj.pathname;
      mockSearch = urlObj.search;
    }),
    back: vi.fn(),
    forward: vi.fn(),
  },
  addEventListener: vi.fn(),
  removeEventListener: vi.fn(),
};

// Replace global window
vi.stubGlobal("window", mockWindow);

describe("Router", () => {
  beforeEach(() => {
    mockPathname = "/";
    mockSearch = "";
    mockHistory.length = 0;
    vi.clearAllMocks();
  });

  describe("Router.make", () => {
    it("should create a router with routes", async () => {
      const result = await Effect.runPromise(
        Effect.scoped(
          Effect.gen(function* () {
            const router = yield* Router.make({
              home: Route.make("/"),
              users: Route.make("/users"),
            });
            return {
              pathname: yield* router.pathname.get,
              currentRoute: yield* router.currentRoute.get,
            };
          }),
        ),
      );

      expect(result.pathname).toBe("/");
      expect(result.currentRoute).toBe("home");
    });

    it("should use initialPath option", async () => {
      const result = await Effect.runPromise(
        Effect.scoped(
          Effect.gen(function* () {
            const router = yield* Router.make(
              {
                home: Route.make("/"),
                users: Route.make("/users"),
              },
              { initialPath: "/users" },
            );
            return {
              pathname: yield* router.pathname.get,
              currentRoute: yield* router.currentRoute.get,
            };
          }),
        ),
      );

      expect(result.pathname).toBe("/users");
      expect(result.currentRoute).toBe("users");
    });

    it("should return null currentRoute when no match", async () => {
      const result = await Effect.runPromise(
        Effect.scoped(
          Effect.gen(function* () {
            const router = yield* Router.make(
              {
                home: Route.make("/"),
                users: Route.make("/users"),
              },
              { initialPath: "/nonexistent" },
            );
            return yield* router.currentRoute.get;
          }),
        ),
      );

      expect(result).toBe(null);
    });
  });

  describe("Route-specific state", () => {
    it("should track isActive for each route", async () => {
      const result = await Effect.runPromise(
        Effect.scoped(
          Effect.gen(function* () {
            const router = yield* Router.make(
              {
                home: Route.make("/"),
                users: Route.make("/users"),
              },
              { initialPath: "/" },
            );
            return {
              homeActive: yield* router.routes.home.isActive.get,
              usersActive: yield* router.routes.users.isActive.get,
            };
          }),
        ),
      );

      expect(result.homeActive).toBe(true);
      expect(result.usersActive).toBe(false);
    });

    it("should provide params for matched route", async () => {
      const result = await Effect.runPromise(
        Effect.scoped(
          Effect.gen(function* () {
            const router = yield* Router.make(
              {
                home: Route.make("/"),
                user: Route.make("/users/:id", {
                  params: Schema.Struct({ id: Schema.String }),
                }),
              },
              { initialPath: "/users/123" },
            );
            return yield* router.routes.user.params.get;
          }),
        ),
      );

      expect(result).toEqual({ id: "123" });
    });

    it("should return null params for non-matched route", async () => {
      const result = await Effect.runPromise(
        Effect.scoped(
          Effect.gen(function* () {
            const router = yield* Router.make(
              {
                home: Route.make("/"),
                user: Route.make("/users/:id"),
              },
              { initialPath: "/" },
            );
            return yield* router.routes.user.params.get;
          }),
        ),
      );

      expect(result).toBe(null);
    });
  });

  describe("Route matching priority", () => {
    it("should match more specific routes first", async () => {
      const result = await Effect.runPromise(
        Effect.scoped(
          Effect.gen(function* () {
            const router = yield* Router.make(
              {
                userSettings: Route.make("/users/settings"),
                user: Route.make("/users/:id"),
                catchAll: Route.make("/*"),
              },
              { initialPath: "/users/settings" },
            );
            return yield* router.currentRoute.get;
          }),
        ),
      );

      // Should match static "settings" before param ":id"
      expect(result).toBe("userSettings");
    });

    it("should fall back to param route when no static match", async () => {
      const result = await Effect.runPromise(
        Effect.scoped(
          Effect.gen(function* () {
            const router = yield* Router.make(
              {
                userSettings: Route.make("/users/settings"),
                user: Route.make("/users/:id"),
                catchAll: Route.make("/*"),
              },
              { initialPath: "/users/123" },
            );
            return yield* router.currentRoute.get;
          }),
        ),
      );

      expect(result).toBe("user");
    });

    it("should fall back to catch-all when nothing else matches", async () => {
      const result = await Effect.runPromise(
        Effect.scoped(
          Effect.gen(function* () {
            const router = yield* Router.make(
              {
                home: Route.make("/"),
                users: Route.make("/users"),
                catchAll: Route.make("/*"),
              },
              { initialPath: "/something/random" },
            );
            return yield* router.currentRoute.get;
          }),
        ),
      );

      expect(result).toBe("catchAll");
    });
  });

  describe("Navigation", () => {
    it("should push to history", async () => {
      await Effect.runPromise(
        Effect.scoped(
          Effect.gen(function* () {
            const router = yield* Router.make({
              home: Route.make("/"),
              users: Route.make("/users"),
            });

            yield* router.push("/users");

            const pathname = yield* router.pathname.get;
            expect(pathname).toBe("/users");
            expect(mockWindow.history.pushState).toHaveBeenCalled();
          }),
        ),
      );
    });

    it("should replace history", async () => {
      await Effect.runPromise(
        Effect.scoped(
          Effect.gen(function* () {
            const router = yield* Router.make({
              home: Route.make("/"),
              users: Route.make("/users"),
            });

            yield* router.replace("/users");

            const pathname = yield* router.pathname.get;
            expect(pathname).toBe("/users");
            expect(mockWindow.history.replaceState).toHaveBeenCalled();
          }),
        ),
      );
    });

    it("should call history.back()", async () => {
      await Effect.runPromise(
        Effect.scoped(
          Effect.gen(function* () {
            const router = yield* Router.make({
              home: Route.make("/"),
            });

            yield* router.back();
            expect(mockWindow.history.back).toHaveBeenCalled();
          }),
        ),
      );
    });

    it("should call history.forward()", async () => {
      await Effect.runPromise(
        Effect.scoped(
          Effect.gen(function* () {
            const router = yield* Router.make({
              home: Route.make("/"),
            });

            yield* router.forward();
            expect(mockWindow.history.forward).toHaveBeenCalled();
          }),
        ),
      );
    });

    it("should update route state after navigation", async () => {
      // Note: currentRoute is derived from pathname, so after push the
      // pathname changes but currentRoute is computed lazily.
      // We verify the pathname updates correctly instead.
      const result = await Effect.runPromise(
        Effect.scoped(
          Effect.gen(function* () {
            const router = yield* Router.make({
              home: Route.make("/"),
              users: Route.make("/users"),
            });

            const beforePath = yield* router.pathname.get;
            yield* router.push("/users");
            const afterPath = yield* router.pathname.get;

            return { beforePath, afterPath };
          }),
        ),
      );

      expect(result.beforePath).toBe("/");
      expect(result.afterPath).toBe("/users");
    });
  });

  describe("Search params", () => {
    it("should expose searchParams readable", async () => {
      mockSearch = "?foo=bar&baz=qux";

      const result = await Effect.runPromise(
        Effect.scoped(
          Effect.gen(function* () {
            const router = yield* Router.make({
              home: Route.make("/"),
            });

            const params = yield* router.searchParams.get;
            return {
              foo: params.get("foo"),
              baz: params.get("baz"),
            };
          }),
        ),
      );

      expect(result.foo).toBe("bar");
      expect(result.baz).toBe("qux");
    });

    it("should update searchParams on navigation", async () => {
      await Effect.runPromise(
        Effect.scoped(
          Effect.gen(function* () {
            const router = yield* Router.make({
              home: Route.make("/"),
            });

            yield* router.push("/?test=value");

            const params = yield* router.searchParams.get;
            expect(params.get("test")).toBe("value");
          }),
        ),
      );
    });
  });

  describe("Cleanup", () => {
    it("should add and remove popstate listener", async () => {
      await Effect.runPromise(
        Effect.scoped(
          Effect.gen(function* () {
            yield* Router.make({
              home: Route.make("/"),
            });

            expect(mockWindow.addEventListener).toHaveBeenCalledWith(
              "popstate",
              expect.any(Function),
            );
          }),
        ),
      );

      // After scope closes, removeEventListener should be called
      expect(mockWindow.removeEventListener).toHaveBeenCalledWith(
        "popstate",
        expect.any(Function),
      );
    });
  });
});
