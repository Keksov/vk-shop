<template>
    <div class="t-catalog-item"
        v-touch:tap="tapHandler"
        :class="{'one': product_data.photos.length === 1, 'two': product_data.photos.length === 2, 'three': product_data.photos.length === 3 }"
    > 
        <div class="t-card-actions">
            <button class="t-card-actions__price">
                {{ product_data.price }} р.
                <span class="t-card-actions__price-plus">
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.5056 9.48H9.80956V16.032H7.54156V9.48H0.845562V7.356H7.54156V0.767999H9.80956V7.356H16.5056V9.48Z" fill="#FF0000"/>
                    </svg>
                </span>
            </button>
            
            <button class="t-card-actions__favorites">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.2204 22.7806L11.8946 22.6638L11.5662 22.7735C8.6571 23.7456 6.66248 23.981 5.30377 23.78C4.0148 23.5892 3.28167 23.0071 2.8052 22.1709C2.29005 21.2667 2.03965 19.9984 1.93938 18.4075C1.86585 17.2408 1.87579 15.9942 1.88623 14.6839C1.89 14.2109 1.89384 13.7296 1.89384 13.2408C1.89384 11.5633 2.13235 10.3897 2.53635 9.51246C2.9327 8.65184 3.51951 8.00856 4.339 7.43782C5.18086 6.85152 6.24898 6.35403 7.60383 5.78646C7.97107 5.63262 8.3592 5.4737 8.76593 5.30716C9.71325 4.91928 10.7615 4.49006 11.8821 3.98734C13.0412 4.51014 14.1176 4.95274 15.0848 5.3504C15.4854 5.5151 15.8672 5.67209 16.2284 5.82388C17.5922 6.39699 18.6543 6.89311 19.4857 7.47659C20.293 8.04317 20.8659 8.68146 21.2521 9.54282C21.6469 10.4233 21.8775 11.6061 21.8775 13.3055C21.8775 13.5355 21.8778 13.7645 21.8782 13.9922C21.8808 15.5527 21.8832 17.0528 21.7639 18.4267C21.6264 20.0096 21.3352 21.2886 20.7896 22.2034C20.2791 23.0592 19.5213 23.643 18.258 23.8276C16.929 24.0218 15.0005 23.7767 12.2204 22.7806Z" stroke="#555555" stroke-width="2"/>
                <circle cx="23.5555" cy="1.66663" r="1" fill="#FF0000"/>
                </svg>

            </button>
        </div>

        <div class="t-catalog-item__main">
           <img loading="lazy" :src="product_data.photos[0]" alt="">
        </div>
        <div class="t-catalog-item__secondary">
            <img loading="lazy" :src="photo" 
            v-for="(photo, index) in secondaryPhotos"
            :key="index">
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
    name: 't-products-item',
    props: {
        product_data:{
            type: Object,
            default() {
                return {}
            }
        }
    },
    computed:{
        secondaryPhotos:function(){
            if(this.product_data.photos.length < 5){
                return this.product_data.photos.slice(1)
            } else {
                return this.product_data.photos.slice(1,5)
            }
        }
    },
    methods: {
        ...mapActions([
            "SHOW_PRODUCT",
            "CHANGE_PRODUCT_SHOW_STATUS"
        ]),
        showProductData(){
            this.SHOW_PRODUCT(this.product_data)
            this.CHANGE_PRODUCT_SHOW_STATUS(true)
        },
        tapHandler(){
            this.showProductData()
        }
    }
}
</script>