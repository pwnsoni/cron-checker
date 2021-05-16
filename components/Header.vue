<template>
    <div >
        <b-navbar toggleable="lg" type="light" variant="light" >
            <b-navbar-brand to="/" id="home">Cron-Checker</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item to="/addcron">Add-Cron</b-nav-item>
                <b-nav-item to='/dashboard'>Dashboard</b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto" id="right">
                <b-navbar-nav>
                    <b-nav-item to="/addcron">Add-Cron</b-nav-item>
                    <b-nav-item to="/style1">Style</b-nav-item>
                </b-navbar-nav>
                <b-nav-item-dropdown right>
                <template #button-content >
                    <em>{{cron}}</em>
                </template>
                <b-dropdown-item @click="removeSession">Remove Session</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav> 
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {
    computed: {
      cron () {
        return this.$store.state.activeCron;
      },
      isSessionActive (){
          return this.$store.state.isActiveSession;
      }
    },
    methods: {
        async removeSession(){
            if (confirm('You will be logged out')){
                await this.$store.dispatch('RESET_SESSION');
            }
        }
    }
}
</script>

<style>
#headTop{
    background: chartreuse;
}
#home{
    padding-left: 10%;
}

#right{
    padding-right: 10%;
}
</style>