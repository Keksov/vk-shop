<template>
    <div class="t-catalog-item"
        v-touch:tap="tapHandler"
        :class="{'one': product_data.photos.length === 1, 'two': product_data.photos.length === 2, 'three': product_data.photos.length === 3 }"
    >   
        <div class="t-catalog-item__main">
           <img loading="lazy" :src="product_data.photos[0]" alt="">
        </div>
        <div class="t-catalog-item__secondary">
            <img loading="lazy" :src="photo" 
            v-for="(photo, index) in secondaryPhotos"
            :key="index">
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
    name: 't-products-item',
    props: {
        product_data:{
            type: Object,
            default() {
                return {}
            }
        }
    },
    computed:{
        secondaryPhotos:function(){
            if(this.product_data.photos.length < 5){
                return this.product_data.photos.slice(1)
            } else {
                return this.product_data.photos.slice(1,5)
            }
        }
    },
    methods: {
        ...mapActions([
            "GET_PRODUCT_INFO"
        ]),
        showProductData(){
            // блокаем скролл
            // let bodyElement = document.body
            // bodyElement.classList.toggle('scroll-lock')
            // показываем карточку товара
            // this.GET_PRODUCT_INFO(this.product_data)
            console.log('show product ')
        },
        tapHandler(){
            this.showProductData()
        }
        
    }
}
</script>