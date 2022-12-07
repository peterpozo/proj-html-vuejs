<template>
  <nav class="container container-xxl navbar-bottom">
    <div class="row align-items-center">
      <div class="col col-lg-4">
        <a href="#!"
          ><img
            class="logo"
            src="https://nexgen.codings.dev/wp-content/uploads/2021/03/logo.svg"
            alt=""
        /></a>
      </div>
      <div class="col-md-auto"></div>
      <div class="col">
        <ul class="d-flex justify-content-evenly align-items-center">
          <li v-for="eleMenu in arrMenu" :key="eleMenu.text">
            <a :href="eleMenu.url">{{ eleMenu.text }}</a>
          </li>
          <li>
            <a href="#user"><font-awesome-icon icon="fa-regular fa-user" /></a>
          </li>
          <li><a href="#button" class="button-66">get in touch</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavbarBottom",
  data() {
    return {
      arrMenu: [
        {
          url: "#home",
          text: "Home",
        },
        {
          url: "#about",
          text: "About",
        },
        {
          url: "#service",
          text: "Service",
        },
        {
          url: "#team",
          text: "Team",
        },
        {
          url: "#blog",
          text: "Blog",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.navbar-bottom {
  position: absolute;
  z-index: 1000;
  right: 0;
  left: 0;
  padding: 1rem 0;
  .logo {
    height: 45px;
  }
  ul {
    list-style: none;
    margin-top: 1rem;
    text-transform: uppercase;
    font-weight: 500;
    a {
      color: #fff;
      text-decoration: none;
    }
  }
}
.button-66 {
  background-color: #058283;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  display: inherit;
  margin: 0;
  padding: 10px 15px;
  position: relative;
  text-align: center;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  transition: all 0.2s cubic-bezier(0.22, 0.61, 0.36, 1);
}

.button-66:hover {
  background-color: #2e8888;
  transform: translateY(-2px);
}
</style>
