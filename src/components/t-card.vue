<template>
    <div class="t-card">
       <div class="t-card-seller">
           <div class="t-card-seller__top">
                <div class="t-card-seller__link">
                    {{ PRODUCT_INFO.seller.vk }}
                </div>
                <button class="t-card-seller__top-close" @click="closeProduct()">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 1C14.6011 8.46535 8.21992 14.5823 1 21" stroke="#555555" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M21 21C13.5346 14.6011 7.41771 8.21992 1 1" stroke="#555555" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
           </div>

           <div class="t-card-seller__middle">
               <div class="t-card-seller__middle-ava"
               v-bind:style="{ backgroundImage: 'url(' + PRODUCT_INFO.seller.vkav + ')' }"
               ></div>

               <div class="t-card-seller__middle-info">
                   <div class="t-card-seller__middle-name">
                       {{ PRODUCT_INFO.seller.name }}
                   </div>
                   <div class="t-card-seller__middle-date">
                       {{ currentDateTime(PRODUCT_INFO.date)}}
                   </div>
               </div>
           </div>

           <div class="t-card-seller__bottom">
                {{ PRODUCT_INFO.text }}
            </div>
       </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import moment from 'moment'

export default {
    name: 't-card',
    computed:{
        ...mapGetters([
            "PRODUCT_INFO"
        ])
    },
    methods: {
        ...mapActions([
            "CHANGE_PRODUCT_INFO_STATUS"
        ]),
        closeProduct(){
            this.CHANGE_PRODUCT_INFO_STATUS(false)
        },
        currentDateTime(date) {
            moment.locale("ru")
            return moment(date).format('D MMM - h:mm')
        },
    },
    
   
}
</script>