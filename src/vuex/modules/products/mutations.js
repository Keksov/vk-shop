export function SET_AVAILABLE_PRODUCTS(state, products) {
    state.available_products.push(...products)
}

export function SET_UNDER_ORDER_PRODUCTS(state, u_o_products) {
    state.under_order_products.push(...u_o_products)
}

export function SET_CLEAR_PRODUCTS(state) {
    state.products = []
}

export function SET_CLEAR_U_O_PRODUCTS(state) {
    state.u_o_products = []
}