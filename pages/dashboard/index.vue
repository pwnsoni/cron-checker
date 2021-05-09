
<template>
  <div class='contain'>
    <h1 class="title1">
        Generate a session
    </h1>
    <div id="form">
      <b-form @submit="onSubmit" >
          <div v-if="showCron">
              <b-form-group
                  id="fieldset-horizontal"
                  label-cols-sm="4"
                  label-cols-lg="4"
                  content-cols-sm
                  content-cols-lg="8"
                  description="Let us know your Email."
                  label="Enter your Email"
                  label-for="input-horizontal"
                  >
                  <b-form-input id="input-horizontal" v-model="form.creater"></b-form-input>
              </b-form-group>
              <b-form-group
                  id="fieldset-horizontal"
                  label-cols-sm="4"
                  label-cols-lg="4"
                  content-cols-sm
                  content-cols-lg="8"
                  description="Name of the cron"
                  label="Name of the cron"
                  label-for="input-horizontal"
                  >
                  <b-form-input id="input-horizontal" v-model="form.name"></b-form-input>
              </b-form-group>

              <b-form-group
                  id="fieldset-horizontal"
                  label-cols-sm="4"
                  label-cols-lg="4"
                  content-cols-sm
                  content-cols-lg="8"
                  description="the id communicated to you"
                  label="ID of the cron"
                  label-for="input-horizontal"
                  >
                  <b-form-input id="input-horizontal" v-model="form._id"></b-form-input>
              </b-form-group>
            </div>
          <SubmitButton v-if='!spin' />
          <div class="text-center" v-if='spin'>
            <b-spinner variant="primary" label="Text Centered"></b-spinner>
          </div>
       
        
    </b-form>
 </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          creater: '',
          name: '',
          cronStatement: '',
          description: '',
          recipients: ''
        },
        showCron: true,
        spin: false
        }
    },
    mounted(){
      if (this.$store.state.isActiveSession){
        this.$router.push('/dashboard/' + this.$store.state.cron._id);
      }
    },
    methods: {
      async onSubmit(event) {
        event.preventDefault()
        this.spin = true;
        alert(this.form._id);
        console.log('INITIATE_SESSION', this.form._id)
        await this.$store.dispatch('INITIATE_SESSION', {cron_id: this.form._id});
        this.makeToastForBackGround(true, "Mapping cron with snsGroup");
        this.spin = false;
      },
      makeToast(append = false, title, _id) {
        this.$bvToast.toast(`Id : ${_id}`, {
          title: title,
          autoHideDelay: 5000,
          appendToast: append
        })
      },
      makeToastForBackGround(append = false, title) {
        this.$bvToast.toast(`In Bakcground`, {
          title: title,
          autoHideDelay: 5000,
          appendToast: append
        })
      }
    } 
  }
</script>

<style>

#form{
    margin-left: 10%;
    padding-left: 5%;
    padding-right: 5%;
    margin-right: 10%;
    margin-bottom: 10%;
    /* padding-left: 10%; */
}

.title1 {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 5vw;
  color: #35495e;
  letter-spacing: 1px;
  text-align: center;
  padding: 5%;
  padding-bottom: 2%;
  padding-top: 2%;
}

</style>