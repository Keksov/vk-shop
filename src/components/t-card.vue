<template>
    <div class="t-card">
     
    </div>
</template>

<script>
export default {
    name: 't-card',
    props:{
        product_info:{
            type: Object,
            default(){
                return {}
            }
        }
    }
}
</script>