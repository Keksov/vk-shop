import Vue from 'vue'
import App from './App.vue'
import store from './vuex/store'
// plugins
import VueClipboard from 'vue-clipboard2'
var infiniteScroll =  require('vue-infinite-scroll')
import Notifications from 'vue-notification'

// styles
import './assets/scss/style.scss'

Vue.use(VueClipboard)
Vue.use(infiniteScroll)
Vue.use(Notifications)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
