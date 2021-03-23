<template>
    <div class="t-card">
       <template v-if="PRODUCT_TYPE == 'in_stock' && PRODUCT_IN_STOCK_DESC[0]">
           <h2>{{ PRODUCT_IN_STOCK_DESC[0].seller.name }}</h2>
       </template>
       <template v-else-if="PRODUCT_TO_ORDER_DESC[0] && PRODUCT_TYPE == 'to_order'">
           <h2>{{ PRODUCT_TO_ORDER_DESC[0].seller.name }}</h2>
       </template>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
    name: 't-card',
    computed:{
        ...mapGetters([
            "PRODUCT_TO_ORDER_DESC",
            "PRODUCT_IN_STOCK_DESC",
            "PRODUCT_TYPE"
        ])
    },
    methods: {
        ...mapActions([
            "GET_PRODUCT_TO_ORDER_DESC",
            "GET_PRODUCT_IN_STOCK_DESC",
            "GET_PRODUCT_TYPE"
        ])
    },
    mounted(){
        this.GET_PRODUCT_TO_ORDER_DESC(),
        this.GET_PRODUCT_IN_STOCK_DESC(),
        this.GET_PRODUCT_TYPE()
    }
}
</script>