<template>
    <div class="t-catalog-item" @click="showProductData">
        <div class="t-catalog-item__desc">
            {{ product_data.seller.name }}
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    name: 't-catalog-to-order-item',
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
            "GET_PRODUCT_INFO"
        ]),
        showProductData(){
            this.GET_PRODUCT_INFO(this.product_data)
        }        
    }
}
</script>