<template>
    <div class="t-catalog">
        <t-catalog-to-order-item 
            v-for="product in PRODUCTS_TO_ORDER"
            :key="product.id"
            :product_data="product"
        />
    </div>
</template>

<script>
import TCatalogToOrderItem from './t-catalog-to-order-item.vue'


import {mapActions, mapGetters} from 'vuex'

export default {
    name: 't-catalog-instock',
    components: {
        TCatalogToOrderItem
    },
    data(){
        return {
                     
        }
    },
    computed:{
        ...mapGetters([
            "PRODUCTS_TO_ORDER"
        ])
    },
    methods: {
        ...mapActions([
            "GET_PRODUCTS_TO_ORDER"
        ]),
      
    },
    mounted(){
        this.GET_PRODUCTS_TO_ORDER()
    }

}
</script>