import axios from 'axios'
const url_base = 'https://api.ividos.pro:8443/api/items.php?ps=10&'

export async function GET_AVAILABLE_PRODUCTS({commit}, products_params) {
    try {
        let concatedUrl = url_base +'src=s&' + 'category=' + this.getters.GET_CATEGORY + '&p='+ products_params['page']
        let products = await axios.get(concatedUrl)

        commit('SET_AVAILABLE_PRODUCTS', products.data)
        return products
    } catch (error) {
        console.log(error)
        return error
    }
}

export async function UPDATE_AVAILABLE_PRODUCTS({commit}) {
    try {
        
        let concatedUrl = url_base +'src=s&' + 'category=' + this.getters.GET_CATEGORY + '&p=0'
        const products_updated = await axios.get(concatedUrl)
        commit('SET_CLEAR_PRODUCTS')
        commit('SET_AVAILABLE_PRODUCTS', products_updated.data)
        commit('SET_CATEGORIES_SHOW_STATUS', false)
        return products_updated
    } catch (error) {
        console.log(error)
        return error
    }
}

export async function UPDATE_UNDER_ORDER_PRODUCTS({commit}) {
    try {
        
        let concatedUrl = url_base +'src=a&' + 'category=' + this.getters.GET_CATEGORY + '&p=0'
        const products_u_o_updated = await axios.get(concatedUrl)
        commit('SET_CLEAR_U_O_PRODUCTS')
        commit('SET_UNDER_ORDER_PRODUCTS', products_u_o_updated.data)
        commit('SET_CATEGORIES_SHOW_STATUS', false)
        return products_u_o_updated
    } catch (error) {
        console.log(error)
        return error
    }
}

export async function GET_UNDER_ORDER_PRODUCTS({commit}, products_params) {
    try {
        let concatedUrl = url_base +'src=a' + + '&category='+ this.getters.GET_CATEGORY + '&p='+ products_params['page']
        const uo_products = await axios(concatedUrl, {
            method: "GET"
        })
        commit('SET_UNDER_ORDER_PRODUCTS', uo_products.data)
        return uo_products
    } catch (error) {
        console.log(error)
        return error
    }
}

export function CLEAR_PRODUCTS({commit}) {
    commit('SET_CLEAR_PRODUCTS')
}

export function CLEAR_U_O_PRODUCTS({commit}) {
    commit('SET_CLEAR_U_O_PRODUCTS')
}