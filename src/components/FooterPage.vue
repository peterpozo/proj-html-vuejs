<template>
  <footer>
    <FooterTop />
    <CopyrightSection />
  </footer>
</template>

<script>
import FooterTop from "@/components/FooterTop.vue";
import CopyrightSection from "@/components/CopyrightSection.vue";
export default {
  name: "FooterPage",
  components: {
    FooterTop,
    CopyrightSection,
  },
};
</script>

<style lang="scss"></style>
