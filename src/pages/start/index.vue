<template>
  <HorizontalContainer>
    <Hero
      title="Quick start"
      description="Feel the power of Nix in no time"
      client:load
    />

    <Grid2>
      <HoverableLink
        v-for="(page, idx) in sortedQuickStartPages"
        :key="idx"
        :href="`/start#${page.frontmatter.id}`"
        :order="page.frontmatter.order"
        :text="`${page.frontmatter.title}${
          page.frontmatter.order == 1 ? ' (start here)' : ''
        }`"
        size="normal"
      />
    </Grid2>

    <div class="mt-12 space-y-8">
      <div v-for="(page, idx) in sortedQuickStartPages" :key="idx">
        <div :id="page.id">
          <Content>
            <h1 class="heading" :id="page.frontmatter.id">
              <a
                :href="`#${page.frontmatter.id}`"
                class="heading-anchor"
                aria-label="Permalink for Install Nix"
                tabindex="-1"
              ></a>

              {{ page.frontmatter.order }}. {{ page.title }}
            </h1>

            <component :is="page" />
          </Content>
        </div>
      </div>
    </div>
  </HorizontalContainer>
</template>

<script setup lang="ts">
import { sortedQuickStartPages } from "../../logic/content";
</script>
