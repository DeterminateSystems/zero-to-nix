<template layout="default">
  <section class="bg-darker-gray py-16 md:py-20 lg:py-24">
    <HorizontalContainer>
      <div class="space-y-6 md:space-y-8 lg:space-y-10">
        <div>
          <div class="space-y-4 md:space-y-6 lg:space-y-8">
            <h1
              class="text-5xl tracking-tight text-pale md:text-6xl lg:text-7xl"
            >
              {{ $site.title }}
            </h1>
            <h2
              class="text-xl tracking-tight text-light-gray md:text-2xl lg:text-3xl"
            >
              {{ $site.description }}
            </h2>
          </div>
        </div>

        <div>
          <TabGroup>
            <TabList class="inline-flex space-x-3">
              <Tab
                v-for="({ text, href, highlight }, idx) in $site.heroButtons"
                :key="idx"
                as="template"
                class="rounded-full py-2 px-4 text-sm hover:bg-dark-gray md:text-base lg:text-lg"
                :class="[
                  highlight && 'bg-primary text-pale',
                  !highlight && 'bg-gray text-pale',
                ]"
              >
                <a :href="href">
                  {{ text }}
                </a>
              </Tab>
            </TabList>
          </TabGroup>
        </div>
      </div>
    </HorizontalContainer>
  </section>

  <HorizontalContainer>
    <section class="my-12 space-y-16">
      <div class="space-y-6">
        <h2
          class="text-2xl tracking-tight hover:text-gray dark:hover:text-light-gray md:text-3xl lg:text-4xl"
          id="key-terms"
        >
          <a href="#key-terms">Core Nix components</a>
        </h2>

        <NixTerms />
      </div>

      <div class="space-y-6">
        <h2
          class="text-3xl tracking-tight hover:text-gray dark:hover:text-light-gray md:text-3xl lg:text-4xl"
          id="features"
        >
          <a href="#features">What the Nix ecosystem offers</a>
        </h2>

        <Features />
      </div>
    </section>
  </HorizontalContainer>
</template>

<script setup lang="ts">
import { Tab, TabGroup, TabList } from "@headlessui/vue";
</script>
