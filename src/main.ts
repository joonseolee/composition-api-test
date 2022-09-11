import vueCompositionApi from "@vue/composition-api";
import Vue from "vue";
import App from "./App.vue";
import store from "./store";

Vue.config.productionTip = false;
Vue.use(vueCompositionApi);

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");

