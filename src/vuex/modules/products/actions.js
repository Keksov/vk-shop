import axios from 'axios'
const url_base = 'https://api.ividos.pro:8443/api/items.php?'

export async function GET_AVAILABLE_PRODUCTS({commit}, products_params) {
    console.log(products_params)
    try {
        let concatedUrl = url_base +'src=s' + '&ps=5&category=' + '&p='+ products_params['page']
        const products = await axios(concatedUrl, {
            method: "GET"
        })
        commit('SET_AVAILABLE_PRODUCTS', products.data)
        return products
    } catch (error) {
        console.log(error)
        return error
    }
}