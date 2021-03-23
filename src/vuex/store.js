import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

let store = new Vuex.Store({
    state:{
        products:[]
    },
    mutations:{
        SET_PRODUCTS_TO_STATE: (state, products ) => {
            // temporarily limited the length of the array 
            // TODO: remove and set state.products = products
            let shortProducts = products.slice(0,3)
            state.products = shortProducts
        }
    },
    actions:{
        async GET_PRODUCTS({commit}) {
            try {
                const products = await axios('https://api.ividos.pro:8443/api/items.php?src=s', {
                    method: "GET"
                })
                commit('SET_PRODUCTS_TO_STATE', products.data)
                return products
            } catch (error) {
                console.log(error)
                return error
            }
        }
    },
    getters:{
        PRODUCTS(state){
            return state.products
        }
    }
})

export default store