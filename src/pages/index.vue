<template layout="default">
  <section class="bg-darker-gray py-16 md:py-20 lg:py-24">
    <HorizontalContainer>
      <VerticalContainer>
        <div>
          <div
            class="space-y-4 text-left md:space-y-6 md:text-center lg:space-y-8"
          >
            <h1
              class="text-7xl font-thin tracking-tight text-pale md:text-8xl lg:text-9xl"
            >
              Zero to <span class="text-nix-light-blue">Nix</span>
            </h1>
            <h2
              class="text-2xl font-light tracking-tight text-light-gray md:text-3xl lg:text-4xl"
              v-html="md($site.description)"
            />
          </div>
        </div>

        <div class="text-left md:text-center">
          <TabGroup>
            <TabList class="inline-flex items-center space-x-3">
              <Tab
                v-for="({ text, href, highlight }, idx) in $site.heroButtons"
                :key="idx"
                as="template"
                class="rounded-full tracking-tight transition-colors duration-150 md:text-base lg:text-lg"
                :class="[
                  highlight &&
                    'lg:py-2.4 bg-primary px-3.5 py-1.5 text-white hover:bg-orange md:px-5 md:py-2 lg:px-6',
                  !highlight &&
                    'lg:px-4.5 bg-gray px-3 py-1 text-white hover:bg-light-gray hover:text-dark md:px-3.5 md:py-1.5 lg:py-2',
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
