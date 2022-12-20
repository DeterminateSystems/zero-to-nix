<template layout="base">
  <Page>
    <Top>
      <Navbar />
      <HorizontalContainer>
        <Hero :title="title" :description="description" client:none />

        <Content>
          <slot />
        </Content>

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
import { PlainPageProps } from "~/logic/content";

const {
  frontmatter: { title, description },
} = usePage<PlainPageProps>();
</script>
