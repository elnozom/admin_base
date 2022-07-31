import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import i18n from "./i18n";
import './plugins/chart'

export const bus = new Vue();
Vue.config.productionTip = false;
Vue.prototype.$baseImgUrl = process.env.VUE_APP_IMG_URL;

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
