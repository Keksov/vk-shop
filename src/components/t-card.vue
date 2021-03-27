<template>
    <div class="t-card" v-scroll-lock="PRODUCT_INFO_STATUS">
       <div class="t-card-content" >
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

       <div class="t-card-photos">
           <div class="t-card-actions">
               <button class="t-card-actions__price" @click="goToProductTop">
                   {{ PRODUCT_INFO.price }} р.
                   <span class="t-card-actions__price-plus">
                       <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.5056 9.48H9.80956V16.032H7.54156V9.48H0.845562V7.356H7.54156V0.767999H9.80956V7.356H16.5056V9.48Z" fill="#FF0000"/>
                        </svg>
                    </span>
               </button>
               <button class="t-card-actions__share"
                v-clipboard:copy="PRODUCT_INFO.vk"
                v-clipboard:success="copySucceeded"
                >
                    <svg width="46" height="44" viewBox="0 0 46 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M36 0C33.7 0 31.3996 0.899609 29.5996 2.59961L23.5996 8.59961C21.0996 11.0996 20.4 14.8004 21.5 17.9004L25 14.4004C25.1 13.3004 25.6004 12.3 26.4004 11.5L32.4004 5.5C33.4004 4.5 34.7 4 36 4C37.3 4 38.6 4.5 39.5 5.5C41.4 7.4 41.4 10.5996 39.5 12.5996L33.5 18.5996C32.7 19.3996 31.6996 19.9 30.5996 20L27 23.5996C28 23.7996 29 24 30 24C32.3 24 34.6004 23.1004 36.4004 21.4004L42.4004 15.4004C45.9004 11.9004 45.9004 6.09961 42.4004 2.59961C40.6004 0.899609 38.3 0 36 0ZM29.5 13.5C29 13.5 28.4996 13.6996 28.0996 14.0996L15.0996 27.0996C14.2996 27.8996 14.2996 29.2004 15.0996 29.9004C15.4996 30.3004 16 30.5 16.5 30.5C17 30.5 17.5004 30.3004 17.9004 29.9004L30.9004 16.9004C31.7004 16.1004 31.7004 14.8996 30.9004 14.0996C30.5004 13.6996 30 13.5 29.5 13.5ZM16 20C13.7 20 11.3996 20.8996 9.59961 22.5996L3.59961 28.5996C0.0996094 32.0996 0.0996094 37.8008 3.59961 41.3008C5.39961 43.1008 7.7 44 10 44C12.3 44 14.6004 43.1004 16.4004 41.4004L22.4004 35.4004C24.9004 32.9004 25.6 29.2996 24.5 26.0996L20.9004 29.5996C20.8004 30.6996 20.3 31.7 19.5 32.5L13.5 38.5C12.6 39.5 11.3 40 10 40C8.7 40 7.4 39.5 6.5 38.5C4.6 36.6 4.6 33.4004 6.5 31.4004L12.5 25.4004C13.3 24.6004 14.3004 24.1 15.4004 24L19 20.4004C18 20.2004 17 20 16 20Z" fill="#E2383E"/>
                    </svg>
               </button>
               <button class="t-card-actions__favorites">
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.2204 22.7806L11.8946 22.6638L11.5662 22.7735C8.6571 23.7456 6.66248 23.981 5.30377 23.78C4.0148 23.5892 3.28167 23.0071 2.8052 22.1709C2.29005 21.2667 2.03965 19.9984 1.93938 18.4075C1.86585 17.2408 1.87579 15.9942 1.88623 14.6839C1.89 14.2109 1.89384 13.7296 1.89384 13.2408C1.89384 11.5633 2.13235 10.3897 2.53635 9.51246C2.9327 8.65184 3.51951 8.00856 4.339 7.43782C5.18086 6.85152 6.24898 6.35403 7.60383 5.78646C7.97107 5.63262 8.3592 5.4737 8.76593 5.30716C9.71325 4.91928 10.7615 4.49006 11.8821 3.98734C13.0412 4.51014 14.1176 4.95274 15.0848 5.3504C15.4854 5.5151 15.8672 5.67209 16.2284 5.82388C17.5922 6.39699 18.6543 6.89311 19.4857 7.47659C20.293 8.04317 20.8659 8.68146 21.2521 9.54282C21.6469 10.4233 21.8775 11.6061 21.8775 13.3055C21.8775 13.5355 21.8778 13.7645 21.8782 13.9922C21.8808 15.5527 21.8832 17.0528 21.7639 18.4267C21.6264 20.0096 21.3352 21.2886 20.7896 22.2034C20.2791 23.0592 19.5213 23.643 18.258 23.8276C16.929 24.0218 15.0005 23.7767 12.2204 22.7806Z" stroke="#555555" stroke-width="2"/>
                    <circle cx="23.5555" cy="1.66663" r="1" fill="#FF0000"/>
                    </svg>

               </button>
           </div>
           <img v-for="(photo, index) in PRODUCT_INFO.photos"
            :src="photo"
            alt="photo"
            :key="index">
       </div>
       </div>

        <transition name="slide">
            <template v-if="NOTIFICATION_STATUS">
                <t-notification :newNotification="NOTIFICATION" />
            </template>
        </transition>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import moment from 'moment'

export default {
    name: 't-card',
    components:{
    },
    data(){
        return {
            notifaction_text: 'Скопировано'
        }
    },
    computed:{
        ...mapGetters([
            "PRODUCT_INFO",
            "PRODUCT_INFO_STATUS"
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
        goToProductTop(){
            window.scrollTo({top: 0, behavior: "smooth"})
        },
        // copy to clipboard2
        copySucceeded(){
            this.$notify({
                type: 'success', 
                text: 'Скопировано'
                });
            // this.CHANGE_NOTIFICATION_STATUS(true)
            // this.SHOW_NOTIFICATION(this.notifaction_text)
            // setTimeout(() => {
            //     this.CHANGE_NOTIFICATION_STATUS(false)
            // }, 2500)
        }
    },
    
   
}
</script>