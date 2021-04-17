<template>
    <div class="t-nav-main-content">
        <div class="t-nav-main-content__close">
            <button class="button t-nav-content__close-btn" @click="closeMain">
                <svg width="43" height="47" viewBox="0 0 43 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M41.5169 30.2442C35.1376 32.4449 29.0344 33.9293 22.227 35.3395" stroke="#555555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.0003 35.3346C14.5239 33.9882 8.2171 32.2941 1.51688 30.2442" stroke="#555555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M31 1.5C24.6011 8.96535 18.2199 15.0823 11 21.5" stroke="#555555" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M31 21.5C23.5346 15.1011 17.4177 8.71992 11 1.5" stroke="#555555" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>

        <div class="t-nav-main-top">
            <a class="t-nav-main-top__link" href="#">site.ru</a>
            <div class="t-nav-main-top__location">
                <span class="t-nav-main-top__badge">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="6" cy="6" r="5" stroke="#FF0000" stroke-width="2"/>
                    <circle cx="6" cy="6" r="1" fill="#FF0000"/>
                    </svg>
                </span>
                <span class="t-nav-main-top__text">
                    Москва
                </span>
            </div>
        </div>

        <div class="t-nav-main-search__wrapper">
            <form class="t-nav-main-search" @submit.prevent="sortByRegionSearch(regionText)">
                <input class="t-nav-main-search__input" type="search" v-model="regionText" placeholder="введите ваш город" >
            </form>
        </div>

        <div class="t-nav-main-regions__wrapper">
            <div class="t-nav-main-regions__item"
            v-for="(region, index_regions) in allRegions"
            :key="index_regions"
            @click="sortByRegionSearch(region.name)"
            >
                <div class="t-nav-main-regions__text"
                    :class="{star: region.counter > 30}"
                    >
                    {{ region.name }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions} from 'vuex'

export default {
    name: 't-nav-main-content',
    props:['allRegions'],
    data(){
        return {
            regionText: ''
        }
    },
    methods: {
        ...mapActions([
            "CHANGE_REGIONS_SHOW_STATUS"
        ]),
        closeMain(){
            this.CHANGE_REGIONS_SHOW_STATUS(false)
        },
        sortByRegionSearch(region){
            console.log('region search', region)
        }
    }
}
</script>