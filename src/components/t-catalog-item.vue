<template>
    <div class="t-catalog-item" @click="showProductData">
        <div class="t-catalog-item__desc">
            {{ product_data.seller.name }}
        </div>
    </div>
</template>

<script>
export default {
    name: 't-catalog-item',
    props: {
        product_data:{
            type: Object,
            default() {
                return {}
            }
        }
    },
    methods: {
        showProductData(){
            this.$emit( 'sendID', this.product_data.id )
        }
    }
}
</script>