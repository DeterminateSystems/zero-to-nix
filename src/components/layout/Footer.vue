<template>
  <footer class="dark:bg-dark">
    <HorizontalContainer>
      <div class="flex justify-end pt-12 pb-16">
        <p
          class="tracking-tight text-gray dark:text-gray md:text-base lg:text-lg"
        >
          Copyright &copy; {{ year }}
          <a href="https://determinate.systems" class="hover:text-primary">
            Determinate Systems, Inc.
          </a>
        </p>
      </div>
    </HorizontalContainer>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear();
</script>
