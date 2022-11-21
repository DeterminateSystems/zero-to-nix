<script setup lang="ts">
import { usePage } from "iles";

const {
  frontmatter: { title },
} = usePage<{
  title: string;
}>();
</script>

<template layout="base">
  <Page>
    <Top>
      <Navbar />
      <HorizontalContainer>
        <Hero :title="title" />

        <Panel>
          <Content>
            <slot />
          </Content>
        </Panel>
      </HorizontalContainer>
    </Top>

    <Footer />
  </Page>
</template>
