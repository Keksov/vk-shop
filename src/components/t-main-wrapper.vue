<template>
    <div class="t-main">
        <div class="t-main__catalog">
            <VueSlickCarousel 
            v-bind="settingsMainSLider"
            ref="mainSlider"
            class="t-main-slider"
            >
                <div class="t-catalog__slide">
                   <tAvailable />
                </div>
                <div class="t-catalog__slide">
                    <tUnderOrder />
                </div>
                <div class="t-catalog__slide">
                    <tAgentsAvailable />
                </div>
                <div class="t-catalog__slide">
                    <tAgentsUnderOrder />
                </div>
            </VueSlickCarousel>
        </div>
        <div class="t-nav">
            <transition name="slideUp">
                <template v-if="GET_CATEGORIES_SHOW">
                    <TNavContent />
                </template>
            </transition>
            <TNav @goHome="goToHome"/>
        </div>
        
        
        <transition name="slideLeft">
          <template v-if="GET_PRODUCT_SHOW_STATUS">
              <TCard />
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


import TCard from './t-card'
import TNav from './nav/t-nav'
import TNavContent from './nav/t-nav-content'
import tAvailable from '@/components/products/t-available'
import tUnderOrder from '@/components/products/t-under-order'
import tAgentsAvailable from '@/components/agents/t-agents-available'
import tAgentsUnderOrder from '@/components/agents/t-agents-under-order'

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
                    "slidesToScroll": 1,
                    "swipe": true
            }
        }   
    },
    components: {
        VueSlickCarousel,
        tAvailable,
        tUnderOrder,
        tAgentsAvailable,
        tAgentsUnderOrder,
        TCard,
        TNav,
        TNavContent
    },
    computed:{
        ...mapGetters([
            "GET_PRODUCT_SHOW_STATUS",
            "GET_CATEGORIES_SHOW"            
        ])
    },
    methods: {
        ...mapActions([
            "CHANGE_PRODUCT_SHOW_STATUS"
        ]),
        swipeLeftHandler(){
           this.showNext() 
        },
        swipeHandler(direction){
            if(direction == 'left'){
                this.showNext()
            } else {
                this.showPrev()
            }
        },
        showNext() {
            this.$refs.mainSlider.next()
        },
        showPrev() {
            this.$refs.mainSlider.prev()
        },
        goToHome() {
            console.log('main go home')
            this.$refs.mainSlider.goTo(0)
        }
    }
}
</script>

<style lang="scss">
// slide effect
.slide-leave-active,
.slide-enter-active {
  transition: 0.75s;
}
.slide-enter {
  transform: translate(100%, 0);
}
.slide-leave-to {
  transform: translate(100%, 0);
}
// left slide
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
// up slide
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