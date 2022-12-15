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
          size="normal"
          client:load
        />

        <div class="space-y-6">
          <Summary v-if="summary && summary.length > 0" :items="summary" />

          <Content>
            <slot />
          </Content>

          <PageSurvey client:visible />
        </div>

        <div class="mt-16">
          <Pagination :order="order" />
        </div>
      </HorizontalContainer>
    </Top>
    <Footer />
  </Page>
</template>

<script setup lang="ts">
import { usePage } from "iles";
import { QuickStartPageProps } from "~/logic/content";
const {
  frontmatter: { title, description, summary, order },
} = usePage<QuickStartPageProps>();
</script>
