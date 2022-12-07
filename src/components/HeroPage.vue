<template>
  <section class="hero">
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-bs-ride="true"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="carousel-caption">
            <h1 class="mb-4">Financial Risk</h1>
            <p class="mb-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem,
              ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div class="container text-center">
              <div class="row row-cols-auto d-flex justify-content-center">
                <div class="col">
                  <button class="button-66" type="button">get in touch</button>
                </div>
                <div class="col">
                  <button class="button-66" type="button">get in touch</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="carousel-caption">
            <h1 class="mb-4">Financial Risk</h1>
            <p class="mb-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem,
              ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div class="container text-center">
              <div class="row row-cols-auto d-flex justify-content-center">
                <div class="col">
                  <button class="button-66" type="button">get in touch</button>
                </div>
                <div class="col">
                  <button class="button-66" type="button">get in touch</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="carousel-caption">
            <h1 class="mb-4">Financial Risk</h1>
            <p class="mb-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem,
              ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div class="container text-center">
              <div class="row row-cols-auto d-flex justify-content-center">
                <div class="col">
                  <button class="button-66" type="button">get in touch</button>
                </div>
                <div class="col">
                  <button class="button-66" type="button">get in touch</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroPage",
};
</script>

<style lang="scss" scoped>
#carouselExampleIndicators {
  position: relative;
  height: calc(100vh - 50px);
  width: 100%;
}

#carouselExampleIndicators .carousel-inner {
  position: relative;
  height: 100%;
  width: 100%;
  background: #000;
}
#carouselExampleIndicators .carousel-inner::before {
  position: absolute;
  content: "";
  background: rgba(0, 0, 0, 0.45);
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
}

#carouselExampleIndicators .carousel-inner .carousel-item {
  position: relative;
  height: 100%;
  width: 100%;
  background: url(../assets/images/bg-1.jpg);
  background-size: 100% 100%;
  background-position: center;
}

#carouselExampleIndicators .carousel-inner .carousel-item:nth-child(2) {
  position: relative;
  background: url(../assets/images/bg-2.jpg);
  background-size: 100% 100%;
  background-position: center;
}
#carouselExampleIndicators .carousel-inner .carousel-item:nth-child(3) {
  position: relative;
  background: url(../assets/images/bg-3.jpg);
  background-size: 100% 100%;
  background-position: center;
}
#carouselExampleIndicators .carousel-item .carousel-caption {
  position: absolute;
  right: 15%;
  bottom: 35%;
  left: 15%;
  color: #fff;
  text-align: center;
  z-index: 2;
  padding: 95px 20px;
  max-width: 655px;
  margin: 0 auto;

  h1 {
    font-weight: bolder;
    font-size: 70px;
  }

  p {
    color: #bcbdbd;
  }
}

#carouselExampleIndicators .carousel-indicators button {
  background-color: transparent;
  border: 1px solid #058283;
  border-radius: 2rem;
}
#carouselExampleIndicators .carousel-indicators .active {
  background-color: #058283;
}
.button-66 {
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
  background-color: #058283;
  transform: translateY(-2px);
}
</style>
