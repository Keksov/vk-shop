<template>
    <div class="t-catalog">
        <div v-infinite-scroll="loadMore" 
            infinite-scroll-disabled="busy" 
            infinite-scroll-distance="10"
        >
            <t-products-item
                v-for="(product, index) in UNDER_ORDER_PRODUCTS"
                :key="product.id"
                :product_data="product"
                :class="{'right': index % 2 === 0, 'bottom': index % 2 !== 0 }"
            />
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex' 
import tProductsItem from './t-products-item'
export default {
    name: 't-under-order',
    data(){
        return {
            busy: false,
            product_params: {
                page: 0
            }
        }
    },
    components: {
        tProductsItem
    },
    methods: {
        ...mapActions([
            "CLEAR_U_O_PRODUCTS",
            "GET_UNDER_ORDER_PRODUCTS"
        ]),
        loadMore: function() {
            this.busy = true
            // load items
            this.product_params.page += 1
            this.GET_UNDER_ORDER_PRODUCTS(this.product_params)
            this.busy = false
        }
    },
    computed:{
        ...mapGetters(["UNDER_ORDER_PRODUCTS"])
    },
    mounted(){
        this.CLEAR_U_O_PRODUCTS()
        this.GET_UNDER_ORDER_PRODUCTS(this.product_params)
    }
}
</script>

