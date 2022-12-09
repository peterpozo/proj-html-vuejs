<template>
  <section class="FooterTop footer">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-3 footer-left">
          <!-- Navbar Brand  -->
          <a href="#!"
            ><img src="../assets/images/logo.svg" alt="logo-footer"
          /></a>
          <p>A Functional HTML Template <br />for Corporate & Business.</p>
          <ul class="navbar-nav">
            <li class="nav-item">
              <a href="#!" class="nav-link"
                ><font-awesome-icon icon="fa-solid fa-phone" class="icon" /> +1
                (305) 1234-5678</a
              >
            </li>
            <li class="nav-item">
              <a href="#!" class="nav-link"
                ><font-awesome-icon icon="fa-solid fa-envelope" class="icon" />
                hello@example.com</a
              >
            </li>
            <li class="nav-item">
              <a href="#!" class="nav-link"
                ><font-awesome-icon
                  icon="fa-solid fa-location-dot"
                  class="icon"
                />
                Main Avenue, 987</a
              >
            </li>
            <li class="nav-item mt-4">
              <button class="button-67" type="button">GET IN TOUCH</button>
            </li>
          </ul>
        </div>
        <div class="col-12 col-lg-9 p-0 footer-right"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "FooterTop",
};
</script>

<style lang="scss" scoped>
.FooterTop {
  position: relative;
  width: 100%;
  padding: 130px 0;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  color: #c0c3d0;

  .icon {
    margin-right: 0.5rem;
  }
}

.footer {
  background-image: url(../assets/images/bg-7.jpg);
}

p {
  margin: 1.5rem 0;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #c0c3d0;
}

.button-67 {
  background-color: transparent;
  text-transform: uppercase;
  font-weight: 500;
  border-radius: 4px;
  border: 1px solid #058283;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inherit;
  font-size: 18px;
  line-height: 24px;
  padding: 10px 20px;
  text-align: center;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  transition: all 0.2s cubic-bezier(0.22, 0.61, 0.36, 1);
  width: fit-content;
}

.button-67:hover {
  background-color: #058283;
  transform: translateY(-2px);
  width: fit-content;
  color: #fff;
}
</style>
