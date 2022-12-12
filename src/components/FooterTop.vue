<template>
  <section class="FooterTop footer">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-3 footer-left">
          <!-- Navbar Brand  -->
          <a href="#!"
            ><img
              class="logo-footer"
              src="../assets/images/logo.svg"
              alt="logo-footer"
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
        <div class="col-12 col-lg-9 p-0 footer-right">
          <div class="row items">
            <div
              class="col-12 col-lg-4 item"
              v-for="eleFooter in arrFooter"
              :key="eleFooter"
            >
              <div class="card">
                <h4 class="mt-0">{{ eleFooter.title }}</h4>
                <a href="#!"
                  ><font-awesome-icon
                    :icon="eleFooter.icon"
                    class="arrow-right"
                  />{{ eleFooter.paragrafo }}</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "FooterTop",
  data() {
    return {
      arrFooter: [
        {
          icon: "fa-chevron-right",
          title: "Abaout",
          paragrafo: "The Company",
        },
        {
          icon: "fa-chevron-right",
          title: "Service",
          paragrafo: "Audit & Assurance",
        },
        {
          icon: "fa-chevron-right",
          title: "Support",
          paragrafo: "Responsability",
        },
      ],
    };
  },
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

  .card {
    background-color: rgba(255, 255, 255, 0.035);
    position: relative;
    z-index: 1;
    width: 100%;
    padding: 45px;
    border-radius: 10px;
    border: none;
    transition: all 0.4s ease-out 0s;

    h4 {
      margin: 1.5rem 0;
      color: #f9f9f9;
      font-size: 1.5rem;
      font-weight: 700;
      line-height: 1.2;
    }

    a {
      margin: 0 0 0.5rem;
      color: #c0c3d0;
      text-decoration: none;
    }

    a:hover {
      color: #058283;
    }

    .arrow-right {
      margin-right: 10px;
    }
  }
}
.item {
  margin-bottom: 30px;
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
.logo-footer {
  width: 55%;
}
@media (max-width: 991px) {
  .footer {
    text-align: center;
  }

  .logo-footer {
    width: 25%;
  }
  .button-67 {
    margin: 10px auto 50px;
  }

  .arrow-right {
    display: none;
  }
}
</style>
