<template>
    <div class="t-main">
        <div class="t-main__catalog">
            <TCatalogInStock />
        </div>
        <div class="t-nav">
            <transition name="slideUp">
                <template v-if="CATEGORIES_STATUS">
                    <t-nav-content />
                </template>
            </transition>
            <t-nav />
        </div>
        
        <transition name="slideLeft">
            <template v-if="PRODUCT_INFO_STATUS">
                <t-card />
            </template>
        </transition>

        <notifications
            classes="t-notification"
            width="100%"
            position="bottom"
        />
    </div>
</template>

<script>

import TCatalogInStock from '@/components/in-stock/t-catalog-in-stock'
// import TCatalogToOrder from '@/components/to-order/t-catalog-to-order'

import TCard from './t-card'
import TNav from './nav/t-nav'
import TNavContent from './nav/t-nav-content'

import {mapGetters, mapActions} from 'vuex'

export default {
    name: 't-main-wrapper',
    components: {
        TCatalogInStock,
        // TCatalogToOrder,
        TCard,
        TNav,
        TNavContent
    },
    computed:{
        ...mapGetters([
            "PRODUCT_INFO_STATUS",
            "CATEGORIES_STATUS"            
        ])
    },
    methods: {
        ...mapActions([
            "CHANGE_PRODUCT_INFO_STATUS"
        ])
    },
    mounted(){
        this.CHANGE_PRODUCT_INFO_STATUS()
        
    }
}
</script>

<style lang="scss">
.slideLeft-leave-active,
.slideLeft-enter-active {
  transition: 1s;
}
.slideLeft-enter {
  transform: translate(100%, 0);
}
.slideLeft-leave-to {
  transform: translate(100%, 0);
}

.slideUp-leave-active,
.slideUp-enter-active {
  transition: 1s;
}
.slideUp-enter {
  transform: translateY(100%);
}
.slideUp-leave-to {
  transform: translateY(100%);
}
</style>