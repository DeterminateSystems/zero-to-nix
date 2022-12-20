import { App, Plugin } from 'vue';
import posthog from "posthog-js";

declare module 'vue' {
  interface ComponentCustomProperties {
    $posthog: typeof posthog
  }
}

export interface PosthogPluginInterface
{
    posthog: typeof posthog
}

export interface PosthogPluginOptions {
}

const createPosthogPlugin = (options: PosthogPluginOptions): PosthogPluginInterface => {
  return {
      posthog:  posthog.init(
        "phc_OPJtdGL4gAGdo8VKLsHz4LmKfoOMKkrza1BsBNeUdx4",
        {
          api_host: "https://app.posthog.com",
        }
      ),
  }
}

export const PosthogPlugin: Plugin = {
  install(app: App, options: PosthogPluginOptions) {
      app.config.globalProperties.$posthog = createPosthogPlugin(options)
  }
}
