import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
/*
*** Сущности
- API - главный url для товаров и агентов с категорией и регионом

- Товары в наличии - список товаров в наличии
- Товары на заказ - список товаров на заказ
- Product - Вывод инфо о продукте, (единый для товаров в наличии, на заказ)

- Агенты в наличии - список продавцов, предоставляющих товары в наличии
- Агенты на заказ - список продавцов, предоставляющих товары на заказ

- Категории - список категорий товаров (единый для товаров в наличии, на заказ)
- Категория - выбранная категория товаров (единый для товаров в наличии, на заказ и
     для агентов в наличии, на заказ) https://bot.ividos.pro:8443/api/categories.php

- Регионы - список регионов товаров и агентов 
    (единый для товаров в наличии, на заказ, для агентов в наличии, на заказ)
- Регион - выбранный регион (единый для товаров в наличии, на заказ и
     для агентов в наличии, на заказ)

- Пользователь - пользователь залогиненный в систему
- Избранное - список товаров пользователя занесенный в избранном

- Уведомление - уведомления (единые)
- Статус - статусы для показа и скрытия продукта, категорий меню
*/
Vue.use(Vuex)

// const url_in_stock = 'https://api.ividos.pro:8443/api/items.php?src=s&p=1&ps=5'
// const url_to_order = 'https://api.ividos.pro:8443/api/items.php?src=a&p=1&ps=1'
const url_base = 'https://api.ividos.pro:8443/api/items.php?ps=5&category='
const url_to_categories = 'https://bot.ividos.pro:8443/api/categories.php'
let store = new Vuex.Store({
    state:{
        products:[],
        product_info: {
            type: Object,
            default(){
                return {}
            }
        },
        product_info_status: false,
        
        // category
        categories: [],
        categories_status: false,
        category: ''
    },
    mutations:{
        SET_PRODUCTS: (state, in_products ) => {
            state.products.push(...in_products) 
        },
        // product info
        SET_PRODUCT_INFO: (state, product_info_data) => {
            state.product_info = product_info_data
            state.product_info_status = true
        },
        SET_PRODUCT_INFO_STATUS: (state, new_product_info_status) => {
            state.product_info_status = new_product_info_status
        },
        // categories
        SET_CATEGORIES: (state, categories_list) => {
            state.categories = categories_list
        },
        SET_CATEGORIES_STATUS: (state, new_categories_status) => {
            state.categories_status = new_categories_status
        },
        SET_CATEGORY: (state, get_in_category) => {
            state.products = []
            state.category = get_in_category
        },
        SET_CLEAR_PRODUCTS: (state) => {
            state.products = []
        }
    },
    actions:{
        async GET_PRODUCTS({commit}, get_products_params) {
            try {
                let concatedUrl = url_base + this.getters.CATEGORY + '&src=' + get_products_params['product_type'] + '&p='+ get_products_params['page']
                const get_products = await axios(concatedUrl, {
                    method: "GET"
                })
                commit('SET_PRODUCTS', get_products.data)
                return get_products
            } catch (error) {
                console.log(error)
                return error
            }
        },
        // product info
        GET_PRODUCT_INFO({commit}, product_info_data) {
            try {
                commit('SET_PRODUCT_INFO', product_info_data)

            } catch (error) {
                console.log(error)
                return error
            }
        },
        CHANGE_PRODUCT_INFO_STATUS({commit}, new_product_info_status) {
            try {
                commit('SET_PRODUCT_INFO_STATUS', new_product_info_status)
            } catch (error) {
                console.log(error)
                return error
            }
        },
        // categories
        async GET_CATEGORIES({commit}) {
            try {
                // let new_url = url_base
                // new_url += url_type
                // const categories_list = await axios(new_url, {
                //     method: "GET"
                // })
                let categories_list = await axios(url_to_categories, {
                    method: "GET"
                })
                commit('SET_CATEGORIES', categories_list.data)
                return categories_list
            } catch(error) {
                console.log(error)
                return error
            }
        },
        CHANGE_CATEGORIES_STATUS({commit}, new_categories_status) {
            try {
                if(this.state.product_info_status){
                    commit('SET_PRODUCT_INFO_STATUS', false)
                    setTimeout(function () {
                        commit('SET_CATEGORIES_STATUS', new_categories_status)

                    }, 900)
                } else {
                    commit('SET_CATEGORIES_STATUS', new_categories_status)
                }
                
                
                
            } catch (error) {
                console.log(error)
                return error
            }
        },
        async CHANGE_CATEGORY({commit}, in_category){
            commit('SET_CATEGORY', in_category)
            let concatedUrl = url_base + this.getters.CATEGORY + '&src=s' + '&p=0'
                const get_products = await axios(concatedUrl, {
                    method: "GET"
                })
            commit('SET_CATEGORIES_STATUS', false)
            commit('SET_CLEAR_PRODUCTS')
            commit('SET_PRODUCTS', get_products.data)
            
            
        },
        CLEAR_PRODUCTS({commit}) {
            commit('SET_CLEAR_PRODUCTS')
        }
    },
    getters:{
        PRODUCTS (state){
            return state.products
        },
        // product info
        PRODUCT_INFO (state) {
            return state.product_info
        },
        PRODUCT_INFO_STATUS (state) {
            return state.product_info_status
        },
        // categories
        CATEGORIES (state) {
            return state.categories
        },
        CATEGORIES_STATUS (state) {
            return state.categories_status
        },
        CATEGORY (state) {
            return state.category
        }
    }
})

export default store