<template>
    <div class="t-catalog">
        <t-catalog-in-stock-item 
            v-for="product in PRODUCTS_IN_STOCK"
            :key="product.id"
            :product_data="product"
        />

    </div>
</template>

<script>
import TCatalogInStockItem from './t-catalog-in-stock-item.vue'

import {mapActions, mapGetters} from 'vuex'

export default {
    name: 't-catalog-in-stock',
    components: {
        TCatalogInStockItem
    },
    data(){
        return {
            productByID: null           
        }
    },
    computed:{
        ...mapGetters([
            "PRODUCTS_IN_STOCK"
        ])
    },
    methods: {
        ...mapActions([
            "GET_PRODUCTS_IN_STOCK"
        ])
    },
    mounted(){
        this.GET_PRODUCTS_IN_STOCK()
    }

}
</script>