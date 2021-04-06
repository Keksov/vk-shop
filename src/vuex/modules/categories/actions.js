import axios from 'axios'
const category_url = 'https://bot.ividos.pro:8443/api/categories.php'

export async function SHOW_CATEGORIES({commit}) {
    const categories_list = await axios(category_url, {
        method: "GET"
    })
    commit('SET_CATEGORIES', categories_list.data)
}

export function CHANGE_CATEGORY({commit}, new_category) {
    commit('SET_NEW_CATEGORY', new_category)
}