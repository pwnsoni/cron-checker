<template>
  <div>
    <h1 class="title">
        Add Info about your cron
    </h1>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <div id="form">
            <b-form-group
                id="fieldset-horizontal"
                label-cols-sm="4"
                label-cols-lg="4"
                content-cols-sm
                content-cols-lg="7"
                description="Let us know your Email."
                label="Enter your Email"
                label-for="input-horizontal"
                >
                <b-form-input id="input-horizontal" v-model="form.email"></b-form-input>
            </b-form-group>
            <b-form-group
                id="fieldset-horizontal"
                label-cols-sm="4"
                label-cols-lg="4"
                content-cols-sm
                content-cols-lg="7"
                description="Name of the cron"
                label="Name of the cron"
                label-for="input-horizontal"
                >
                <b-form-input id="input-horizontal"></b-form-input>
            </b-form-group>

            <b-form-group
                id="fieldset-horizontal"
                label-cols-sm="4"
                label-cols-lg="4"
                content-cols-sm
                content-cols-lg="7"
                description="Cron statement"
                label="Cron statement"
                label-for="input-horizontal"
                >
                <b-form-input id="input-horizontal" v-model="cronStatement"></b-form-input>
            </b-form-group>

            <b-form-group
                id="fieldset-horizontal"
                label-cols-sm="4"
                label-cols-lg="4"
                content-cols-sm
                content-cols-lg="7"
                description="Whatever"
                label="Whatever"
                label-for="input-horizontal"
                >
                <b-form-input id="input-horizontal"></b-form-input>
            </b-form-group>

            <b-form-group
                id="fieldset-horizontal"
                label-cols-sm="10"
                label-cols-lg="4"
                content-cols-sm
                content-cols-lg="7"
                description="Whatever"
                label="Whatever"
                label-for="input-horizontal"
                >
                <b-form-input id="input-horizontal"></b-form-input>
            </b-form-group>

            <div>
                <button id="mine" type="submit"> Submit </button>
            </div>

        </div>
    </b-form>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
          cronStatement: '',
          food: null,
          checked: []
        },
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>

<style>

#form{
    margin-left: 10%;
    margin-right: 10%;
    margin-bottom: 10%;
    padding-left: 10%;
}
#mine{
    width: 100%;
    height: 45px;
    margin: auto;
    transition-duration: 0.4s;
    border: 2px solid #35495e; 
    /* padding-left: 10%;
    padding-right: 10%; */
}
#mine:hover {
  background-color: #35495e; /* Green */
  color: white;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}

.title {
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
}

</style>