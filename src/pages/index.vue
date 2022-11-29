<template>
  <HorizontalContainer>
    <Hero
      :title="$site.title"
      :description="$site.description"
      size="lg"
      :buttons="$site.heroButtons"
    />

    <section class="space-y-16">
      <Grid3>
        <HoverableLink
          v-for="(link, idx) in $site.heroButtons"
          :key="idx"
          :text="link.text"
          :href="link.href"
          size="normal"
        />
      </Grid3>

      <div class="space-y-4">
        <h2 class="text-3xl" id="features">What Nix offers</h2>

        <Features />
      </div>

      <div class="space-y-4">
        <h2 class="text-3xl" id="key-terms">Core Nix terms</h2>

        <NixTerms />
      </div>
    </section>
  </HorizontalContainer>
</template>
