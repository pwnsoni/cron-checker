<template>
  <div class="contain">
    
    <div id="dashboard" v-if="cron">
      <h1 class="title1"> Dashboard </h1>
      <div id="card">
        <div id="card-title">
          <p id="leftll">
          <span id='center'> {{cron.name}} </span>
          <span id='right'> 
            <b-icon icon="people-fill" aria-hidden="true" @click="getSns()" v-b-tooltip.hover title="List of notification recipients" v-b-modal.modal-1></b-icon> 
              <b-modal id="modal-1" title="SNS Group">
                <Spinincard v-if="spinningInModal"/> 
                <p class="my-4" v-if="sns">{{sns.cronName}}</p>
                <p v-if="sns" id="info"> <ShowList :list = sns.recipients /> </p>
              </b-modal>
            <b-icon icon="calendar4-event" aria-hidden="true" @click="getLastHit()" v-b-tooltip.hover title="Success hits of your cron" v-b-modal.modal-2></b-icon>
              <b-modal id="modal-2" title="Success Hits">
                <Spinincard v-if="spinningInModal"/> 
                <p class="my-4" v-if="hit">{{hit.cronName}}</p>
                <p id="success" v-if="hit"> <ShowList :list = hit.lastHits /> </p>
              </b-modal>

            <b-icon icon="exclamation-triangle" aria-hidden="true" @click="getLastHit()" v-b-tooltip.hover title="Failed hits of your cron" v-b-modal.modal-3></b-icon>
              <b-modal id="modal-3" title="Failed Hits">
                <Spinincard v-if="spinningInModal"/> 
                <p class="my-4" v-if="hit">{{hit.cronName}}</p>
                <p id="failed" v-if="hit"> <ShowList :list = hit.failedHits /> </p>
              </b-modal>
          </span> </p>
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
          <strong> Event Name </strong> {{cron.cloudWatchEventUUID}} <br/>
          
          <strong> UpdatedAt  </strong>{{cron.updatedAt}} <br/>
        </div>
        <div id="card-footer" v-if="!watch & !spinning" @click="toggleWatch()">
          <strong> <b-icon icon="eye-fill" aria-hidden="true"> </b-icon> </strong> Start watching <br/>
        </div>
        <div id="card-footer" v-if="spinning">
          <Spinincard />  
        </div>
        <div id="card-footer" v-if="watch & !spinning" @click="toggleWatch()">
          <strong> <b-icon icon="eye-slash" aria-hidden="true"> </b-icon> </strong> Stop watching <br/>
        </div>
      </div>
      
      <!-- <h2 class="title1"> Notification Group </h2> -->

      <!-- <div id="card">
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
          
          updatedAt: {{sns.updatedAt}} <br/>
        </div>
      </div> -->
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
        spinning: false,
        isEditing: true,
        spinningInModal: false
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
      },
      watch(){
        return this.$store.state.watch;
      },
      hit(){
        return this.$store.state.lastHit;
      }
    },

    methods: {

      async getLastHit(){
        this.spinningInModal = true;
        console.log('getting lastHit');
        if (!this.$store.state.lastHit) await this.$store.dispatch('GET_LAST_HIT');
        this.spinningInModal = false;
      },

      async getSns(){
        this.spinningInModal = true;
        console.log('getting sns');
        if (!this.$store.state.snsGroup) await this.$store.dispatch('GET_SNS');
        this.spinningInModal = false;
      },

      async toggleWatch(){
        this.spinning = true;
        console.log('TOGGLE_WATCH');  
        await this.$store.dispatch('TOGGLE_WATCH', {vm: this});
        this.spinning = false;
      },
      async onSubmit(event) {
        event.preventDefault()
        this.makeToast(true, "Saved the snsGroup in DB", responseSnsGroup.data.result._id);
      },
      makeToast(append = false, title, _id) {
        this.$bvToast.toast(`Id : ${_id}`, {
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

#left{
  text-align: left;
  /* align-content: left; */

}
#leftS{
  float: left;

}

#right{
  float: right;
  transition: 0.5s;
}


#center{
  float: center;
}

#failed{
  color: red;
}

#info{
  color: blue;
}

#success{
  color: rgba(6, 141, 17, 0.74);
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
  /* padding: 5%; */
  padding-bottom: 2%;
  padding-top: 2%;

}

#card-subtitle, #content{
  color: rgb(3, 45, 58);
  padding-left: 10%;
}

#card-footer{
  color: rgb(3, 45, 58);
  text-align: center;
  padding: 5%;
  font-size: 20px;
  transition: 0.5s;
}

#card-footer:hover{
  color: rgb(5, 74, 95);
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
  /* padding-top: 5%; */
  margin-top: 5%;
  margin-bottom: 3%;
}

</style>