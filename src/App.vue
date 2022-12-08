<template>
  <div>
    <!-- Header  -->
    <HeaderPage />
    <!-- Main  -->
    <MainPage />
    <!-- Footer  -->
    <FooterPage />
  </div>
</template>

<script>
import HeaderPage from "@/components/HeaderPage.vue";
import MainPage from "@/components/MainPage.vue";
import FooterPage from "@/components/FooterPage.vue";
export default {
  name: "App",
  components: {
    HeaderPage,
    MainPage,
    FooterPage,
  },
};
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
:root {
  --bs-font-sans-serif: Montserrat;
}
img {
  width: 100%;
}
p {
  color: #4e4f52;
}
</style>
