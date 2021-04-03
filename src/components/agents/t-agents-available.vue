<template>
    <div class="t-agents-catalog">
        <t-agents-item
        v-for="(agent, index_agent) in GET_AGENTS_AVAILABLE"
        :key="index_agent"
        :agent_data="agent"
        />
    </div>
</template>

<script>
import TAgentsItem from './t-agents-item'
import {mapGetters, mapActions} from 'vuex'
export default {
    name: 't-agents-available',
    data(){
        return {
            agents_params: {
                page: 0
            }
        }
    },
    components: {
        TAgentsItem
    },    
    methods: {
        ...mapActions(["SHOW_AGENTS_AVAILABLE"])
    },
    computed:{
        ...mapGetters([
            "GET_AGENTS_AVAILABLE"
        ])
    },
    mounted(){
        this.SHOW_AGENTS_AVAILABLE(this.agents_params)
    }
}
</script>