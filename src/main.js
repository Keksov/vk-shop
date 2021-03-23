import Vue from 'vue'
import App from './App.vue'
import store from './vuex/store'
// plugins
import VueClipboard from 'vue-clipboard2'
// styles
import './assets/scss/style.scss'

Vue.use(VueClipboard)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
