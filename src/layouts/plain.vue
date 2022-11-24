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

<script setup lang="ts">
import { usePage } from "iles";
import { PlainPageProps } from "~/logic/content";

const {
  frontmatter: { title },
} = usePage<PlainPageProps>();
</script>
