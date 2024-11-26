/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

import type { PostHog } from "posthog-js";

declare global {
  interface Window {
    posthog: PostHog;

    Alpine: import('alpinejs').Alpine;
  }
}
