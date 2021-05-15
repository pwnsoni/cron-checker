export const state = () => ({
    cron: null,
    isActiveSession: false,
    snsGroup: null,
    lastHits: null,
    activeCron: 'Cron',
    watch: false
  })
  
export const mutations = {
    initiateSession(state, responses){
        state.cron = responses.cron;
        state.isActiveSession = true;
        state.activeCron = responses.cron.name;
        state.snsGroup = responses.snsGroup;
        state.watch = responses.cron.cloudWatchEventUUID? true : false
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
    },
    toggle_watch(state, response){
        state.watch = response;
    },
    updateCron(state, cron){
        state.cron = cron;
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

    async UPDATE_CRON({commit}, {changes}){
        console.log('in store', cron_id);
        let cron = await this.$axios.$put('/api/cron/' + cron_id, changes);
        commit('updateCron', cron.result);
    },

    async TOGGLE_WATCH({commit, state}){
        console.log(`before if ${state.watch}`)
        if (state.watch){
            console.log(`toggling in store if true ${state.watch}`)
            let res = await this.$axios.post('/api/invoke', {
                "event": {
                    "ruleName": `rule_${state.cron._id}`,
                    "targetId": `target_${state.cron._id}`
                },
                "lambdaName": "cron-checker-services-dev-removeRule",
            })
            console.log(JSON.stringify(res));
            commit('toggle_watch', false)
            let cron = await this.$axios.$put('/api/cron/' + state.cron._id, {cloudWatchEventUUID: null});
            commit('updateCron', cron.result);
        } else{

            console.log(`toggling in store if false ${state.watch}`)
            let res = await this.$axios.post('/api/invoke', {
                "event": {
                    "ruleName": `rule_${state.cron._id}`,
                    "ruleExpression": state.cron.cronStatement,
                    "targetId": `target_${state.cron._id}`,
                    "input": {"cron": state.cron, "sns": state.sns}
                },
                "lambdaName": "cron-checker-services-dev-createandmapRule",
            })
            console.log(JSON.stringify(res));
            commit('toggle_watch', true)
            let cron = await this.$axios.$put('/api/cron/' + state.cron._id, {cloudWatchEventUUID: `rule_${state.cron._id}`});
            commit('updateCron', cron.result);
        }

    }
}