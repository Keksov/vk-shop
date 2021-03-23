<template>
    <div class="product-list">
        <div class="product-item"
            v-for="(product, index) of products" :key="product.id"
            @showProductInfo='getProductID(sendID)'
        >
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
    },
    methods:{        
        getProductID(sendID){
            console.log('cur ID', sendID)
        }
    }
}
</script>
