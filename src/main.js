import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import { routes } from "./routes";
import VModal from "vue-js-modal";

Vue.use(VueRouter);
Vue.use(VModal);

export const eventBus = new Vue({});

const router = new VueRouter({
  routes,
  mode: "history"
});

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
