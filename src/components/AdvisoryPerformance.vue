<template>
  <section class="AdvisoryPerformance">
    <div class="container text-center">
      <div class="row row-cols-1 d-flex justify-content-center">
        <div class="col mb-3"><span class="top">INTRODUCTION VIDEO</span></div>
        <div class="col mb-3">
          <h2>Advisory <span class="bottom">Performance</span></h2>
        </div>
        <div class="col-7 mb-4">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
            nulla dolores deserunt, deleniti id consequuntur eveniet.
          </p>
        </div>
        <div class="col-8 d-flex justify-content-center align-items-center">
          <img
            src="../assets/images/video-1.jpg"
            alt="video"
            class="imgVideo"
          />
          <font-awesome-icon icon="fa-solid fa-play" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AdvisoryPerformance",
};
</script>

<style lang="scss" scoped>
.AdvisoryPerformance {
  padding: 130px 0;

  h2 {
    font-weight: 800;
  }

  span {
    color: #058283;
  }

  .top {
    font-weight: 600;
    font-size: 12px;
  }

  .bottom {
    background-color: #daeced;
    padding: 0.3rem 0.6rem;
    border-radius: 0.2rem;
    font-weight: 800;
  }
}

.imgVideo {
  position: relative;
}
.fa-play {
  position: absolute;
  z-index: 999;
  font-size: 5rem;
  color: #ffffffcc;
}
</style>
