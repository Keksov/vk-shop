import axios from 'axios'

const url_base = 'https://bot.ividos.pro:8443/api/merchants.php?ps=5&'

export async function SHOW_AGENTS_AVAILABLE({commit}, agents_params) {
    try {
        let concatedUrl = url_base +'src=s&r=' + this.getters.GET_REGION + '&p='+ agents_params['page']
        const agents = await axios.get(concatedUrl)
        commit('SET_AGENTS_AVAILABLE', agents.data)
        return agents
    } catch (error) {
        return error
    }
}

export async function SHOW_AGENTS_UNDER_ORDER({commit}, agents_params) {
    try {
        let concatedUrl = url_base +'src=a' + this.getters.GET_CATEGORY + '&p='+ agents_params['page']
        const agents_u_o = await axios(concatedUrl, {
            method: "GET"
        })
        commit('SET_AGENTS_UNDER_ORDER', agents_u_o.data)
        return agents_u_o
    } catch (error) {
        return error
    }
}

export async function UPDATE_SHOW_AGENTS_AVAILABLE({commit}) {
    try {
        
        let concatedUrl = url_base +'src=s&r=' + this.getters.GET_REGION + '&p=0'
        const agents = await axios.get(concatedUrl)
        commit('SET_CLEAR_AGENTS_AVAILABLE')
        commit('SET_AGENTS_AVAILABLE', agents.data)
        commit('SET_CATEGORIES_SHOW_STATUS', false)
        return agents
    } catch (error) {
        console.log(error)
        return error
    }
}

export function CLEAR_AGENTS_AVAILABLE({commit}) {
    commit('SET_CLEAR_AGENTS_AVAILABLE')
}

export function CLEAR_AGENTS_UNDER_ORDER({commit}) {
    commit('SET_CLEAR_AGENTS_UNDER_ORDER')
}