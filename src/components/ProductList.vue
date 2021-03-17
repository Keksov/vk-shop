<template>
    <div class="product-list">
        <div class="product-item" v-for="(product, index) of products" :key="index">
            <template v-if="index % 2 === 0">
                <ProductGallery
                    v-bind:photos="product.photos"
                    v-bind:productId="product.id"
                />
            </template>
            <template v-else>
                <ProductGalleryBottom
                    v-bind:photos="product.photos"
                    v-bind:productId="product.id"
                />
            </template>
        </div>
       
    </div>
</template>

<script>
import ProductGallery from '@/components/ProductGallery'
import ProductGalleryBottom from '@/components/ProductGalleryBottom'

export default {
    name: 'ProductList',
    props:['products'],
    components: {
        ProductGallery, 
        ProductGalleryBottom
    }
}
</script>
