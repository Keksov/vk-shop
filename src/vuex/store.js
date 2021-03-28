import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

// const url_in_stock = 'https://api.ividos.pro:8443/api/items.php?src=s&p=1&ps=5'
// const url_to_order = 'https://api.ividos.pro:8443/api/items.php?src=a&p=1&ps=1'
const url_base = 'https://api.ividos.pro:8443/api/items.php?category=&ps=5'
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
        
        // nav
        categories: [],
        categories_status: false
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
        }
    },
    actions:{
        async GET_PRODUCTS({commit}, get_products_params) {
            try {
                let concatedUrl = url_base + '&src=' + get_products_params['product_type'] + '&p='+ get_products_params['page']
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
                        console.log('delay')

                    }, 900)
                } else {
                    commit('SET_CATEGORIES_STATUS', new_categories_status)
                }
                
                
                
            } catch (error) {
                console.log(error)
                return error
            }
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
        }
    }
})

export default store