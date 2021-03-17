<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    
    <div class="main-container">
      <ProductList v-bind:products="products" />
    </div>

  </div>
</template>

<script>
import ProductList from '@/components/ProductList'
export default {
  name: 'App',
  data() {
    return {
      products: [
        {
            "seller":{
              "name":"Габриелла Мельник",
              "vk":"https://vk.com/id286389627",
              "vkid":286389627
            },
            "id":4872,
            "date":1615825502,
            "price":3900,
            "vk":"https://vk.com/wall286389627_4872",
            "category":"Прочее",
            "text":"Цена: 3900\nNew collection 2021\nШикарные куртки эко—кожа—рукава трикотаж инкрустированные камнями фото не передаёт всю красоту—неотразимый блеск камней\nШикарнейшее качество\nРазмеры s, m, l, xl\nЦена: 3900₽",
            "photos":[
              "https://sun9-73.userapi.com/impf/xJYAtW1TyJlljYHaCrC6WSgEkGLgGsRp-1pSow/-L9cYD6YBiw.jpg?size=605x807&quality=96&sign=94aea35d061d6e0c447ba177e8a37194&c_uniq_tag=rpx3AQ7p3_mSabTyJLXo2WVrNrCylTWollnNnca1ydo&type=album",
              "https://sun9-25.userapi.com/impf/KoBUUjcYO1ypwTwVFKc0GsNhBwuKC38g7afIWA/9riCqW5w16o.jpg?size=605x807&quality=96&sign=2460052069761630e8a704fb46d5bf9f&c_uniq_tag=wj_rc3U5Z7a2dgLcfK98d0GjHTWsbe84Zh3DmmGuWrA&type=album",
              "https://sun9-27.userapi.com/impf/EvJ-G8TnkH6aHU--vZPeXEXeP-swSiciWRZDVw/Wu95pQCuH6E.jpg?size=605x807&quality=96&sign=677c7194a3566c2ba90d0dbbab38d6cd&c_uniq_tag=OhfBVnwrZ-1ye8Pl1B3nHPvNo7BHIee1maucaSw_Q60&type=album",
              "https://sun9-61.userapi.com/impf/mqJ8AgU5RNwG1DLrQbldm7hxCRl4Rn7zuz7jbw/3Ph-TNqHYo8.jpg?size=605x807&quality=96&sign=75c661a761cf645e4bebc19be2ac4fe9&c_uniq_tag=4YZ8ia4IyKMXVvr2OPoE9ZYFzhjcb5v_WR0tuOGLQ-E&type=album"
            ]
        },
        {
            "seller":{
              "name":"Габриелла Мельник",
              "vk":"https://vk.com/id286389627",
              "vkid":286389627
            },
            "id":4871,
            "date":1615825426,
            "price":3500,
            "vk":"https://vk.com/wall286389627_4871",
            "category":"Прочее",
            "text":"Цена: 3500\nNew collection 2021\nШикарные комбинированные куртки—карманы инкрустированные камнями фото не передаёт всю красоту—неотразимый блеск камней\nШикарнейшее качество\nРазмеры s, m, l, xl\nЦена: 3500₽",
            "photos":[
              "https://sun9-34.userapi.com/impf/BVj2XpmJvF-5hsjDBASirLoC00en0cD7WSQX0g/tO0ssFT_CvY.jpg?size=605x807&quality=96&sign=a96f2c7296edd1822c6ca55ebefcdac7&c_uniq_tag=ZHpjOgi3YXbCxNJ7HF5aRgG5eKuvAHQ-xrCYBOVN0JA&type=album",
              "https://sun1-88.userapi.com/impf/RAcmWhPMif5ONoIAUGWOSGiEtUdVN5UO66mJUg/mCLtQHm4eu4.jpg?size=605x807&quality=96&sign=1ed6952d93d1d9135fed7af19becc2c9&c_uniq_tag=lXNZU97wMKvzii3F2plg6BHi2hKd3-usqMILt3b5GlI&type=album",
              "https://sun9-3.userapi.com/impf/R50SbkCQi9I3HUXbGaYYiqEeKQVuz-BUOi4Y6A/zxXMiog6fE4.jpg?size=605x807&quality=96&sign=a1329c3396eb89e8143f0cb151bbf39c&c_uniq_tag=z6-QKyG3hOzYRofhzONFq7nCp-5zYlAzW_WnyknvoQ4&type=album",
              "https://sun9-6.userapi.com/impf/UAs1gjbvaitL6s7eyU8XiXs2Ci582itNRoXKTA/X818VWxd8AA.jpg?size=605x807&quality=96&sign=9c6b7fad5998b6ff8bcd75d6b3648aa1&c_uniq_tag=JAOKroDXFOjamY46swjTpjlC6fCbFgSUHz3cqyNsPEY&type=album"
            ]
        },
        {
            "seller":{
              "name":"Габриелла Мельник",
              "vk":"https://vk.com/id286389627",
              "vkid":286389627
            },
            "id":4870,
            "date":1615825349,
            "price":4200,
            "vk":"https://vk.com/wall286389627_4870",
            "category":"Прочее",
            "text":"Цена: 4200\nNew collection 2021\nШикарные куртки—карманы инкрустированные камнями фото не передаёт всю красоту—неотразимый блеск камней\nШикарнейшее качество\nРазмеры s, m, l, xl\nЦена: 4200₽",
            "photos":[
              "https://sun9-58.userapi.com/impf/ncwRaYQI7Opw7Nt45o4uI1slVrUwFzO2JpcJgA/lcrlK6K05fg.jpg?size=605x807&quality=96&sign=64cf9c7d01a56f26122d76692b447681&c_uniq_tag=4MbpGDikc9ADG7ZUfiDlUfzck8M4CIMSo3Ol1H_6Qr0&type=album",
              "https://sun9-27.userapi.com/impf/CIO2-8qhDHJD2SzBzsaidKlCC4jbkFihjSoY2A/yAhYz1mpQfc.jpg?size=605x807&quality=96&sign=bfe0fc5c44f5b69309a863ee1258120a&c_uniq_tag=psAwre1FcBMgCAqgOOVoeaWRD7v1m9_1qksYwSmhSqM&type=album",
              "https://sun1-26.userapi.com/impf/ZiFq__ytypntL1NASknB-1a0dZi4nh4ISFYENQ/DU5k9nznAgU.jpg?size=605x807&quality=96&sign=2e4723488ba6d26ab77215eb6d2a1d3c&c_uniq_tag=sPJYeyYp9T6sm9nhA68dMONyoDmJ-uBkDUgU6g0HV00&type=album",
              "https://sun1-91.userapi.com/impf/ZMJ8ljeEJu66i9Jep3cQnNK0unUWvypwTcxIkw/rVvpIASyW4c.jpg?size=605x807&quality=96&sign=c40464bac15f8e2cdf984d9ff9269d6f&c_uniq_tag=YybZKLhvfeDoQoEdkOW7vkbV41bxAKZYziwiw4jmJ-I&type=album"
            ]
        },
        
      ]
    }
  },
  components: {
    ProductList
  },
  mounted() {
    // fetch('https://api.ividos.pro:8443/api/items')
    // .then(response => response.json())
    // .then(json => { this.products = json } )

    // console.log(this.products)
  }
}
</script>

<style lang="scss">
@import "./assets/scss/style";

</style>
