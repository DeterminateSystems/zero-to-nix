<template>
  <HorizontalContainer>
    <Hero :title="$site.title" :description="$site.description" size="lg" />

    <section class="space-y-16">
      <Grid3>
        <HoverableLink
          v-for="(link, idx) in $site.navbarLinks"
          :key="idx"
          :text="link.text"
          :href="link.href"
          size="normal"
        />
      </Grid3>

      <NixTerms />
    </section>
  </HorizontalContainer>
</template>
