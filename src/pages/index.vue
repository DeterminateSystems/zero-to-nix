<template>
  <HorizontalContainer>
    <Hero
      :title="$site.title"
      :description="$site.description"
      size="lg"
      :buttons="$site.heroButtons"
    />

    <NixTerms />
  </HorizontalContainer>
</template>
