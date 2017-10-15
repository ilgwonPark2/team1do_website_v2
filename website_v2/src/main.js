// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'expose-loader?$!expose-loader?jQuery!jquery'
import App from './App'
import router from './router'
Vue.config.productionTip = false
import '../static/style/bootstrap.min.css'
import '../static/style/main.css'
import '../static/scripts/jquery-3.1.1.js'
import '../static/scripts/bootstrap.min.js'
import '../static/scripts/axios.min.js'
import '../static/scripts/bluebird.min.js'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
