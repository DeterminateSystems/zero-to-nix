<template layout="base">
  <Page>
    <Top>
      <Navbar client:load />
      <slot />
    </Top>
    <Footer client:load />
  </Page>
</template>
