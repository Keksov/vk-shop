<template>
    <div class="t-card">
       <template>
           {{ PRODUCT_INFO.text }}
       </template>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
    name: 't-card',
    computed:{
        ...mapGetters([
            "PRODUCT_INFO"
        ])
    },
    methods: {
        ...mapActions([
            "GET_PRODUCT_INFO"
        ])
    },
    
   
}
</script>