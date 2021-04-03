import axios from 'axios'

const url_base = 'https://bot.ividos.pro:8443/api/merchants.php?ps=5&'

export async function SHOW_AGENTS_AVAILABLE({commit}, agents_params) {
    try {
        let concatedUrl = url_base +'src=s' + this.getters.GET_CATEGORY + '&p='+ agents_params['page']
        const agents = await axios(concatedUrl, {
            method: "GET"
        })
        console.log('agents ', agents.data)
        commit('SET_AGENTS_AVAILABLE', agents.data)
        return agents
    } catch (error) {
        return error
    }
}