<template layout="default">
  <HorizontalContainer>
    <Hero
      :title="$site.title"
      :description="$site.description"
      size="lg"
      :buttons="$site.heroButtons"
    />

    <section class="space-y-16">
      <div class="space-y-4">
        <h2 class="text-3xl" id="features">What the Nix ecosystem offers</h2>

        <Features />
      </div>

      <div class="space-y-4">
        <h2 class="text-3xl" id="key-terms">Core Nix terms</h2>

        <NixTerms />
      </div>
    </section>
  </HorizontalContainer>
</template>
