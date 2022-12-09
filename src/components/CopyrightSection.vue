<template>
  <section class="CopyrightSection p-3">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6 p-3 text-center text-lg-left">
          <p>Enjoy the low price. We are tracking any intention of piracy.</p>
        </div>
        <div class="col-12 col-md-6 p-3 text-center text-lg-right">
          <p>
            © 2022 NEXGEN is Proudly Powered by <a href="#!">Peter Pozo.</a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "CopyrightSection",
};
</script>

<style lang="scss" scoped>
.CopyrightSection {
  background-color: #060a0c;

  p {
    color: #c0c3d0;
    font-size: 14px;
    line-height: 1.8;
    font-weight: 400;
    margin-bottom: 0;
  }

  a {
    text-decoration: none;
    color: #058283;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
  }
}
</style>
