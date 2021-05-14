<template>
  <div class="contain">
    <!-- <h1 class="title1">
        {{cron.name}}
    </h1> -->
    
    <div id="dashboard" v-if="cron">
      <h1 class="title1"> Dashboard </h1>
      <div id="card">
        <div id="card-title">
          {{cron.name}}
        </div>

        <div id="card-subtitle">
          <strong> Cron Statement:  </strong>{{cron.cronStatement}}
        </div>

        <div id="card-subtitle">
          <strong> Registered On: </strong>{{cron.createdAt}} <br/>
        </div>

        <br/>

        <div id="content"> 
          <strong> Description: </strong>{{cron.description}} <br/>
          CloudWatch Event UUID: Yhi hai filhal to <br/>
          
          updatedAt: {{cron.updatedAt}} <br/>
        </div>
      </div>
      
      <!-- <h2 class="title1"> Notification Group </h2> -->

      <div id="card">
        <div id="card-title">
          {{sns.cronName}}
        </div>

        <div id="card-subtitle">
          <strong> Createdat:  </strong>{{sns.createdAt}}
        </div>

        <div id="card-subtitle">
          <strong> Registered On: </strong>{{sns.createdAt}} <br/>
        </div>

        <br/>

        <div id="content"> 
          <strong> Recipients: </strong>{{sns.recipients}} <br/>
          CloudWatch Event UUID: Yhi hai filhal to <br/>
          
          updatedAt: {{sns.updatedAt}} <br/>
        </div>
      </div>
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
        }
    },

    mounted(){
      if (!this.$store.state.isActiveSession){
        this.$router.push('/dashboard');
      }
    },
    
    computed: {
      cron () {
        return this.$store.state.cron;
      },
      sns (){
        return this.$store.state.snsGroup;
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
        let responseSnsGroup = await this.$axios.post('/api/snsGroup', {form: this.form});
        this.makeToast(true, "Saved the snsGroup in DB", responseSnsGroup.data.result._id);
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
#leftHead{
  max-width: 20vh;
  margin: 10%;
}

#dashboard{
    margin-left: 10%;
    padding-left: 5%;
    padding-right: 5%;
    margin-right: 10%;
    margin-bottom: 10%;
    /* padding-left: 10%; */
}

#card{
  min-width: 50%;
  min-height: 40vh;
  /* border: 0.5px solid #154bc0; */
  /* box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.2); */
  transition: 0.3s;
  margin-bottom: 5%;
}

#card:hover{
  border-radius: 5px 5px 0 0;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

#card-title{
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
  font-weight: 500;
  font-size: 25px;
  color: #010e1b;
  letter-spacing: 1px;
  text-align: center;
  padding: 5%;
  padding-bottom: 2%;
  padding-top: 2%;

}

#card-subtitle, #content{
  color: rgb(3, 45, 58);
  padding-left: 10%;
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
  font-size: 4vw;
  color: #35495e;
  letter-spacing: 1px;
  text-align: center;
  padding-bottom: 2%;
  padding-top: 5%;
  margin-top: 5%;
  margin-bottom: 3%;
}

</style>