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
        "seller": {
            "name": "Муслим Абдуллоев",
            "vk": "https://vk.com/id535401436",
            "vkid": 535401436,
            "vkav": "https://sun1-25.userapi.com/s/v1/ig1/kkCYcPyBuAM9_1gAoocb658s7UTpW_6WHP-vA1NmGmVht8UA0m3biYSV0JWTfmHiNSDNBr-P.jpg?size=50x0&quality=96&crop=0,0,799,799&ava=1"
        },
        "id": 10898,
        "date": 1616102130,
        "price": "",
        "vk": "https://vk.com/wall535401436_10898",
        "category": "Женская одежда",
        "text": "Внимание! внимание! супер распродажа по 100 р размер: 42-44-46-48-50-52-54-56-58-60\nМодел и цвета без выбора @ ‍ ‍ ‍",
        "photos": [
            "https://sun9-18.userapi.com/impg/nmr-nckcQQvXmarClDknk4xQ-YMcm5M6kz6fGg/OY8LeS5rBmE.jpg?size=612x807&quality=96&sign=ce17a24b03352b734a797d4705f62228&c_uniq_tag=vN0xU4BBAf1k-eEz_VFquC0XmMeBVxUpL5JRVDdxljw&type=album",
            "https://sun9-45.userapi.com/impg/S4QergzjQHWjuYXWrZQrmQ9IPVWPd4zZHg5DuQ/rFzrh7kHf0k.jpg?size=578x604&quality=96&sign=6788d643c36b87012858ada49e59a66b&c_uniq_tag=o5Ajxj0_aPwZftTFdDIYgYHggCwrMMCFNGKKJTWoTCM&type=album",
            "https://sun9-15.userapi.com/impg/gqa8MZ2hEzKA9UtHcpeTVJlkfLXeqiNMjxUUJQ/jbGgczpVXCg.jpg?size=582x604&quality=96&sign=c204d5076ab8c50e1bf6e554af0b9e12&c_uniq_tag=u7L7LGDVooMUi_Xy7ps_eO9dgPYRCqkXPsCStrJgbT8&type=album",
            "https://sun9-76.userapi.com/impg/pmcIM22Wzw7slM1Gpr2J-25lhZJCMKhxhmgynQ/WH1XSytjFcE.jpg?size=552x604&quality=96&sign=4eb9aec54a2953de9d3e6cab508d0337&c_uniq_tag=jfLPQiImtrU6vUm3fP2tWvmRI8qrLT0BtFK5deTnhjA&type=album"
        ]
    },
    {
        "seller": {
            "name": "Фёдор Халиков",
            "vk": "https://vk.com/id546469140",
            "vkid": 546469140,
            "vkav": "https://sun1-89.userapi.com/s/v1/if1/BOr7fDdd72Fc4dGHoaQDctnNRncl7wJHu9iXteTsR47hM0Ha2m0gSOhrAG8zg237ZuwEeViR.jpg?size=50x0&quality=96&crop=0,114,1052,1052&ava=1"
        },
        "id": 5179,
        "date": 1616102066,
        "price": 700,
        "vk": "https://vk.com/wall546469140_5179",
        "category": "Женская одежда",
        "text": "Цена: 700\nСнова получил платье выполнена\nИзготовленно из плотного трикотажа.очень хорошее качество, аккуратный пошив.цена: 700 руб\nРазмеры 54-56-58-60-62-64\nЕсть в наличии 22-108\nhttps://vk.com/club192488612",
        "photos": [
            "https://sun9-35.userapi.com/impg/X7gODtIzEa-urGdK_oZlx7v56b2JRmfxW3FPKw/7PFNnQ2uxXY.jpg?size=600x604&quality=96&sign=d06c66ed0cddecf27e0925016d6799cb&c_uniq_tag=41YJ5eA6aJsdQtfhttrH4wDppxEokoLNctXH7XvCrjI&type=album",
            "https://sun9-51.userapi.com/impg/wTfwLM12t5TCIfSoMZoXYPSk-LUlZ9KiBZTzKQ/B-S4LaMf8JM.jpg?size=604x601&quality=96&sign=2306bc999c939c01473f2e118115c5ef&c_uniq_tag=8N7k3AidzKgHh9mxW8G3ctT7F5G061N95edDQuVgTrk&type=album"
        ]
    },
    {
        "seller": {
            "name": "Тагоев Хожиакбар",
            "vk": "https://vk.com/id551538922",
            "vkid": 551538922,
            "vkav": "https://sun1-89.userapi.com/s/v1/ig2/qXWOAqJaK8nAiEVjlRzMyZUn_-k49Vh3ov9qzHoA9vF4QZGddSKoZq_XMqlAdqq1Pml7IJgKAuRBlIVrd8epvJc0.jpg?size=50x0&quality=96&crop=4,0,819,819&ava=1"
        },
        "id": 47896,
        "date": 1616102006,
        "price": 900,
        "vk": "https://vk.com/wall551538922_47896",
        "category": "Обувь (штучно)",
        "text": "Цена: 900\nСупер скидка\n2021 весна\nЛюксовое качество！\nРазмер: 36-40-38×2\nКоробка: 6 пар\nЦена: 900₽\nРеальное фото\nРазмер в размер\n",
        "photos": [
            "https://sun9-53.userapi.com/impg/1XcFWjcRWCOGgIVw6vILsSx4CVva2Qh2sQYxYA/m0G4leFTewo.jpg?size=605x807&quality=96&sign=d6c8a5c89aaa0137dec065a3e6973926&c_uniq_tag=2AojnKUN8K0SLvS2SkyCW_mkvSbCKAIAiv5qZe-Xx7M&type=album",
            "https://sun1-27.userapi.com/impg/nSQaNrYewnKQ4Cloku6DIw_g6E8qTqxPu0wPQg/SHJdOzBI0dU.jpg?size=593x807&quality=96&sign=99ca0c3f6bbdcb0e4619ec5d5e1d1191&c_uniq_tag=jkJDigV52hKq2x5EM0k57EqqaHMHXdyk0il5M2lK-Wc&type=album",
            "https://sun9-10.userapi.com/impg/LPgqQRqfl9PUaUBs-IlH2b2Pwp_jzp7QVs9LIQ/T9gYCnWKgDo.jpg?size=643x807&quality=96&sign=9576418f89ca5a39760a8c90dadabb7f&c_uniq_tag=8KoUeMNvyFq7kByUZ0rl-LXiw4whTbfZKZIFNEwVmpM&type=album",
            "https://sun9-31.userapi.com/impg/JzutKBrc45MzPiVYkN0G5PDIyCUkhzTPu4IhUg/-0rfGxtXz38.jpg?size=591x807&quality=96&sign=18967b5cb5f4d23b8acef74a636287ba&c_uniq_tag=Pb7UBo6gROyWTjcwu16ONqeqh6yNStWmLYfO8JvEybM&type=album"
        ]
    },
    {
        "seller": {
            "name": "Умар Мамарасулов",
            "vk": "https://vk.com/id449009367",
            "vkid": 449009367,
            "vkav": "https://sun1-14.userapi.com/s/v1/ig2/PKZNR0CXtGgfgtuxDT3CcHwOzt9dgEyldJX4qFG0hiNtC0xBf2xIZKe3PL8RP6W4IVbvyceniL4lSLn6m0d2S8L8.jpg?size=50x0&quality=96&crop=0,269,1620,1620&ava=1"
        },
        "id": 46901,
        "date": 1616102001,
        "price": 250,
        "vk": "https://vk.com/wall449009367_46901",
        "category": "Обувь (штучно)",
        "text": "Цена: 250\nВнимание!\nРаспродажа\nДетские кеды\nОптовая цена: 250₽\nРазмер: 26-31-12 пар\nВ коробке 2 расцветки\nКачество",
        "photos": [
            "https://sun9-61.userapi.com/impg/_slowZzK3EOgUrmA4AEwQdQ8RMsTLIITHWzuZg/bIlhagm-sVM.jpg?size=807x605&quality=96&sign=2c005d1033c7d1fa3b9c2938f12ecbfd&c_uniq_tag=fTKZYhTBuJtt45EZYLwFeUtloIag5_yO2XtxLmklEjI&type=album",
            "https://sun9-33.userapi.com/impg/6RQtx_D8omwevrajZDsDjgXxUjV0X6Y1J_g_RA/gcJUAhDg7yE.jpg?size=605x807&quality=96&sign=5cb52368010cd82590de038ad9d0cfc7&c_uniq_tag=EhV1x4mqBhpFSriUNECN9dBaDPWPM-2x7tTrIk0-Jak&type=album",
            "https://sun9-12.userapi.com/impg/u6BxTfh2f9vXADyLaX9cqoHmgX2kWluFRY-ibg/tREs4jaLjfM.jpg?size=605x807&quality=96&sign=2019f0de6cd980b79f4b6f5211211a1c&c_uniq_tag=BOKPqvwMExCd5QoTrqyK-xggQE-zrIyM0DtxwP2MYZs&type=album",
            "https://sun9-36.userapi.com/impg/YRWyj-_5tFubxyVIYDq9Or7C0fVZH73C0HFBfg/ND2HrmgyQiY.jpg?size=807x605&quality=96&sign=66ec97148e9d982dee5121c99e15772b&c_uniq_tag=5VUhv35wvuEG2u2cJE2I-XqQhIVFwc2TUIP8RekHCXk&type=album"
        ]
    }
        
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
