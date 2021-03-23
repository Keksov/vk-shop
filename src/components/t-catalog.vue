<template>
    <div class="t-catalog">
        <t-catalog-item 
            v-for="product in PRODUCTS"
            :key="product.id"
            :product_data="product"
            @sendID="showItemInfo" 
        />

        <t-card
            :product_info="productByID"
        />

    </div>
</template>

<script>
import TCatalogItem from './t-catalog-item.vue'
import TCard from './t-card'

import {mapActions, mapGetters} from 'vuex'

export default {
    name: 't-catalog',
    components: {
        TCatalogItem,
        TCard
    },
    data(){
        return {
            productByID: null           
        }
    },
    computed:{
        ...mapGetters([
            "PRODUCTS"
        ])
    },
    methods: {
        ...mapActions([
            "GET_PRODUCTS"
        ]),
        showItemInfo(data){
            this.productByID = {...this.PRODUCTS.filter(founded => founded.id === data)}
            console.log('show data', this.productByID)
        }
    },
    mounted(){
        this.GET_PRODUCTS()
    }

}
</script>