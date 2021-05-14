<template>
  <div>
    <h1 class="title1">
        Add Info about your cron
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
                  description="Cron statement"
                  label="Cron statement"
                  label-for="input-horizontal"
                  >
                  <b-form-input id="input-horizontal" v-model="form.cronStatement"></b-form-input>
              </b-form-group>

              <b-form-group
                  id="fieldset-horizontal"
                  label-cols-sm="4"
                  label-cols-lg="4"
                  content-cols-sm
                  content-cols-lg="8"
                  description="Little description about your cron"
                  label="Description"
                  label-for="input-horizontal"
                  >
                  <b-form-input id="input-horizontal" v-model="form.description"></b-form-input>
              </b-form-group>

              <b-form-group
                  id="fieldset-horizontal"
                  label-cols-sm="4"
                  label-cols-lg="4"
                  content-cols-sm
                  content-cols-lg="8"
                  description="List of users you want to notify"
                  label="Recipients List"
                  label-for="input-horizontal"
                  >
                  <b-form-input id="input-horizontal" v-model="form.recipients"></b-form-input>
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
    methods: {
      async onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
        this.spin = true;
        let responseCron = await this.$axios.post('/api/cron', {form: this.form});
        this.makeToast(true, "Saved the cron in DB", responseCron.data.result._id);
        this.form.cron_id = responseCron.data.result._id;
        this.form.cronName = this.form.name;
        let responseSnsGroup = await this.$axios.post('/api/snsGroup', {form: this.form});
        this.makeToast(true, "Saved the snsGroup in DB", responseSnsGroup.data.result._id);
        let responseLastHit = await this.$axios.post('/api/hit', {form: this.form});
        this.makeToast(true, "Saved the last Hit in DB", responseLastHit.data.result._id);
        this.spin = false;
        this.makeToastForBackGround(true, "Mapping cron with snsGroup");
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