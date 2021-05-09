export const state = () => ({
    cron: null,
    isActiveSession: false,
    snsGroup: null,
    lastHits: null,
    activeCron: 'Cron'
  })
  
export const mutations = {
    initiateSession(state, responses){
        state.cron = responses.cron;
        state.isActiveSession = true;
        state.activeCron = responses.cron.name;
        state.snsGroup = responses.snsGroup;
        console.log('mu cr', responses.cron)
        console.log('sns cr', responses.snsGroup)
        console.log('id', responses.cron_id)
        this.$router.push('/dashboard/' + responses.cron_id);
    },

    resetSession(state){
        state.cron = null;
        state.isActiveSession = false;
        state.snsGroup = null;
        state.lastHits = null;
        state.activeCron = 'Cron';
        this.$router.push('/');
    }
}

export const actions = {

    async INITIATE_SESSION({commit}, {cron_id}){
        console.log('in store', cron_id);
        let cron = await this.$axios.$get('/api/cron/' + cron_id);
        console.log(cron);
        console.log(cron.result)
        // console.log('typeOf', typeof(cron.result))
        console.log('res', cron.result.result)
        // console.log('typeOf', typeof(cron.result.result))
        // console.log(cron.result.result[0].snsGroup)
        let snsGroup = await this.$axios.$get('/api/snsGroup/' + cron.result.snsGroup);
        console.log('sns', snsGroup.result);
        commit('initiateSession', {cron: cron.result, snsGroup: snsGroup.result, cron_id: cron_id});
    },

    async RESET_SESSION({commit}){
        commit('resetSession');
    },
}