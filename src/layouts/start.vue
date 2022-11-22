<script setup lang="ts">
import { usePage } from "iles";
const {
  frontmatter: { title, description, summary, order },
} = usePage<{
  title: string;
  description?: string;
  summary?: string[];
  order: number;
}>();
</script>

<template layout="base">
  <Page>
    <Top>
      <Navbar />
      <HorizontalContainer>
        <Hero
          :title="title"
          :description="description"
          :breadcrumb="{
            back: { title: 'Quick start', href: '/start' },
            title,
          }"
          :size="'normal'"
        />

        <Panel>
          <div class="space-y-6">
            <Summary v-if="summary.length > 0" :items="summary" />

            <Content>
              <slot />
            </Content>
          </div>

          <div class="mt-16">
            <Pagination :order="order" />
          </div>
        </Panel>
      </HorizontalContainer>
    </Top>

    <Footer />
  </Page>
</template>
