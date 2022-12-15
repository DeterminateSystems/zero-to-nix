<template layout="default">
  <HorizontalContainer>
    <Hero title="404 Not found 😬" size="lg" client:load />

    <div class="prose max-w-none dark:prose-invert lg:prose-lg xl:prose-xl">
      <p>
        We couldn't find a valid page at
        <strong>{{ notFoundHref }}</strong
        >. Perhaps you were looking for one of these Zero to Nix pages:
      </p>

      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/start">Quick start</a>
        </li>
        <li>
          <a href="/concepts">Concepts</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
    </div>
  </HorizontalContainer>
</template>

<script setup lang="ts">
const {
  meta: { href: notFoundHref },
} = usePage();
</script>
