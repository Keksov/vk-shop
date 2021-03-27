<template>
    <div class="t-catalog">
        <div v-infinite-scroll="loadMore" 
            infinite-scroll-disabled="busy" 
            infinite-scroll-distance="10"
        >
            <t-catalog-in-stock-item 
                v-for="(product, index) in list"
                :key="product.id"
                :product_data="product"
                :class="{'right': index % 2 === 0, 'bottom': index % 2 !== 0 }"
            />
        </div>

        
       
    </div>
</template>

<script>
import axios from 'axios';

import TCatalogInStockItem from './t-catalog-in-stock-item.vue'

// const api = 'https://api.ividos.pro:8443/api/items.php?src=s' //p=1&ps=5 - page 1 size 5
export default {
    name: 't-catalog-in-stock',
    components: {
        TCatalogInStockItem
    },
    data(){
        return {
            productByID: null,
            page: 0,
            list: [], 
            busy: false     
        }
    },
    computed:{
        
    },
    methods: {
        loadMore: function() {
            if(!this.busy && this.list.length){
                this.busy = true;
                axios.get(`https://api.ividos.pro:8443/api/items.php?src=s&page=${this.page}&page_size=5`)
                    .then(({ data }) => {
                        this.page += 1
                        this.list.push(...data)
                        this.busy = false
                    })
                    .catch( (err) => {
                        console.log('error', err)
                        this.busy = false;
                    })
            }
        }
      
    },
    mounted(){
        axios.get(`https://api.ividos.pro:8443/api/items.php?src=s&page=${this.page}&page_size=5`)
            .then(({ data }) => {
                this.page += 1
                this.list.push(...data)
                this.busy = false
            })
            .catch( (err) => {
                console.log('error', err)
                this.busy = false;
            })
    }

}
</script>