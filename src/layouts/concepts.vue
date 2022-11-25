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
          <Panel>
            <Content>
              <slot />
            </Content>
          </Panel>

          <ReadMore v-if="readMore && readMore.length > 0" :links="readMore" />

          <Related v-if="related && related.length > 0" :related="related" />
        </div>
      </HorizontalContainer>
    </Top>

    <Footer />
  </Page>
</template>

<script setup lang="ts">
import { usePage } from "iles";

type Link = {
  title: string;
  href: string;
};

const {
  frontmatter: { title, snippet, readMore, related },
} = usePage<{
  title: string;
  snippet: string;
  readMore?: Link[];
  related?: string[];
}>();
</script>
