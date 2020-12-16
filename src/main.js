import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import { codemirror } from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'


Vue.use(ViewUI);
Vue.use(codemirror);

Vue.prototype.$bus = new Vue();
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
