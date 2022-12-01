import Vue from "vue";
import App from "./App.vue";
// import "./firebase-messaging-sw";
// import "./messaging_init_in_sw";
// import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import firebaseMessaging from "./firebase";

Vue.config.productionTip = false;
Vue.prototype.$messaging = firebaseMessaging;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
