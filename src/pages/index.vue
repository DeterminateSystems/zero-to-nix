<template layout="default">
  <section class="bg-darker-gray py-24">
    <HorizontalContainer>
      <div class="space-y-8">
        <h1 class="text-6xl tracking-tight text-pale">
          {{ $site.title }}
        </h1>
        <h2 class="text-3xl tracking-tight text-light-gray">
          {{ $site.description }}
        </h2>

        <TabGroup>
          <TabList class="inline-flex space-x-3">
            <Tab
              v-for="({ text, href, highlight }, idx) in $site.heroButtons"
              :key="idx"
              as="template"
              class="rounded-full py-2 px-4 text-lg hover:bg-dark-gray"
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
    </HorizontalContainer>
  </section>

  <HorizontalContainer>
    <section class="my-12 space-y-16">
      <div class="space-y-4">
        <h2 class="text-3xl" id="features">What the Nix ecosystem offers</h2>

        <Features />
      </div>

      <div class="space-y-4">
        <h2 class="text-3xl" id="key-terms">Core Nix terms</h2>

        <NixTerms />
      </div>
    </section>
  </HorizontalContainer>
</template>

<script setup lang="ts">
import { Tab, TabGroup, TabList } from "@headlessui/vue";
</script>
