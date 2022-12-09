<template>
  <section class="GetTouch">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-8 align-self-center text">
          <div class="row intro">
            <div class="col-12 p-0">
              <span class="pre-title m-0">Send a message</span>
              <h2 class="mt-3 mb-3">
                Get in <span class="bottom">Touch</span>
              </h2>
              <p>We will respond to your message as soon as possible.</p>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-md-6 p-2">
              <input
                type="text"
                name="name"
                class="form-control field-name"
                placeholder="Name"
              />
            </div>
            <div class="col-12 col-md-6 p-2">
              <input
                type="text"
                name="email"
                class="form-control field-name"
                placeholder="Email"
              />
            </div>
            <div class="col-12 col-md-6 p-2">
              <input
                type="text"
                name="phone"
                class="form-control field-name"
                placeholder="Phone"
              />
            </div>
            <div class="col-12 col-md-6 p-2 position">
              <font-awesome-icon icon="fa-solid fa-chevron-down" class="icon" />
              <select name="info" class="form-control field-info">
                <option>More Info</option>
                <option>More Info</option>
                <option>More Info</option>
                <option>More Info</option>
              </select>
            </div>
            <div class="col-12 p-2">
              <textarea
                name="message"
                class="form-control field-message"
                placeholder="Message"
              ></textarea>
            </div>
            <div class="col-12 p-2">
              <a href="#!">SEND</a>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div class="contacts">
            <h4>Example Inc.</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Praesent diam lacus, dapibus sed imperdiet consectetur.</p>
            <ul class="navbar-nav">
              <li class="nav-item">
                <a href="#!" class="nav-link"
                  ><font-awesome-icon icon="fa-solid fa-phone" /> +1 (305)
                  1234-5678</a
                >
              </li>
              <li class="nav-item">
                <a href="#!" class="nav-link"
                  ><font-awesome-icon icon="fa-solid fa-envelope" />
                  hello@example.com</a
                >
              </li>
              <li class="nav-item">
                <a href="#!" class="nav-link"
                  ><font-awesome-icon icon="fa-solid fa-location-dot" /> Main
                  Avenue, 987</a
                >
              </li>
              <li class="nav-item">
                <a href="#!" class="nav-link">View Map</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "GetTouch",
};
</script>

<style lang="scss" scoped>
.GetTouch {
  padding: 130px 0;

  h2 {
    font-weight: 700;
  }
}

.pre-title {
  width: fit-content;
  margin: auto;
  display: block;
  font-size: 0.9rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #058283;
}

.bottom {
  background-color: #19b5bd35;
  padding: 0.3rem 0.6rem;
  border-radius: 0.2rem;
  font-weight: 800;
  color: #058283;
}
.form-control {
  width: 100%;
  height: 50px;
  background: no-repeat;
  box-shadow: none;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.075);
  border: none;
  border-radius: 4px;
  line-height: 1.2;
}

.position {
  position: relative;
}

.icon {
  position: absolute;
  top: calc(50% - 8px);
  right: 25px;
}

.field-message {
  min-height: 152px;
}
</style>
