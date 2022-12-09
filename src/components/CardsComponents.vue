<template>
  <div class="swiper-slider">
    <div class="row card p-0 text-center">
      <div class="image-over">
        <img src="../assets/images/news-1.jpg" alt="" />
      </div>
      <div
        class="card-footer d-lg-flex align-items-center justify-content-center"
      >
        <a href="#!" class="d-lg-flex align-items-center"
          ><font-awesome-icon icon="fa-regular fa-user" class="icon" />Andrea
          Miller
        </a>
        <a href="#!" class="d-lg-flex align-items-center"
          ><font-awesome-icon icon="fa-solid fa-clock" class="icon" />16 Days
          Ago
        </a>
      </div>
      <div class="card-caption col-12 p-0">
        <div class="card-body">
          <a href="#!"
            ><h4>Working from home is now a trend</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardsComponents",
};
</script>

<style lang="scss" scoped>
.swiper-slider {
  width: 360px;
  margin-right: 30px;
}

.card {
  position: relative;
  z-index: 1;
  width: 100%;
  padding: 45px;
  border-radius: 10px;
  border: none;
  -webkit-transition: all 0.4s ease-out 0s;
  -o-transition: all 0.4s ease-out 0s;
  -moz-transition: all 0.4s ease-out 0s;
  transition: all 0.4s ease-out 0s;
  overflow: hidden;
  height: auto;
  background-color: transparent;
  margin-left: 0;
  margin-right: 0;

  .image-over {
    border-radius: 10px;
    padding-left: 0;
    padding-right: 0;
  }

  .image-over:before {
    content: "";
    position: absolute;
    z-index: 0;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #4e4f52;
    border-radius: 10px;
    opacity: 0.5;
    -webkit-transition: all 0.2s ease-out 0s;
    -o-transition: all 0.2s ease-out 0s;
    -moz-transition: all 0.2s ease-out 0s;
    transition: all 0.2s ease-out 0s;
  }
}

.card-footer {
  position: absolute;
  top: 0;
  width: 100%;
  margin: auto;
  padding: 50px 25px;
  border: none;
  -webkit-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  -o-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  -moz-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  opacity: 0;
  transform: translateY(-100px);

  a {
    line-height: 1.2;
    text-align: center;
    color: #ffffff;
    font-size: 1rem;
    font-weight: 400;
    text-decoration: none;
    margin: 0 10px;
  }

  .icon {
    margin-right: 0.5rem;
  }
}

.card-caption {
  position: absolute;
  width: 100%;
  bottom: 0;
}

.card-body {
  min-height: 1px;
  padding: 50px 25px;
  transform: translateY(100px);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

  a {
    color: #ffffff;
    font-size: 1rem;
    font-weight: 400;
    text-decoration: none;
    line-height: 1.5;
  }

  h4 {
    margin-bottom: 50px;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    color: #f9f9f9;
    margin: 1.5rem 0;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.2;
  }

  p {
    margin: 1.5rem 0 0;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    opacity: 1;
    color: #ffffff;
  }
}
.card:hover .image-over:before {
  opacity: 0.75;
}
.card:hover .card-footer {
  transform: translateY(0);
  color: #ffffff;
  opacity: 1;
}

.card:hover .card-body {
  transform: translateY(0);
}
</style>
