<template>
    <div class="t-main">
        <div class="t-main__catalog">
            <VueNavSlickCarousel
                ref="c2"
                :asNavFor="$refs.c1"
                :focusOnSelect="true"
                v-bind="settingsNavSlider"
                class="tMainNav"
                @beforeChange="navBeforeChange"
            >
                <div class="t-nav-slider">
                    <div class="t-nav-slider__content">Товары наличие</div>
                </div>
                <div class="t-nav-slider">
                    <div class="t-nav-slider__content">Товары заказ</div>
                </div>
                <div class="t-nav-slider">
                    <div class="t-nav-slider__content">Агенты наличие</div>
                </div>
                <div class="t-nav-slider">
                    <div class="t-nav-slider__content">Агенты заказ</div>
                </div>
            </VueNavSlickCarousel>

            <VueSlickCarousel 
                ref="c1"
                :asNavFor="$refs.c2"
                :slidesToShow="1"
                :focusOnSelect="true"
                v-bind="settingsMainSLider"
                class="tMainSlider"
                @beforeChange="mainBeforeChange"
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
                    <TNavSearchContent :allCategories = "GET_CATEGORIES" />
                </template>
                <template v-if="GET_REGIONS_SHOW_STATUS">
                    <TNavMainContent :allRegions = "GET_REGIONS" />
                </template>
            </transition>
            <TNav @goHome="goToHome" />
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
import VueNavSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'


import TCard from './t-card'
import TNav from './nav/t-nav'
import TNavSearchContent from './nav/t-nav-search-content'
import TNavMainContent from './nav/t-nav-main-content'
import tAvailable from '@/components/products/t-available'
import tUnderOrder from '@/components/products/t-under-order'
import tAgentsAvailable from '@/components/agents/t-agents-available'
import tAgentsUnderOrder from '@/components/agents/t-agents-under-order'

import {mapGetters, mapActions} from 'vuex'

export default {
    name: 't-main-wrapper',
    data(){
        return {
            settingsNavSlider: {
                "centerMode": true,
                "centerPadding": "20px",
                "slidesToShow": 1,
                "slidesToScroll": 1,
                "infinite": false,
                "swipe": true,
                "dots": false,
                "arrows": false,
                "asNavFor": this.$refs.c1
            },
            settingsMainSLider: 
                {
                    "asNavFor": this.$refs.c2,
                    "dots": false,
                    "arrows": false,
                    // "dotsClass": "slick-dots custom-dot-class",
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
        VueNavSlickCarousel,
        VueSlickCarousel,
        tAvailable,
        tUnderOrder,
        tAgentsAvailable,
        tAgentsUnderOrder,
        TCard,
        TNav,
        TNavSearchContent,
        TNavMainContent
    },
    computed:{
        ...mapGetters([
            "GET_PRODUCT_SHOW_STATUS",

            "GET_CATEGORIES_SHOW",
            "GET_CATEGORIES",
            
            "GET_REGIONS",
            "GET_REGIONS_SHOW_STATUS"        
        ])
    },
    methods: {
        ...mapActions([
            "CHANGE_PRODUCT_SHOW_STATUS",
            "SHOW_CATEGORIES",
            "SHOW_REGIONS"
        ]),
        showNext() {
            this.$refs.с1.next()
        },
        showPrev() {
            this.$refs.с1.prev()
        },
        goToHome() {
            this.$refs.c1.goTo(0)
        },
        navBeforeChange(currentSlide, nextSlide) {
            if(currentSlide < nextSlide && currentSlide != nextSlide){
                this.$refs.c1.next()
            } 
            if(currentSlide > nextSlide && currentSlide != nextSlide) {
                this.$refs.c1.prev()
            }
        },
        mainBeforeChange(currentSlide, nextSlide) {
            if(currentSlide < nextSlide && currentSlide != nextSlide){
                this.$refs.c2.next()
            } 
            if(currentSlide > nextSlide && currentSlide != nextSlide) {
                this.$refs.c2.prev()
            }
        }
    },
    mounted(){
        this.SHOW_CATEGORIES(),
        this.SHOW_REGIONS()
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