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
            "GET_PRODUCTS",
            "CLEAR_PRODUCTS"
        ]),
        loadMore: function() {
          
            if(!this.busy && this.PRODUCTS.length > 4){
                this.busy = true;
                // show spinner
                try {
                    // console.log('page ', this.products_params.page)
                    // if(this.products_params.page == 0) {
                    //     this.CLEAR_PRODUCTS()
                    // }
                    this.products_params.page += 1
                    this.GET_PRODUCTS(this.products_params)
                    .then(response => {
                        
                        if(response.data.length == 0){
                            this.$notify({
                                type: 'info ', 
                                text: 'В данной категории больше товаров нет',
                                duration: 1500
                            })
                            
                        }
                        
                    })
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