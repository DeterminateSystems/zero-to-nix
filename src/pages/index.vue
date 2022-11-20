<template>
  <HorizontalContainer>
    <Hero :title="$site.title" :description="$site.description" :size="size" />

    <section class="space-y-16">
      <Grid3>
        <HoverableLink
          v-for="link in $site.navbarLinks"
          :key="link.text"
          :text="link.text"
          :href="link.href"
          :size="'normal'"
        />
      </Grid3>

      <NixTerms />
    </section>
  </HorizontalContainer>
</template>
