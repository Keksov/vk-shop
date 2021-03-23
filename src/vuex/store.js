import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const url_in_stock = 'https://api.ividos.pro:8443/api/items.php?src=s'
const url_to_order = 'https://api.ividos.pro:8443/api/items.php?src=a'

let store = new Vuex.Store({
    state:{
        products_in_stock:[],
        products_to_order:[],
        product_info: {
            type: Object,
            default(){
                return {}
            }
        }
    },
    mutations:{
        SET_PRODUCTS_IN_STOCK_TO_STATE: (state, products ) => {
            // temporarily limited the length of the array 
            // TODO: remove and set state.products = products
            let shortProducts = products.slice(0,5)
            state.products_in_stock = shortProducts
        },
        SET_PRODUCTS_TO_ORDER_TO_STATE: (state, products ) => {
            // temporarily limited the length of the array 
            // TODO: remove and set state.products = products
            let shortProducts = products.slice(0,3)
            state.products_to_order = shortProducts
        },
        SET_PRODUCT_INFO:(state, product_info_data) => {
            state.product_info = product_info_data
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
        }
    }
})

export default store