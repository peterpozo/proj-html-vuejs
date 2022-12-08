<template>
  <section class="ResultInNumbers">
    <div class="color-overlay"></div>
    <div class="container text-center position-relative">
      <div class="row row-cols-1 d-flex justify-content-center">
        <div class="col mb-3"><span class="top">WHAT ARE WE DOING</span></div>
        <div class="col mb-5">
          <h2><span class="bottom">Results</span> in Numbers</h2>
        </div>
        <div class="col-8 mb-4">
          <div class="row">
            <div class="col">
              <span class="number">128</span><br />
              <span class="text">Certification</span>
            </div>
            <div class="col">
              <span class="number">230</span><br />
              <span class="text">Employees</span>
            </div>
            <div class="col">
              <span class="number">517</span><br />
              <span class="text">Customers</span>
            </div>
            <div class="col">
              <span class="number">94</span><br />
              <span class="text">Countries Served</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ResultInNumbers",
};
</script>

<style lang="scss" scoped>
.ResultInNumbers {
  background: linear-gradient(black, black), url(../assets/images/bg-4.jpg);
  padding: 7rem 0;
  background-position: center;
  background-size: cover;
  background-blend-mode: saturation;
  position: relative;

  h2 {
    font-weight: 800;
    color: #fff;
  }

  span {
    color: #058283;
  }

  .top {
    font-weight: 600;
    font-size: 12px;
    color: #058283;
  }

  .bottom {
    background-color: #19b5bd35;
    padding: 0.3rem 0.6rem;
    border-radius: 0.2rem;
    color: white;
    font-weight: 800;
  }

  .text {
    font-weight: 600;
    color: #fff;
  }

  .number {
    font-weight: 700;
    font-size: 30px;
  }
}

.color-overlay {
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0.7;
  position: absolute;
  top: 0;
}
</style>
