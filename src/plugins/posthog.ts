import { App, Plugin } from 'vue';
import posthog from "posthog-js";

export interface PosthogPluginOptions {
}

export const PosthogPlugin: Plugin = {
  install(app: App, options: PosthogPluginOptions) {
    if (typeof window !== "undefined") {
      console.log("lolfuck")
      posthog.init(
        "phc_OPJtdGL4gAGdo8VKLsHz4LmKfoOMKkrza1BsBNeUdx4",
        {
          api_host: "https://app.posthog.com",
        }
      );
    }

    app.provide('posthog', posthog)
  }
}
