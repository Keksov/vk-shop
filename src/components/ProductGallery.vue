<template>
    <div>
        <div class="gallery-wrapper" @click="showProduct()">
            
            <div class="gallery-main" v-bind:class="{ bottom: isBottom }">            
                <img :src="product.photos[0]" alt="main photo">            
            </div>
            <div v-bind:class="[isBottom ? 'gallery-bottom' : 'gallery-right']">
                <img :src="product.photos[1]">
                <img :src="product.photos[2]">
                <img :src="product.photos[3]">
            </div>
            <!-- links -->
        </div>

        <transition name="slide" v-on:after-enter="afterEnter" v-on:after-leave="afterLeave">
            <div class="product-info" :id="'2215'+product.id" v-show="isProductItemShow">
                <div class="product-info__top">
                    <div class="product-info__vk">
                        <span>{{ product.vk }}</span>
                    </div>
                    
                    <div class="product-info__seller">
                        <div class="product-info__seller-ava">
                            <img :src="product.seller.vkav" alt="ava">
                        </div>
                        <div class="product-info__seller-desc">
                            <div class="product-info__seller-desc_name">{{ product.seller.name }}</div>
                            <div class="product-info__seller-desc_date">{{ currentDateTime(product.date) }}</div>
                        </div>
                </div>
                <div class="product-info__text">{{ product.text }}</div>
                    
                </div>
                
                <div class="product-info__photos">
                    <!-- product links -->
                    <div class="product-info__links">
                        <div class="product-info__links-price" @click="goToProductTop()">
                            <span class="product-info__links-price_value">{{ product.price }} р.</span> 
                            <span class="product-info__links-price_plus">+</span>
                        </div>
                        <div class="product-info__links-share" @click="doCopy">
                            <span class="icon share">
                                <img src="@/assets/icons/share.svg" alt="share">
                            </span>
                        </div>
                        <div class="product-info__links-favorite">
                            <span class="icon favorite">
                                <svg width="23" height="22" viewproductCardBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.2198 19.8624L11.8945 19.7461L11.5669 19.8553C8.65767 20.8253 6.66266 21.0603 5.30345 20.8596C4.01371 20.6692 3.28076 20.088 2.80473 19.2544C2.28996 18.3529 2.03963 17.0881 1.93937 15.5009C1.86585 14.337 1.87579 13.0933 1.88623 11.786C1.89 11.314 1.89384 10.8337 1.89384 10.3459C1.89384 8.67254 2.13229 7.50212 2.536 6.62747C2.93208 5.76934 3.5186 5.12764 4.33815 4.55813C5.18005 3.97309 6.24822 3.47667 7.60311 2.91034C7.97036 2.75683 8.3585 2.59826 8.76525 2.43208C9.71277 2.04498 10.7613 1.61661 11.8821 1.11486C13.0414 1.63664 14.1181 2.07835 15.0855 2.47522C15.4861 2.63956 15.8679 2.79621 16.2291 2.94768C17.5929 3.51954 18.6551 4.0146 19.4866 4.59681C20.2939 5.16217 20.8665 5.79888 21.2524 6.65774C21.6469 7.5357 21.8775 8.71524 21.8775 10.4104C21.8775 10.64 21.8778 10.8685 21.8782 11.0957C21.8808 12.6528 21.8832 14.1494 21.7639 15.52C21.6264 17.0991 21.3353 18.3746 20.79 19.2868C20.28 20.14 19.5224 20.7228 18.2583 20.9071C16.9288 21.101 14.9999 20.8563 12.2198 19.8624Z" stroke="#555555" stroke-width="2"/>
                                </svg>
                                <div class="favorite-dot"></div>
                            </span>
                        </div>
                    </div>
                    <!-- product photos -->
                    <div class="product-info__gallery">
                        <div class="product-info__photo" v-for="(photo, index) in product.photos" :key="index">
                            <img :src="photo">
                        </div>
                    </div>

                    
                </div>

                <div class="product-info__close" @click="closeProduct()">
                    <span class="icon close">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 1C14.6011 8.46535 8.21992 14.5823 1 21" stroke="#555555" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M21 21C13.5346 14.6011 7.41771 8.21992 1 1" stroke="#555555" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>
                </div>
            </div>
        </transition>
        
    </div>
</template>

<script>
import moment from 'moment'

export default {
    name: 'ProductGallery',
    data(){
        return {
           isProductItemShow: false,
           currenPosition: null,
           productLink: ''
        }
    },
    props: ['product', 'isBottom'],
  
    methods:{
        // product show
        afterEnter: function () {            
            window.scrollTo({top: 0, behavior: "smooth"})            
        },
        afterLeave: function () {
            window.scrollTo({top: this.currenPosition, behavior: "smooth"})            
        },
        showProduct(){
            // window.scrollTo(0, 0);
            /** get current position, when close use it to scroll back to it */            
            var productCard = document.getElementById('2215'+this.product.id)
            let productCardBox = productCard.getBoundingClientRect()
            this.currenPosition = productCardBox.top + pageYOffset
            
            this.isProductItemShow = true
            this.productLink = this.product.vk
        },
        closeProduct(){
            this.isProductItemShow = false            
        },
        // date time convert
        currentDateTime(date) {
            moment.locale("ru")
            return moment(date).format('D MMM - h:mm')
        },
        // go top
        goToProductTop(){
            window.scrollTo({top: 0, behavior: "smooth"})
        },
        // copy to clipboard2
        doCopy() {
        this.$copyText(this.productLink).then(function (e) {
        //   показать уведомления
          console.log(e)
        }, function (e) {
          
          console.log(e)
        })
      }
    }

}
</script>

<style lang="scss" scoped>
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
</style>