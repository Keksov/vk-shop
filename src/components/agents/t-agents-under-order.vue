<template>
    <div class="t-agents-catalog"
    :class="{empty: GET_AGENTS_UNDER_ORDER.length == 0}"
    >
        <div v-infinite-scroll="loadMore" 
            infinite-scroll-disabled="busy" 
            infinite-scroll-distance="10"
        >
            <template v-if="GET_AGENTS_UNDER_ORDER.length != 0">
                <t-agents-item
                v-for="(agent, index_agent) in GET_AGENTS_UNDER_ORDER"
                :key="index_agent"
                :agent_data="agent"
                />
            </template>
            
            <template v-else >
                <div class="t-agents-item">Агенты в данном регионе не найдены</div>
            </template>
        </div>
    </div>
</template>

<script>
import TAgentsItem from './t-agents-item'
import {mapGetters, mapActions} from 'vuex'
export default {
    name: 't-agents-available',
    data(){
        return {
            busy: false,
            agents_u_o_params: {
                page: 0
            }
        }
    },
    components: {
        TAgentsItem
    },    
    methods: {
        ...mapActions([
            "CLEAR_AGENTS_UNDER_ORDER",
            "SHOW_AGENTS_UNDER_ORDER"
        ]),
        loadMore: function() {
            this.busy = true
            // load items
            this.agents_u_o_params.page += 1
            this.SHOW_AGENTS_UNDER_ORDER(this.agents_u_o_params)
            this.busy = false
        }
    },
    computed:{
        ...mapGetters([
            "GET_AGENTS_UNDER_ORDER"
        ])
    },
    mounted(){
        this.CLEAR_AGENTS_UNDER_ORDER().then(this.SHOW_AGENTS_UNDER_ORDER(this.agents_u_o_params))
        
    }
}
</script>