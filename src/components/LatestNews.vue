<template>
  <section class="LatestNews">
    <div class="container">
      <div class="row row-cols-1 mb-5">
        <div class="col mb-3">
          <span class="top">Our editorial content</span>
        </div>
        <div class="col mb-3">
          <h2>Lates <span class="bottom">News</span></h2>
        </div>
        <div class="row row-cols-2 d-flex justify-content-between">
          <div class="col-9">
            <p>
              Every week we publish content about what is best in the business
              world.
            </p>
          </div>
          <div class="col-2">
            <button class="button-66" type="button">see all</button>
          </div>
        </div>
      </div>
      <!--image card start-->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <CardsComponents />
          <CardsComponents />
          <CardsComponents />
        </div>
      </div>

      <!--image card end-->
    </div>
  </section>
</template>

<script>
import CardsComponents from "@/components/CardsComponents.vue";
export default {
  name: "LatestNews",
  components: {
    CardsComponents,
  },
};
</script>

<style lang="scss" scoped>
.LatestNews {
  padding: 130px 0;
  background-color: #eef4ed;
}
h2 {
  font-weight: 800;
}

span {
  color: #058283;
}

.top {
  font-weight: 600;
  font-size: 12px;
  text-transform: uppercase;
}

.bottom {
  background-color: #19b5bd35;
  padding: 0.3rem 0.6rem;
  border-radius: 0.2rem;
  font-weight: 800;
  color: #058283;
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
  color: #058283;
}
.swiper-container {
  padding: 0 15px;
}

.swiper-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  transition-property: transform;
  box-sizing: content-box;
}
</style>
