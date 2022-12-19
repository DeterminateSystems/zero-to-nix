<template>
  <footer class="dark:bg-dark">
    <HorizontalContainer>
      <div class="flex justify-end pt-12 pb-16">
        <p
          class="md:text-normal tracking-tight text-gray dark:text-gray lg:text-lg"
        >
          Copyright &copy; {{ $site.year }}
          <a href="https://determinate.systems" class="hover:text-primary">
            Determinate Systems
          </a>
        </p>
      </div>
    </HorizontalContainer>
  </footer>
  <CookieConsent />
</template>
