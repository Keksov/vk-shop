import Vue from 'vue'
import App from './App.vue'
import store from './vuex/store'
// plugins
import VueClipboard from 'vue-clipboard2'
var infiniteScroll =  require('vue-infinite-scroll')

// styles
import './assets/scss/style.scss'

Vue.use(VueClipboard)
Vue.use(infiniteScroll)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
