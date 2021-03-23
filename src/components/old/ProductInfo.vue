<template>
    <div class="product-test">
        test
    </div>
</template>

<script>
export default {
    name: 'ProductInfo',
    props: ['productInfo'],
    methods: {
        closeProduct(){
            console.log('close')
        }
    }
}
</script>