<template>
    <div class="t-main">
        <div class="t-main__catalog">
            <VueNavSlickCarousel
                ref="c2"
                v-bind="settingsNavSlider"
                class="tMainNav"
                @beforeChange="navBeforeChange"
            >
                <div class="t-nav-slider">
                    <div class="t-nav-slider__content"
                    @click="goToSlide(0)">Товары наличие</div>
                </div>
                
                <div class="t-nav-slider">
                    <div class="t-nav-slider__content"
                    @click="goToSlide(1)"
                    >Агенты наличие</div>
                </div>

                <div class="t-nav-slider">
                    <div class="t-nav-slider__content"
                    @click="goToSlide(2)">Товары заказ</div>
                </div>

                <div class="t-nav-slider">
                    <div class="t-nav-slider__content"
                    @click="goToSlide(3)">Агенты заказ</div>
                </div>
            </VueNavSlickCarousel>

            <VueSlickCarousel 
                ref="c1"
                v-bind="settingsMainSLider"
                class="tMainSlider"
                @beforeChange="mainBeforeChange"
            >
                
                    <div class="t-catalog__slide">
                        <tAvailable />
                    </div>
                
                    <div class="t-catalog__slide">
                        <tAgentsAvailable />
                    </div>
               
                    <div class="t-catalog__slide">
                        <tUnderOrder />
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
            <TNav @goHome="goToSlide(0)" />
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
                
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: false,
                swipe: false,
                dots: false,
                arrows: false,
                // asNavFor: this.$refs.c1,
                variableWidth: false,
                responsive: [
                    {
                        "breakpoint": 1025,
                        "settings":{                       
                            slidesToShow: 3,
                            slidesToScroll: 1,
                            swipe: true
                        }
                    },
                    {
                        "breakpoint": 768,
                        "settings":{
                            
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            swipe: true
                        },
                    },
                    {
                        "breakpoint": 425,
                        "settings":{
                            infinite: false,
                            centerMode: true,
                            centerPadding: "40px",
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            variableWidth: true,
                            swipe: true
                        },
                    }
                ]
            },
            settingsMainSLider: 
                {
                    asNavFor: this.$refs.c2,
                    dots: false,
                    arrows: false,
                    // "dotsClass": "slick-dots custom-dot-class",
                    edgeFriction: 0.35,
                    infinite: false,
                    speed: 500,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    swipe: false,
                    useCSS: true,
                    lazyLoad: true,
                    responsive: [
                        {
                            "breakpoint": 1025,
                            "settings":{
                                slidesToShow: 3,
                                slidesToScroll: 1,
                                swipe: true
                            }
                        },
                        {
                            "breakpoint": 768,
                            "settings":{
                                slidesToShow: 2,
                                slidesToScroll: 2,
                                swipe: true
                            },
                        },
                        {
                            "breakpoint": 425,
                            "settings":{
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                swipe: true
                            },
                        }
                    ]
            },
            navCurrentSlide: 0
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
            
            "GET_REGION",
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
        goToSlide(slideNum){
            this.$refs.c1.goTo(slideNum)
            this.$refs.c2.goTo(slideNum)
        },
        navBeforeChange(currentSlide, nextSlide) {
             
                /** 
                * 3 0 Next 
                * 0 3 Prev 
                * */
                if(currentSlide == 3 && nextSlide == 3) {
                    if(this.navCurrentSlide < 3){
                        this.$refs.c1.next()
                        this.navCurrentSlide++
                    }
                }

                if(currentSlide == 0 && nextSlide == 0) {
                    if(this.navCurrentSlide > 0){
                        this.$refs.c1.prev()
                        this.navCurrentSlide--
                    }
                }
                            
                console.log('curr', currentSlide, nextSlide, this.navCurrentSlide)
            
        },
        mainBeforeChange(currentSlide, nextSlide) {
            console.log('cur main', currentSlide, nextSlide)
            this.$refs.c2.goTo(nextSlide)
            // if(currentSlide < nextSlide && currentSlide != nextSlide){
            //     this.$refs.c2.next()
            // } 
            // if(currentSlide > nextSlide && currentSlide != nextSlide) {
            //     this.$refs.c2.prev()
            // }
        }
    },
    mounted(){
        this.SHOW_CATEGORIES(),
        this.SHOW_REGIONS()        
    },
    watch: {
        GET_REGION() { 
            if(this.GET_REGION != ''){
                this.$refs.c1.goTo(3)
                this.$refs.c2.goTo(3)
            }
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