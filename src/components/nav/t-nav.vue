<template>
    <nav class="t-nav-menu">
        <div class="t-nav-menu__list">
            <button class="t-nav-menu__icon t-nav-menu__home" @click="goToHomeBtn">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.5484 19H2.16129L1 17.8387V9.12903L5.64516 4.48387L8.54839 1.58065L9.12903 1H10.871L14.9355 5.06452L19 9.12903V9.46352V17.2581V17.8387L17.8387 19H17.5484Z" stroke="#FF0000" stroke-width="2" stroke-linejoin="round"/>
                </svg>
            </button>
            
            <button class="t-nav-menu__icon t-nav-menu__favorites">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.6367 17.941L10.3314 17.8313L10.0199 17.9217C7.35996 18.6938 5.51425 18.9003 4.23864 18.7433C3.01806 18.5931 2.35058 18.1184 1.92312 17.4646C1.4543 16.7475 1.19964 15.7012 1.08525 14.2822C0.992816 13.1357 0.997314 11.8559 1.00228 10.4438C1.00343 10.1167 1.0046 9.78239 1.0046 9.44103C1.0046 8.21464 1.22697 7.29518 1.60824 6.55425C1.98973 5.81291 2.56348 5.18574 3.36349 4.59223C4.17313 3.99157 5.19052 3.44257 6.43721 2.85055C7.15806 2.50824 7.91821 2.16834 8.74053 1.80063C9.23703 1.57862 9.7562 1.34647 10.3031 1.09754C10.3712 1.128 10.439 1.15828 10.5063 1.18838C13.1592 2.37382 15.206 3.28845 16.6581 4.53903C18.1207 5.79859 18.9916 7.42102 18.9916 10.2212C18.9916 10.5851 18.9937 10.9439 18.9959 11.2969C19.0029 12.4703 19.0096 13.5811 18.9354 14.613C18.8385 15.9614 18.6101 17.0049 18.172 17.7279C17.7757 18.3819 17.1692 18.8414 16.0675 18.9667C14.8973 19.0997 13.1681 18.8504 10.6367 17.941Z" stroke="#555555" stroke-width="2"/>
                </svg>
            </button>
            
            <button class="t-nav-menu__icon t-nav-menu__messages">
                <svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.5228 12.703L18.3775 13.1244L18.5937 13.5141L22.7502 21.006L14.7962 17.7729L14.3835 17.6052L13.9828 17.7998C12.1133 18.7077 9.98099 18.949 7.95007 18.4815C5.91929 18.014 4.1188 16.8675 2.85359 15.241C1.58862 13.6148 0.936277 11.6087 1.00491 9.56463C1.07355 7.5205 1.85909 5.56091 3.23086 4.02018C4.6029 2.47915 6.47691 1.45234 8.53489 1.11817C10.593 0.783985 12.7042 1.16383 14.5082 2.19134C16.3119 3.21869 17.6953 4.82881 18.426 6.74467C19.1566 8.66025 19.1908 10.7656 18.5228 12.703Z" stroke="#555555" stroke-width="2"/>
                </svg>
            </button>

            <button class="t-nav-menu__icon t-nav-menu__search"
                @click="showCategory" :class="{active: GET_CATEGORIES_SHOW}"
            >
                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="9" stroke="#555555" stroke-width="2"/>
                <path d="M17.7012 18C19.0872 19.3341 20.4733 20.6681 21.8593 22.0022" stroke="#555555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            
            <button class="t-nav-menu__icon t-nav-menu__burger"
                @click="showMain" :class="{active: GET_REGIONS_SHOW_STATUS}"
            >
                <svg width="39" height="20" viewBox="0 0 39 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.45898 19C16.0329 19.0004 27.1164 19.0002 37.8589 19.0002" stroke="#555555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.15918 10C17.8519 10.0004 28.0119 10.0002 37.8592 10.0002" stroke="#555555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M1.85938 1C13.6082 1.00037 25.9232 1.00022 37.8594 1.00022" stroke="#555555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>
    </nav>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
    name: 't-nav',
    methods: {
        ...mapActions([
            "CHANGE_CATEGORIES_SHOW_STATUS",
            "CHANGE_REGIONS_SHOW_STATUS",
            "CHANGE_PRODUCT_INFO_STATUS"
        ]),
        showCategory() {
            if(this.GET_CATEGORIES_SHOW) {
                this.CHANGE_CATEGORIES_SHOW_STATUS(false)
            } else {
                this.CHANGE_CATEGORIES_SHOW_STATUS(true)                
            }            
        },
        showMain() {
            if(this.GET_REGIONS_SHOW_STATUS) {
                this.CHANGE_REGIONS_SHOW_STATUS(false)
            } else {
                this.CHANGE_REGIONS_SHOW_STATUS(true)                
            }            
        },
        goToHomeBtn(){
            this.$emit('goHome')
            console.log('nav go home')
        }
    },
    computed:{
        ...mapGetters([
            "GET_CATEGORIES_SHOW",
            "GET_REGIONS_SHOW_STATUS",
            "PRODUCT_INFO_STATUS"
        ])
    }
}
</script>