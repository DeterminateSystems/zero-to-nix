<template layout="base">
  <Page>
    <Top>
      <Navbar />
      <HorizontalContainer>
        <Hero
          :title="title"
          :description="snippet"
          :breadcrumb="{
            back: { title: 'Concepts', href: '/concepts' },
            title,
          }"
        />

        <QuickStart />

        <div class="space-y-8 md:space-y-10 lg:space-y-12">
          <Content>
            <slot />
          </Content>

          <Related v-if="hasRelated" :related="related" />

          <ExternalSources
            v-if="hasExternalSources"
            :links="externalSources"
            :showTitle="true"
          />
        </div>

        <div class="mt-16 space-y-12">
          <Separator />
          <FeedbackBar />
        </div>
      </HorizontalContainer>
    </Top>

    <Footer />
  </Page>
</template>

<script setup lang="ts">
import { usePage } from "iles";
import { ConceptPageProps } from "~/logic/content";

const {
  frontmatter: { title, snippet, externalSources, related, wip },
} = usePage<ConceptPageProps>();

const hasRelated = related && related.length > 0;
const hasExternalSources = externalSources && externalSources.length > 0;
</script>
