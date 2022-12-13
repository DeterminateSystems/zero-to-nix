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

        <div class="space-y-8 md:space-y-10 lg:space-y-12">
          <Content>
            <slot />
          </Content>

          <Related v-if="related && related.length > 0" :related="related" />

          <ExternalSources
            v-if="externalSources && externalSources.length > 0"
            :links="externalSources"
          />
        </div>
      </HorizontalContainer>
    </Top>

    <Footer />
  </Page>
</template>

<script setup lang="ts">
import { usePage } from "iles";
import { ConceptPageProps } from "~/logic/content";

type Link = {
  title: string;
  href: string;
};

const {
  frontmatter: { title, description, snippet, externalSources, related },
} = usePage<ConceptPageProps>();
</script>
