<template>
    <div class="t-main">
        <div class="t-main__catalog">
            <VueSlickCarousel v-bind="settingsMainSLider" class="t-main-slider" @beforeChange="beforeChange">
                <div class="t-catalog__slide">
                   test 1
                    
                </div>
                <div class="t-catalog__slide slide-2">
                    test 2
                </div>
            </VueSlickCarousel>
        </div>
        <div class="t-nav">
            <transition name="slideUp">
                
            </transition>
            <t-nav />
        </div>
        
        <transition name="slideLeft">
          
        </transition>

        <notifications
            classes="t-notification"
            width="100%"
            position="bottom"
        />
    </div>
</template>

<script>
// slick
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

// import TCatalogInStock from '@/components/in-stock/t-catalog-in-stock'
// import TCatalogToOrder from '@/components/to-order/t-catalog-to-order'

// import TCard from './t-card'
// import TNav from './nav/t-nav'
// import TNavContent from './nav/t-nav-content'

import {mapGetters, mapActions} from 'vuex'

export default {
    name: 't-main-wrapper',
    data(){
        return {
            settingsMainSLider: 
                {
                    "dots": false,
                    "arrows": false,
                    "dotsClass": "slick-dots custom-dot-class",
                    "edgeFriction": 0.35,
                    "infinite": false,
                    "speed": 500,
                    "slidesToShow": 1,
                    "slidesToScroll": 1
                }
            }
        
    },
    components: {
        VueSlickCarousel,
        // TCatalogInStock,
        // TCatalogToOrder,
        // TCard,
        // TNav,
        // TNavContent
    },
    computed:{
        ...mapGetters([
            // "PRODUCT_INFO_STATUS",
            // "CATEGORIES_STATUS"            
        ])
    },
    methods: {
        ...mapActions([
            // "CHANGE_PRODUCT_INFO_STATUS"
        ]),
    },
    mounted(){
        // this.CHANGE_PRODUCT_INFO_STATUS()
        
    }
}
</script>