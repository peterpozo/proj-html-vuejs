<template>
  <section class="KnowFirst">
    <div class="container smaller">
      <div class="row">
        <div class="col-12 col-md-6 m-md-0 intro">
          <span class="pre-title m-0">Newsletter</span>
          <h2 class="mt-3 mb-3"><span class="title">Know</span> First</h2>
          <p>
            Follow closely and receive content about our company and the news of
            the current market.
          </p>
        </div>
        <div class="col-12 col-md-6">
          <form class="row m-auto items">
            <div class="col-12 mt-0 input-group align-self-center item">
              <input
                type="text"
                name="name"
                class="form-control field-name"
                placeholder="Name"
              />
            </div>
            <div class="col-12 input-group align-self-center item">
              <input
                type="email"
                name="email"
                class="form-control field-email"
                placeholder="Email"
              />
            </div>
            <div class="col-12 input-group align-self-center item">
              <a href="#!" class="button-66">SUBSCRIBE</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "KnowFirst",
};
</script>

<style lang="scss" scoped>
.KnowFirst {
  padding: 130px 0;
  background: #111117;

  h2 {
    color: #fff;
    font-weight: 700;
  }

  p {
    color: #fff;
    opacity: 0.8;
  }

  .item {
    padding: 0 10px;
  }
  a {
    text-decoration: none;
  }
}

.input-group {
  margin: 10px 0;
}

.form-control {
  background-color: #1d1d23;
  color: #676669;
  height: 50px;
  padding: 1rem;
  border-radius: 4px;
  border: 0px;
}
.pre-title {
  width: fit-content;
  margin: auto;
  display: block;
  font-size: 0.9rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #0e7d7f;
}

.title {
  background-color: #19b5bd35;
  padding: 0.3rem 0.6rem;
  border-radius: 0.2rem;
  font-weight: 800;
}
.button-66 {
  background-color: #058283;
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
  margin: 0;
  padding: 10px 20px;
  position: relative;
  text-align: center;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  transition: all 0.2s cubic-bezier(0.22, 0.61, 0.36, 1);
}

.button-66:hover {
  background-color: transparent;
  transform: translateY(-2px);
}
</style>
