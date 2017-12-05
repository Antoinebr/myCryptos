// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'


window.Helpers = require('../ab_modules/helpers');

window.myInvests = require('../myCryptos.js');

let VueMaterial = require('vue-material')

Vue.use(VueMaterial)

require('vue-material/dist/vue-material.css')


Vue.material.registerTheme('default', {
  primary: 'blue',
  accent: 'red',
  warn: 'red',
  background: 'white'
})


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
