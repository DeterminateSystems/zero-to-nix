<script setup lang="ts">
import { usePage } from "iles";
const {
  frontmatter: { title, description },
} = usePage<{
  title: string;
  description?: string;
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
        />

        <Content>
          <slot />
        </Content>
      </HorizontalContainer>
    </Top>

    <Footer />
  </Page>
</template>
