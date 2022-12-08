<template>
  <section class="TeamOfExperts">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-8 align-self-top text-md-left text">
          <div class="row intro">
            <div class="col-12 p-0">
              <span class="pre-title">We like what we do</span>
              <h2 class="mt-3 mb-3">
                <span class="title">Team</span> of Experts
              </h2>
              <p>
                Ethics and integrity are the bases on which our professionals
                build their careers.
                <br />
                They are fundamentals that become daily attitudes.
              </p>
            </div>
          </div>
          <div class="row items text-left">
            <div class="col-12 col-md-6 p-0">
              <div class="row item">
                <div class="col-4 p-0 pr-3 align-self-center">
                  <img
                    src="../assets/images/team-1.jpg"
                    alt="person"
                    class="person"
                  />
                </div>
                <div class="col-8 align-self-center text-left">
                  <h4>David Cooper</h4>
                  <p>CTO & CO-FOUNDER</p>
                  <ul class="navbar-nav social share-list ml-auto">
                    <li class="nav-item">
                      <a href="#"
                        ><font-awesome-icon icon="fa-brands fa-facebook-f"
                      /></a>
                    </li>
                    <li class="nav-item">
                      <a href="#"
                        ><font-awesome-icon icon="fa-brands fa-twitter"
                      /></a>
                    </li>
                    <li class="nav-item">
                      <a href="#"
                        ><font-awesome-icon icon="fa-brands fa-linkedin-in"
                      /></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="row item">
                <div class="col-4 p-0 pr-3 align-self-center">
                  <img
                    src="../assets/images/team-2.jpg"
                    alt="person"
                    class="person"
                  />
                </div>
                <div class="col-8 align-self-center text-left">
                  <h4>Emma Lopez</h4>
                  <p>CHIEF MARKETING</p>
                  <ul class="navbar-nav social share-list ml-auto">
                    <li class="nav-item">
                      <a href="#"
                        ><font-awesome-icon icon="fa-brands fa-facebook-f"
                      /></a>
                    </li>
                    <li class="nav-item">
                      <a href="#"
                        ><font-awesome-icon icon="fa-brands fa-twitter"
                      /></a>
                    </li>
                    <li class="nav-item">
                      <a href="#"
                        ><font-awesome-icon icon="fa-brands fa-linkedin-in"
                      /></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 p-0">
              <div class="row item">
                <div class="col-4 p-0 pr-3 align-self-center">
                  <img
                    src="../assets/images/team-3.jpg"
                    alt="person"
                    class="person"
                  />
                </div>
                <div class="col-8 align-self-center text-left">
                  <h4>Oliver Jones</h4>
                  <p>CHIEF PROCURAMENT</p>
                  <ul class="navbar-nav social share-list ml-auto">
                    <li class="nav-item">
                      <a href="#"
                        ><font-awesome-icon icon="fa-brands fa-facebook-f"
                      /></a>
                    </li>
                    <li class="nav-item">
                      <a href="#"
                        ><font-awesome-icon icon="fa-brands fa-twitter"
                      /></a>
                    </li>
                    <li class="nav-item">
                      <a href="#"
                        ><font-awesome-icon icon="fa-brands fa-linkedin-in"
                      /></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="row item">
                <div class="col-4 p-0 pr-3 align-self-center">
                  <img
                    src="../assets/images/team-4.jpg"
                    alt="person"
                    class="person"
                  />
                </div>
                <div class="col-8 align-self-center text-left">
                  <h4>T. Johnson</h4>
                  <p>CEO & PRESIDENT</p>
                  <ul class="navbar-nav social share-list ml-auto">
                    <li class="nav-item">
                      <a href="#"
                        ><font-awesome-icon icon="fa-brands fa-facebook-f"
                      /></a>
                    </li>
                    <li class="nav-item">
                      <a href="#"
                        ><font-awesome-icon icon="fa-brands fa-twitter"
                      /></a>
                    </li>
                    <li class="nav-item">
                      <a href="#"
                        ><font-awesome-icon icon="fa-brands fa-linkedin-in"
                      /></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col col-lg-4 col-xl-4 col-xxl-4 align-self-end">
          <div class="quote">
            <div class="quote-content">
              <h4>President Speech</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent ut lacinia diam.
              </p>
              <p>
                Vivamus efficitur et est quis posuere. Nulla sollicitudin
                vulputate dui, id pretium tortor congue eu. Integer aliquet
                justo eu quam volutpat ullamcorper.
              </p>
              <p>
                Duis ut hendrerit mauris. Phasellus faucibus ut enim vel
                tincidunt. Nunc venenatis a dui et laoreet.
              </p>
              <h5>T. Johnson</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TeamOfExperts",
};
</script>

<style lang="scss" scoped>
.TeamOfExperts {
  padding: 130px 0;
  .item {
    margin-bottom: 50px;
  }
}
.intro {
  margin-bottom: 50px;
}
.person {
  width: 100%;
  border-radius: 5px;
}
.share-list {
  margin: 0.5rem 0 0 0;
  display: -webkit-inline-box;

  .nav-link {
    padding: 0;
  }
}
h2 {
  font-weight: 800;
}
.pre-title {
  color: #058283;
  font-weight: 600;
  font-size: 12px;
  text-transform: uppercase;
}

.title {
  background-color: #daeced;
  padding: 0.3rem 0.6rem;
  border-radius: 0.2rem;
  font-weight: 800;
}

.nav-item {
  width: 40px;
  height: 40px;
  margin-right: 5px;
  display: inline-block;
  background: #daeced;
  border-radius: 100px;
  text-align: center;
  line-height: 40px;
  font-size: 18px;

  a {
    color: #058283;
  }
}
.quote {
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 35px;
  background-color: #058283;
  border-radius: 4px;
  color: #fff;
}
.quote-content p {
  color: #ffff;
  opacity: 0.8;
}
</style>
