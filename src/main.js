import Vue from 'vue'
import App from './App.vue'
import VeeValidate from "vee-validate";

Vue.use(VeeValidate)

new Vue({ // eslint-disable-line no-new
  el: '#app',
  render: (h) => h(App)
})
