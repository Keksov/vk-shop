<template>
    <div class="t-catalog">
        <div v-infinite-scroll="loadMore" 
            infinite-scroll-disabled="busy" 
            infinite-scroll-distance="10"
        >
            <t-catalog-in-stock-item 
                v-for="(product, index) in PRODUCTS"
                :key="product.id"
                :product_data="product"
                :class="{'right': index % 2 === 0, 'bottom': index % 2 !== 0 }"
            />
        </div>

        
       
    </div>
</template>

<script>
// import axios from 'axios';
import TCatalogInStockItem from './t-catalog-in-stock-item.vue'
import {mapActions, mapGetters} from 'vuex'
export default {
    name: 't-catalog-in-stock',
    components: {
        TCatalogInStockItem
    },
    data(){
        return {
            productByID: null,
            products_params: {
                product_type: 's',
                page: 0,
            },
            list: [], 
            busy: false     
        }
    },
    computed:{
        ...mapGetters(["PRODUCTS"]),
        
    },
    methods: {
        ...mapActions([
            "GET_PRODUCTS"
        ]),
        loadMore: function() {
            
            if(!this.busy && this.PRODUCTS.length){
                
                
                
                this.busy = true;
                // show spinner
                try {
                    this.products_params.page += 1
                    this.GET_PRODUCTS(this.products_params)
                    // this.list.push(...this.PRODUCTS)
                    this.busy = false
                } catch (error) {
                    console.log('error', error)
                    this.busy = false
                }
            }
        }
        
    },
    mounted() {
        this.GET_PRODUCTS(this.products_params)

    }

}
</script>