<template>
  <header>
    <NavbarTop />
    <NavbarBottom />
    <HeroPage />
  </header>
</template>

<script>
import NavbarTop from "@/components/NavbarTop.vue";
import NavbarBottom from "@/components/NavbarBottom.vue";
import HeroPage from "@/components/HeroPage.vue";
export default {
  name: "HeaderPage",
  components: {
    NavbarTop,
    NavbarBottom,
    HeroPage,
  },
};
</script>

<style lang="scss" scoped></style>
