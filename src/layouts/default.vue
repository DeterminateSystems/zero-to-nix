<template layout="base">
  <Page>
    <Top>
      <Navbar />
      <slot />
    </Top>
    <Footer client:load />
  </Page>
</template>
