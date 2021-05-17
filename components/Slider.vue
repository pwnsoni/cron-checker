<template>
    <div id="caro">
        <b-carousel
        class="c"
        id="carousel-2"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        img-width="1024"
        img-height="480"
        style="max-height: 60vh "
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
        >

        <b-carousel-slide img-blank img-alt="Blank image" style="max-height: 60vh ">
            <h1 id="title"> Cron-Checker </h1>
            <p id="content"> A tool to monitor your cron without installing anything in your system. </p>
        </b-carousel-slide>

        <!-- Text slides with image -->
        <b-carousel-slide img-blank img-alt="Blank image" style="max-height: 60vh ">
            <h1 id="title"> Add-cron </h1>
            <p id="content"> Complete the form on <b-link to="/addcron">this</b-link>  page to register your cron. </p>
        </b-carousel-slide>
        <!-- Slides with custom text -->


        <!-- Slides with image only -->

        <!-- Slides with img slot -->
        <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
        <b-carousel-slide img-blank  style="max-height: 60vh ">
            <h1 id="title"> Dashboard </h1>
            <p id="content"> Log in  <b-link to="/dashboard">here</b-link> to get to the dashboard of your registered cron. </p>
        </b-carousel-slide>


        <b-carousel-slide img-blank img-alt="Blank image" style="max-height: 60vh ">
            <h1 id="title"> Documentatinon </h1>
            <p id="content"> The <b-link to="/docs">Documentatinon</b-link> explaining how to use this tool. </p>
        </b-carousel-slide>

        <!-- Slide with blank fluid image to maintain slide aspect ratio -->
        
        </b-carousel>

      </div>
</template>


<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>



<style scoped>

#title{
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
  font-size: 8vw;
  color: #35495e;
  letter-spacing: 1px;
}

#content{
    color: brown;
    font-size: 2vw;
    /* padding-bottom: 10%; */
    /* background: blueviolet; */
}

#caro{
    background: rgb(241, 243, 245);
    transition: 0.5s;
}

#caro:hover{
    background: rgb(204, 213, 221);
    /* box-shadow: 0 5px 5px 0 rgba(0,0,0,0.24), 0 5px 5px 0 rgba(0,0,0,0.19);  */
}



</style>