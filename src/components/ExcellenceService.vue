<template>
  <section class="ExcellenceService">
    <div class="container">
      <div class="row intro">
        <div class="col-12 col-md-9 align-self-center text-md-left">
          <span class="pre-title m-auto ml-md-0">Our business areas</span>
          <h2>Excellence in <span class="title">Services</span></h2>
          <p>
            We are leaders in providing consultancy services with a set of
            cutting-edge technologies and a team of experienced and renowned
            professionals. These are some options that you can hire.
          </p>
        </div>
        <div class="col-12 col-md-3 align-self-end">
          <a href="#!" class="btn mx-auto mr-md-0 ml-md-auto button-66"
            >SEE ALL</a
          >
        </div>
      </div>
      <div class="row justify-content-center items">
        <div
          v-for="eleBox in arrBox"
          :key="eleBox"
          class="col-12 col-md-6 col-lg-4 item"
        >
          <div class="card">
            <font-awesome-icon class="icon" :icon="eleBox.icon" />
            <h4>{{ eleBox.title }}</h4>
            <p>{{ eleBox.paragrafo }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ExcellenceService",
  data() {
    return {
      arrBox: [
        {
          icon: "fa-network-wired",
          title: "Audit & Assurance",
          paragrafo: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
        },
        {
          icon: "fa-briefcase",
          title: "Financial Advisory",
          paragrafo: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
        },
        {
          icon: "fa-chart-simple",
          title: "Analytics and M&A",
          paragrafo: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
        },
        {
          icon: "fa-plane",
          title: "Middle Markenting",
          paragrafo: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
        },
        {
          icon: "fa-globe",
          title: "Legal Consulting",
          paragrafo: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
        },
        {
          icon: "fa-inbox",
          title: "Regolatory",
          paragrafo: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.ExcellenceService {
  padding: 130px 0;
  background-color: #111117;
  color: #fff;

  h2 {
    margin: 1.5rem 0;
    font-weight: 800;
  }

  p {
    color: #fff;
    opacity: 0.7;
  }

  span {
    color: #058283;
  }

  .intro {
    margin-bottom: 50px;
  }
  .pre-title {
    display: block;
    font-size: 0.9rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  .title {
    color: #fff;
    background-color: rgba(25, 181, 189, 0.2078431373);
    padding: 0.3rem 0.6rem;
    border-radius: 0.2rem;
    font-weight: 800;
  }
}
.item {
  margin-bottom: 30px;
}
.card {
  position: relative;
  z-index: 1;
  width: 100%;
  padding: 45px;
  border-radius: 10px;
  border: none;
  transition: all 0.4s ease-out 0s;
  background-color: rgba(255, 255, 255, 0.035);
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;

  .icon {
    margin: 0;
    color: #058283;
    width: 44px;
    height: 44px;
    line-height: 44px;
    text-align: center;
    font-size: 44px;
    display: block;
    -webkit-transition: all 0.4s ease-out 0s;
    -o-transition: all 0.4s ease-out 0s;
    -moz-transition: all 0.4s ease-out 0s;
    transition: all 0.4s ease-out 0s;
  }

  h4 {
    margin: 1.5rem 0;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.2;
    word-wrap: break-word;
  }

  p {
    margin: 0 0 10px;
    white-space: pre-wrap;
    transition: all 0.4s ease-out 0s;
  }
}
.card:hover {
  background-color: rgba(255, 255, 255, 0.035);
  transform: translateY(-7.5px);
  .icon {
    background-color: transparent;
    color: #f9f9f9;
  }
}
.btn {
  width: fit-content;
  max-width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.button-66 {
  position: relative;
  z-index: 2;
  padding: 10px 25px;
  background-color: transparent;
  border-radius: 4px;
  border: 1px solid;
  border-color: #058283;
  color: #fff;
  font-weight: 500;
  -webkit-transition: all 0.4s ease-out 0s;
  -o-transition: all 0.4s ease-out 0s;
  -moz-transition: all 0.4s ease-out 0s;
  transition: all 0.4s ease-out 0s;
}

.button-66:hover {
  background-color: #058283;
}
</style>
