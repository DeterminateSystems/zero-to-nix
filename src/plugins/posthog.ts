import posthog from "posthog-js";
import { App, Plugin } from "vue";

export const PosthogPlugin: Plugin = {
  install(app: App) {
    if (typeof window !== "undefined") {
      posthog.init("phc_OPJtdGL4gAGdo8VKLsHz4LmKfoOMKkrza1BsBNeUdx4", {
        api_host: "https://app.posthog.com",
      });
    }

    app.provide("posthog", posthog);
  },
};
