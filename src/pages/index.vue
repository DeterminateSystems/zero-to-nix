<template layout="default">
  <section class="bg-darker-gray py-16 md:py-20 lg:py-24">
    <HorizontalContainer>
      <VerticalContainer>
        <div>
          <div class="space-y-4 md:space-y-6 lg:space-y-8">
            <h1
              class="text-5xl tracking-tight text-pale md:text-6xl lg:text-7xl"
            >
              {{ $site.title }}
            </h1>
            <h2
              class="one-liner text-xl tracking-tight text-light-gray md:text-2xl lg:text-3xl"
              v-html="md($site.description)"
            />
          </div>
        </div>

        <div>
          <TabGroup>
            <TabList class="inline-flex items-center space-x-3">
              <Tab
                v-for="({ text, href, highlight }, idx) in $site.heroButtons"
                :key="idx"
                as="template"
                class="rounded-full tracking-tight transition-colors duration-150 md:text-base lg:text-lg"
                :class="[
                  highlight &&
                    'lg:py-2.4 bg-primary py-1.5 px-3.5 text-white hover:bg-orange md:py-2 md:px-5 lg:px-6',
                  !highlight &&
                    'lg:px-4.5 bg-gray py-1 px-3 text-white hover:bg-light-gray hover:text-dark md:py-1.5 md:px-3.5 lg:py-2',
                ]"
              >
                <a
                  :href="href"
                  :class="[highlight && 'font-bold md:text-lg lg:text-xl']"
                >
                  {{ text }}
                </a>
              </Tab>
            </TabList>
          </TabGroup>
        </div>
      </VerticalContainer>
    </HorizontalContainer>
  </section>

  <HorizontalContainer>
    <section class="my-12 space-y-16">
      <div class="space-y-6">
        <h2
          class="text-2xl tracking-tight hover:text-gray dark:hover:text-light-gray md:text-3xl lg:text-4xl"
          id="features"
        >
          <a href="#features">What the Nix ecosystem offers</a>
        </h2>

        <Features />
      </div>
      <div class="space-y-6">
        <h2
          class="text-2xl tracking-tight hover:text-gray dark:hover:text-light-gray md:text-3xl lg:text-4xl"
          id="key-terms"
        >
          <a href="#key-terms">Core Nix components</a>
        </h2>

        <NixTerms />
      </div>

      <div class="mt-12">
        <Signup client:load />
      </div>
    </section>
  </HorizontalContainer>
</template>

<script setup lang="ts">
import { Tab, TabGroup, TabList } from "@headlessui/vue";
import { md } from "~/logic/content";
</script>
