import Vue from 'vue'
import App from './App'
import router from './router'
// import axios from 'axios'
import Http from './utils/http'
import api from './utils/api'
// import userAuth from './utils/auth'
import store from './store'
import ElementUI from 'element-ui'
import './utils/filter'
// import 'assets/css/main.css'
import 'element-ui/lib/theme-chalk/index.css'
// import promise from 'es6-promise'

Vue.use(ElementUI)
// promise.polyfill()
Vue.config.productionTip = false
Vue.prototype.$http = new Http(store, api)
Vue.prototype.API = api
// Vue.prototype.$window = window
// Vue.prototype.$valid = new Valid

Vue.use(store)
// Vue.use(Pagination)

// new userAuth(store)  //路由守卫

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store: store,
    router,
    components: {App},
    template: '<App/>'
})