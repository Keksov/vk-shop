<template>
    <div class="product-list">
        <div class="product-item" v-for="(product, index) of products" :key="index">
            <template v-if="index % 2 === 0">
                <ProductGallery
                    v-bind:photos="product.photos"
                    v-bind:productId="product.id"
                    v-bind:productPrice="product.price"
                    v-bind:isBottom="false"
                />
            </template>
            <template v-else>
                <ProductGallery
                    v-bind:photos="product.photos"
                    v-bind:productId="product.id"
                    v-bind:productPrice="product.price"
                    v-bind:isBottom="true"
                />
            </template>
        </div>
       
    </div>
</template>

<script>
import ProductGallery from '@/components/ProductGallery'

export default {
    name: 'ProductList',
    props:['products'],
    components: {
        ProductGallery
    }
}
</script>
