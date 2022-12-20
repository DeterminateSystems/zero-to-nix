import { App, Plugin } from 'vue';
import posthog from "posthog-js";

export interface PosthogPluginInterface
{
    posthog: any
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
      // makes ColoredText available in your Vue.js app as either "$this.coloredText" (in your Source) or "{{ $coloredText }}" in your templates
      app.config.globalProperties.$posthog = createPosthogPlugin(options)
  }
}
