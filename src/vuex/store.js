import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const url_in_stock = 'https://api.ividos.pro:8443/api/items.php?src=s&p=1&ps=5'
const url_to_order = 'https://api.ividos.pro:8443/api/items.php?src=a&p=1&ps=1'

let store = new Vuex.Store({
    state:{
        products_in_stock:[],
        products_to_order:[],
        product_info: {
            type: Object,
            default(){
                return {}
            }
        },
        product_info_status: false
    },
    mutations:{
        SET_PRODUCTS_IN_STOCK_TO_STATE: (state, products ) => {
            state.products_in_stock = products
        },
        SET_PRODUCTS_TO_ORDER_TO_STATE: (state, products ) => {
            state.products_to_order = products
        },
        SET_PRODUCT_INFO: (state, product_info_data) => {
            state.product_info = product_info_data
            state.product_info_status = true
        },
        SET_PRODUCT_INFO_STATUS: (state, new_status) => {
            state.product_info_status = new_status
        }
    },
    actions:{
        async GET_PRODUCTS_IN_STOCK({commit}) {
            try {
                const products = await axios(url_in_stock, {
                    method: "GET"
                })
                commit('SET_PRODUCTS_IN_STOCK_TO_STATE', products.data)
                return products
            } catch (error) {
                console.log(error)
                return error
            }
        },
        async GET_PRODUCTS_TO_ORDER({commit}) {
            try {
                const products = await axios(url_to_order, {
                    method: "GET"
                })
                commit('SET_PRODUCTS_TO_ORDER_TO_STATE', products.data)
                return products
            } catch (error) {
                console.log(error)
                return error
            }
        },
        GET_PRODUCT_INFO({commit}, product_info_data){
            try {
                commit('SET_PRODUCT_INFO', product_info_data)

            } catch (error) {
                console.log(error)
                return error
            }
        },
        CHANGE_PRODUCT_INFO_STATUS({commit}, new_status){
            try {
                commit('SET_PRODUCT_INFO_STATUS', new_status)
            } catch (error) {
                console.log(error)
                return error
            }
        }
    },
    getters:{
        PRODUCTS_IN_STOCK(state){
            return state.products_in_stock
        },
        PRODUCTS_TO_ORDER(state){
            return state.products_to_order
        },
        PRODUCT_INFO(state){
            return state.product_info
        },
        PRODUCT_INFO_STATUS(state){
            return state.product_info_status
        }
    }
})

export default store