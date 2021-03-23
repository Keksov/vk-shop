<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    
    <t-main-wrapper />

  </div>
</template>

<script>
import TMainWrapper from '@/components/t-main-wrapper.vue'
export default {
  name: 'App',
  components: {
    TMainWrapper
  },
  methods: {
  },
  // mounted() {
    // fetch('https://api.ividos.pro:8443/api/items')
    // .then(response => response.json())
    // .then(json => { this.products = json } )

    // console.log(this.products)
  // }
}
</script>

<style lang="scss">
@import "./assets/scss/style";

</style>
