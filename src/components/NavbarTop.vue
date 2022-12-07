<template>
  <div class="container-fluid nav-top">
    <div class="row">
      <div class="col d-flex justify-content-center align-items-center">
        <font-awesome-icon icon="fa-solid fa-clock" />
        <span>Open Hours: Mon - Sat - 9:00 - 18:00</span>
      </div>
      <div class="col">
        <div class="row row-cols-auto">
          <div class="col">
            <font-awesome-icon icon="fa-solid fa-phone" /><span
              >+1 (305) 1234-5678</span
            >
          </div>
          <div class="col">
            <font-awesome-icon icon="fa-solid fa-envelope" />
            <span>hello@example.com</span>
          </div>
          <div class="col">
            <a href="#facebook"
              ><font-awesome-icon icon="fa-brands fa-facebook-f"
            /></a>
          </div>
          <div class="col">
            <a href="#twitter"
              ><font-awesome-icon icon="fa-brands fa-twitter"
            /></a>
          </div>
          <div class="col">
            <a href="#linkedin"
              ><font-awesome-icon icon="fa-brands fa-linkedin-in"
            /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavbarTop",
};
</script>

<style lang="scss" scoped>
.nav-top {
  background-color: #21333e;
  color: white;
  padding: 1rem;

  span {
    margin-left: 0.5rem;
  }
  a {
    --bs-link-color: #fff;
  }
}
</style>
