<template>
    <div class="t-catalog-item " 
        @click="showProductInStockData"
        :class="{'one': product_data.photos.length === 1, 'two': product_data.photos.length === 2, 'three': product_data.photos.length === 3 }"
    >   
        <div class="t-catalog-item__main">
            <img :src="product_data.photos[0]" alt="">
        </div>
        <div class="t-catalog-item__secondary">
            <img :src="photo" 
            v-for="(photo, index) in secondaryPhotos"
            :key="index">
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
    computed:{
        secondaryPhotos:function(){
            if(this.product_data.photos.length < 5){
                return this.product_data.photos.slice(1)
            } else {
                return this.product_data.photos.slice(1,5)
            }
        }
    },
    methods: {
        ...mapActions([
            "GET_PRODUCT_INFO"
        ]),
        showProductInStockData(){
            this.GET_PRODUCT_INFO(this.product_data)
        },
        
    }
}
</script>

<style lang="scss">
.t-catalog-item {
    display: grid;
    grid-template-rows: auto auto auto;
    grid-template-columns: auto auto auto;
    gap: 1px 1px;
    margin-bottom: 3px;
    img {
        width: 100%;        
    }
        
    &.right{        
        .t-catalog-item__main {
            grid-row: 1/4;
            grid-column: 1/3;
            img {
                height: 100%;
            }
        }
        .t-catalog-item__secondary {
            grid-row: 1/4;
            grid-column: 3/4;
            display: flex;
            flex-direction: column;
        }
        .one {
            .t-catalog-item__secondary{
                display: none;
            }
        }
        &.two {
            display: flex;
            img {
                height: auto;
            }
        }
    }

    &.bottom{
        
        .t-catalog-item__main{
            grid-row: 1/2;
            grid-column: 1/4;
        }
        .t-catalog-item__secondary{
            grid-row: 2/4;
            grid-column: 1/4;
            justify-content: space-between;
            display: flex;            
            margin-right: 1px;
            &:last-child{
                margin-right: 0;
            }
            img{
                width: 33%;
                height: auto;
            }
        }
        &.one {
            .t-catalog-item__secondary{
                display: none;
            }
        }
        &.two {
            .t-catalog-item__secondary{
                img {
                    width: 100%;
                }
            }
        }
        &.three {
            .t-catalog-item__secondary{
                img {
                    width: 50%;
                }
            }
        }
    }
}

</style>