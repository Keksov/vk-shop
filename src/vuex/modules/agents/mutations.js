export function SET_AGENTS_AVAILABLE (state, agents_list) {
    state.agents_available.push(...agents_list)
}


export function SET_AGENTS_UNDER_ORDER (state, agents_list_u_o) {
    state.agents_under_order.push(...agents_list_u_o)
}

export function SET_CLEAR_AGENTS_AVAILABLE(state) {
    state.agents_available = []
}

export function SET_CLEAR_AGENTS_UNDER_ORDER(state) {
    state.agents_under_order = []
}