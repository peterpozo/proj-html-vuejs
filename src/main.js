import Vue from "vue";
import App from "./App.vue";
import "bootstrap";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPhone,
  faEnvelope,
  faClock,
  faPlay,
  faNetworkWired,
  faArrowRight,
  faChevronDown,
  faLocationDot,
  faChevronRight,
  faBriefcase,
  faChartSimple,
  faPlane,
  faGlobe,
  faInbox,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

library.add(
  faClock,
  faPhone,
  faEnvelope,
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faUser,
  faPlay,
  faNetworkWired,
  faArrowRight,
  faChevronDown,
  faLocationDot,
  faChevronRight,
  faBriefcase,
  faChartSimple,
  faPlane,
  faGlobe,
  faInbox
);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
