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
          :total="numQuickStartPages"
          :order="order"
          client:none
        />

        <div class="space-y-6">
          <Summary v-if="summary && summary.length > 0" :items="summary" />

          <Content>
            <slot />
          </Content>
        </div>

        <div class="mt-16 space-y-12">
          <Pagination :order="order" />

          <Separator />

          <FeedbackBar />
        </div>
      </HorizontalContainer>
    </Top>

    <Footer client:load />
  </Page>
</template>

<script setup lang="ts">
import { usePage } from "iles";
import { numQuickStartPages, QuickStartPageProps } from "~/logic/content";
const {
  frontmatter: { title, description, summary, order },
} = usePage<QuickStartPageProps>();
</script>
