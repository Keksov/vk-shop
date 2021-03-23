<template>
    <div class="t-catalog-item" @click="showProductInStockData">
        <div class="t-catalog-item__desc">
            {{ product_data.seller.name }}
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    name: 't-catalog-in-stock-item',
    props: {
        product_data:{
            type: Object,
            default() {
                return {}
            }
        }
    },
    methods: {
        ...mapActions([
            "GET_PRODUCT_IN_STOCK_DESC",
            "GET_PRODUCT_TYPE"
        ]),
        showProductInStockData(){
            // this.$emit( 'sendID', this.product_data.id )
            this.GET_PRODUCT_IN_STOCK_DESC(this.product_data.id)
            this.GET_PRODUCT_TYPE('in_stock')
        },
        
    }
}
</script>