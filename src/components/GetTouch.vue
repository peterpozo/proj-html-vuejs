<template>
  <section class="GetTouch">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-8 align-self-center pe-5">
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
              <font-awesome-icon
                icon="fa-solid fa-chevron-down"
                class="arrow"
              />
              <select name="info" class="form-control field-info">
                <option>More Info</option>
                <option>More Info</option>
                <option>More Info</option>
                <option>More Info</option>
              </select>
            </div>
            <div class="col-12 p-2 mb-4">
              <textarea
                name="message"
                class="form-control field-message"
                placeholder="Message"
              ></textarea>
            </div>
            <div class="col-12 p-2">
              <a href="#!" class="button-66">SEND</a>
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
                  ><font-awesome-icon icon="fa-solid fa-phone" class="icon" />
                  +1 (305) 1234-5678</a
                >
              </li>
              <li class="nav-item">
                <a href="#!" class="nav-link"
                  ><font-awesome-icon
                    icon="fa-solid fa-envelope"
                    class="icon"
                  />
                  hello@example.com</a
                >
              </li>
              <li class="nav-item">
                <a href="#!" class="nav-link"
                  ><font-awesome-icon
                    icon="fa-solid fa-location-dot"
                    class="icon"
                  />
                  Main Avenue, 987</a
                >
              </li>
              <li class="nav-item">
                <button class="button-67" type="button">VIEW MAP</button>
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

  a {
    text-decoration: none;
  }

  .intro {
    margin-bottom: 35px;
  }

  h4 {
    margin: 1.5rem 0;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.2;
  }

  p {
    margin: 1.5rem 0;
    line-height: 1.2;
    font-size: 1rem;
    font-weight: 400;
  }
}

.contacts {
  li {
    margin: 6.1px 0;
  }
  a {
    padding: 5px 0;
    font-size: 1.2rem;
    font-weight: 400;
    color: #058283;
  }

  .icon {
    background: #daeced;
    padding: 0.8rem;
    width: 20px;
    height: 20px;
    border-radius: 100px;
    text-align: center;
    font-size: 20px;
    margin-right: 0.5rem;
  }
  .svg-inline--fa {
    display: var(--fa-display, inline-block);
    overflow: visible;
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

.arrow {
  position: absolute;
  top: calc(50% - 8px);
  right: 25px;
}

.field-message {
  min-height: 152px;
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
  width: fit-content;
}

.button-66:hover {
  background-color: transparent;
  transform: translateY(-2px);
  color: #058283;
}

.button-67 {
  background-color: transparent;
  text-transform: uppercase;
  font-weight: 500;
  border-radius: 4px;
  border: 1px solid #058283;
  box-sizing: border-box;
  color: #058283;
  cursor: pointer;
  display: inherit;
  font-size: 18px;
  line-height: 24px;
  padding: 10px 20px;
  text-align: center;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  transition: all 0.2s cubic-bezier(0.22, 0.61, 0.36, 1);
  width: fit-content;
}

.button-67:hover {
  background-color: #058283;
  transform: translateY(-2px);
  width: fit-content;
  color: #fff;
}
</style>
