<template>
    <div class="t-main">
        <div class="t-main__catalog">
            <VueSlickCarousel v-bind="settings" @beforeChange="beforeChange">
                <div class="t-catalog__slide">
                    <TCatalogInStock />
                    
                </div>
                <div class="t-catalog__slide slide-2">
                    test 2
                </div>
            </VueSlickCarousel>
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
// slick
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

import TCatalogInStock from '@/components/in-stock/t-catalog-in-stock'
// import TCatalogToOrder from '@/components/to-order/t-catalog-to-order'

import TCard from './t-card'
import TNav from './nav/t-nav'
import TNavContent from './nav/t-nav-content'

import {mapGetters, mapActions} from 'vuex'

export default {
    name: 't-main-wrapper',
    data(){
        return {
            settings: 
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
        ]),
        edge(){
            console.log('edge')
        },
        beforeChange(){
            if(this.oldSlideIndex == 0){
                console.log('000')
            }
            console.log('bef')
        }
    },
    mounted(){
        this.CHANGE_PRODUCT_INFO_STATUS()
        
    }
}
</script>

<style lang="scss">
.slick-slider {
    height: 100vh;
    overflow-y: hidden;
}
.t-main__catalog {
    
}
.t-catalog__slide {
    overflow-y: auto;
    height: calc(100vh - 40px);
    width: 100%;
    color: brown;
    background-color: beige;
    display: flex;
    justify-content: center;
    align-items: center;
    &.slide-2 {
        background-color: green;
    }
}
.t-catalog-test {
    height: calc(100vh - 40px);
    width: 100%;
    color: brown;
    background-color: beige;
    display: flex;
    justify-content: center;
    align-items: center;
}
// transation
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