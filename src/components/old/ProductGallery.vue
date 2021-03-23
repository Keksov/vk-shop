<template>
    <div>
        <div class="gallery-wrapper" @click="showProduct()">
            
            <div class="gallery-main" v-bind:class="{ bottom: isBottom }">            
                <img :src="product.photos[0]" alt="main photo">            
            </div>
            <div v-bind:class="[isBottom ? 'gallery-bottom' : 'gallery-right']">
                <div v-for="(photo, index) in product.photos"
                    :key="index"
                    :class="[isBottom ? 'gallery-bottom__img' : 'gallery-right__img']"
                >
                   <template v-if="index > 0 && index < 5">
                       <img :src="photo" alt="">
                   </template>
                </div>
            </div>
        </div>

        
    </div>
</template>

<script>
export default {
    name: 'ProductGallery',
    props: ['product', 'isBottom'],  
    methods: {
        showProduct(){
            console.log('id ', this.product.id)
            this.$emit('showProductInfo',  this.product.id )
        },
    }

}
</script>

<style lang="scss" scoped>
.slide-leave-active,
.slide-enter-active {
  transition: 0.75s;
}
.slide-enter {
  transform: translate(100%, 0);
}
.slide-leave-to {
  transform: translate(100%, 0);
}
</style>