<template>
    <div class="t-main-wrapper">
        <t-catalog-in-stock />
        <hr />
        <t-catalog-to-order />
        <hr />
        <transition name="slide">
            <template v-if="PRODUCT_INFO_STATUS">
                <t-card />
            </template>
        </transition>
    </div>
</template>

<script>

import TCatalogInStock from '@/components/in-stock/t-catalog-in-stock'
import TCatalogToOrder from '@/components/to-order/t-catalog-to-order'

import TCard from './t-card'

import {mapGetters} from 'vuex'

export default {
    name: 't-main-wrapper',
    components: {
        TCatalogInStock,
        TCatalogToOrder,
        TCard
    },
    computed:{
        ...mapGetters(["PRODUCT_INFO_STATUS"])
    }
}
</script>

<style lang="scss">
.slide-leave-active,
.slide-enter-active {
  transition: 1s;
}
.slide-enter {
  transform: translate(100%, 0);
}
.slide-leave-to {
  transform: translate(100%, 0);
}
</style>