<template>
    <div>
        <!-- <div class="gallery-wrapper" @click="showProduct(product.id)">
            
        <div class="gallery-main" v-bind:class="{ bottom: isBottom }">            
            <img :src="product.photos[0]" alt="main photo">            
        </div>
        <div v-bind:class="[isBottom ? 'gallery-bottom' : 'gallery-right']">
            <img :src="product.photos[1]">
            <img :src="product.photos[2]">
            <img :src="product.photos[3]">
        </div> -->
        <!-- links -->
        <div class="product-item" v-show="isProductItemShow">
            <div class="product-item__top">{{ product.vk }}</div>
            <div class="product-item__seller">
                <div class="product-item__seller-name">{{ product.seller.name }}</div>
                <div class="product-item__date">{{ currentDateTime(product.date) }}</div>
            </div>
        </div>

        <!-- </div> -->
    </div>
</template>

<script>
import moment from 'moment'
export default {
    name: 'ProductGallery',
    data(){
        return {
           isProductItemShow: true
        }
    },
    props: ['product', 'isBottom'],
  
    methods:{
        showProduct(productID){
            console.log('product id ', productID)
        },
        currentDateTime(date) {
            moment.locale("ru")
            return moment(date).format('D MMM - h:mm')
        }
    }

}
</script>