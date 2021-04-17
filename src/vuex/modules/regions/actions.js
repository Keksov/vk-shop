import axios from 'axios'
const regions_url = 'https://bot.ividos.pro:8443/api/regions.php'

export async function SHOW_REGIONS({commit}) {
    const regions_list = await axios.get(regions_url)
    commit('SET_REGIONS', regions_list.data)
}

export function CHANGE_REGION({commit}, new_region) {
    commit('SET_NEW_REGION', new_region)
}