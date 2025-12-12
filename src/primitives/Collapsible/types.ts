import type { Effect } from "effect";
import type { Readable } from "@core/Readable";
import type { Signal } from "@core/Signal";
import type { Element } from "@dom/Element";

/**
 * Context shared between Collapsible parts.
 */
export interface CollapsibleContext {
  /** Whether the collapsible is currently open */
  readonly isOpen: Readable<boolean>;
  /** Toggle the open state */
  readonly toggle: () => Effect.Effect<void>;
  /** Open the collapsible */
  readonly open: () => Effect.Effect<void>;
  /** Close the collapsible */
  readonly close: () => Effect.Effect<void>;
  /** Unique ID for ARIA attributes */
  readonly contentId: string;
  /** Whether the collapsible is disabled */
  readonly disabled: Readable<boolean>;
}

/**
 * Props for Collapsible.Root
 */
export interface CollapsibleRootProps {
  /** Controlled open state - if provided, component is controlled */
  readonly open?: Signal<boolean>;
  /** Default open state for uncontrolled usage */
  readonly defaultOpen?: boolean;
  /** Whether the collapsible is disabled */
  readonly disabled?: boolean | Readable<boolean>;
  /** Callback when open state changes */
  readonly onOpenChange?: (open: boolean) => Effect.Effect<void>;
}

/**
 * Props for Collapsible.Trigger
 */
export interface CollapsibleTriggerProps {
  /** Element to render as trigger (default: button) */
  readonly as?: "button" | "div";
  /** Additional class names */
  readonly class?: string | Readable<string>;
}

/** Children type for Collapsible.Trigger */
export type CollapsibleTriggerChildren = Element | string | Readable<string>;

/**
 * Props for Collapsible.Content
 */
export interface CollapsibleContentProps {
  /** Additional class names for the outer container */
  readonly class?: string | Readable<string>;
}

/** Children type for Collapsible.Content */
export type CollapsibleContentChildren = Element | Element[];
