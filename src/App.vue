<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <MainNav msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import MainNav from './components/MainNav.vue'

export default {
  name: 'App',
  components: {
    MainNav
  }
}
</script>

<style lang="scss" scoped>
@import "./assets/scss/style";

</style>
