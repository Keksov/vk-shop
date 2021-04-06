
export function CHANGE_CATEGORIES_SHOW_STATUS ({commit}, categories_status) {
    
    commit('SET_CATEGORIES_SHOW_STATUS', categories_status)
    commit('SET_PRODUCT_SHOW_STATUS', false)
}
export function CHANGE_PRODUCT_SHOW_STATUS({commit}, product_status) {
    commit('SET_PRODUCT_SHOW_STATUS', product_status)
}