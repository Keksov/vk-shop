<template>
    <div class="t-nav-content">
        <div class="t-nav-content__close">
            <button class="button t-nav-content__close-btn" @click="closeCategory">
                <svg width="43" height="47" viewBox="0 0 43 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M41.5169 30.2442C35.1376 32.4449 29.0344 33.9293 22.227 35.3395" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.0003 35.3346C14.5239 33.9882 8.2171 32.2941 1.51688 30.2442" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M31 1.5C24.6011 8.96535 18.2199 15.0823 11 21.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M31 21.5C23.5346 15.1011 17.4177 8.71992 11 1.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>
        <div class="t-nav-content__search-wrapper">
            <form class="t-nav-search" @submit.prevent="sortBySearch(searchText)">
                <input type="search" v-model="searchText" placeholder="Поиск" class="t-nav-search__input">
                <button type="submit" class="t-nav-search__submit" @click="sortBySearch(searchText)">
                    <i>
                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="10" r="9" stroke="#555555" stroke-width="2"/>
                    <path d="M17.7012 18C19.0873 19.3341 20.4733 20.6681 21.8594 22.0022" stroke="#555555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </i>
                </button>
            </form>
        </div>
        <div class="t-nav-content__categories-wrapper">
            <div class="t-nav-content__categories-item"
            v-for="(category, index_category) in allCategories"
            :key="index_category"
            @click="sortByCategory(category.name)"
            >
            {{ category.name }}, {{ category.items_count}}
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions} from 'vuex'

export default {
    name: 't-nav-search-content',
    props: ['allCategories'],
    data(){
        return {
            searchText: '',
            def_params: {
                page: 0
            }
        }
    },
    methods: {
        ...mapActions([
            "CHANGE_CATEGORIES_SHOW_STATUS",
            "CHANGE_CATEGORY",
            "UPDATE_AVAILABLE_PRODUCTS",
            "UPDATE_UNDER_ORDER_PRODUCTS",
            // "UPDATE_SHOW_AGENTS_AVAILABLE"
        ]),
        closeCategory(){
            this.CHANGE_CATEGORIES_SHOW_STATUS(false)
        },
        sortByCategory(category){
            this.CHANGE_CATEGORY(category)
            this.UPDATE_AVAILABLE_PRODUCTS()
            this.UPDATE_UNDER_ORDER_PRODUCTS()
            // this.UPDATE_SHOW_AGENTS_AVAILABLE()
            // this.GET_AVAILABLE_PRODUCTS(this.def_params)
        },
        sortBySearch(text){
            this.CHANGE_CATEGORY(text)
            this.UPDATE_AVAILABLE_PRODUCTS()
        }
    }
}
</script>