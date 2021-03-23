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
        product_in_stock_desc: [],
        product_to_order_desc: [],
        product_type: null
    },
    mutations:{
        SET_PRODUCTS_IN_STOCK_TO_STATE: (state, products ) => {
            // temporarily limited the length of the array 
            // TODO: remove and set state.products = products
            let shortProducts = products.slice(0,3)
            state.products_in_stock = shortProducts
        },
        SET_PRODUCTS_TO_ORDER_TO_STATE: (state, products ) => {
            // temporarily limited the length of the array 
            // TODO: remove and set state.products = products
            let shortProducts = products.slice(0,3)
            state.products_to_order = shortProducts
        },
        SET_PRODUCT_IN_STOCK_DESC:(state, productInStockByID) => {
            state.product_in_stock_desc = productInStockByID
        },
        SET_PRODUCT_TO_ORDER_DESC:(state, productByID) => {
            state.product_to_order_desc = productByID
        },
        SET_PRODUCT_TYPE:(state, product_type_status) => {
            state.product_type = product_type_status
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
        async GET_PRODUCT_IN_STOCK_DESC({commit}, productID) {
            try {
                const productInStockByID = await axios(url_in_stock, {
                    method: "GET"
                })
                
                commit('SET_PRODUCT_IN_STOCK_DESC', productInStockByID.data.filter(r => r.id == productID)) 
                       
                return productInStockByID
            } catch (error) {
                console.log(error)
                return error
            }
        },
        async GET_PRODUCT_TO_ORDER_DESC({commit}, productID) {
            try {
                const productByID = await axios(url_to_order, {
                    method: "GET"
                })
               
                commit('SET_PRODUCT_TO_ORDER_DESC', productByID.data.filter(r => r.id == productID))              
                return productByID
            } catch (error) {
                console.log(error)
                return error
            }
        },
        GET_PRODUCT_TYPE({commit}, product_type_status){
            try {
                commit('SET_PRODUCT_TYPE', product_type_status) 
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
        PRODUCT_IN_STOCK_DESC(state){
            return state.product_in_stock_desc
        },
        PRODUCT_TO_ORDER_DESC(state){
            return state.product_to_order_desc
        },
        PRODUCT_TYPE(state){
            return state.product_type
        }
    }
})

export default store