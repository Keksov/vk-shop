<template>
    <div class="product-list">
        <div class="product-item" v-for="(product, index) of products" :key="index">
            <template v-if="index % 2 === 0">
                <ProductGallery
                    v-bind:product="product"
                    v-bind:isBottom="false"
                />
            </template>
            <template v-else>
                <ProductGallery
                    v-bind:product="product"
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
