<template>
    <div id="mainDiv">
      <div id='card'>
        <Slider />
      </div>

      <div id="title">
          Technology Stack
      </div>
        <div id="mid">
            <span id="icon1" class="bigIcons" v-b-tooltip.hover title="AWS lambda and events"> <b-icon icon="cloud" aria-hidden="true" ></b-icon></span>
            <!-- <span id="icon2" class="bigIcons"> <b-icon icon="people-fill" aria-hidden="true" ></b-icon></span> -->
            <span id="icon2" class="bigIcons" v-b-tooltip.hover title="NuxtJs and Express JS"> <b-icon icon="code" aria-hidden="true" ></b-icon></span>
        </div>
              <div id="title">
          Important Links
      </div>
        <div id="mid">
            <span id="icon1" class="bigIcons"> <b-icon icon="people-fill" aria-hidden="true" ></b-icon></span>
            <!-- <span id="icon2" class="bigIcons"> <b-icon icon="people-fill" aria-hidden="true" ></b-icon></span> -->
            <span id="icon2" class="bigIcons" v-b-tooltip.hover title="visit github repo"> <b-icon icon="github" aria-hidden="true" ></b-icon></span>
        </div>
    </div>
    
</template>

<script>
  export default {
    
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
  font-size: 3vw;
  color: #35495e;
  letter-spacing: 1px;
  text-align: center;
      padding-top: 3%;
    padding-bottom: 3%;
}

.bigIcons{
    font-size: 10vw;
    margin-right: 20%;
    margin-left: 20%;
    top: 50%;
    vertical-align: middle;

    padding-top: 3%;
    padding-bottom: 3%;
}

#content{
    font-size: 3vw;
    padding-top: 3%;
    padding-bottom: 3%;
    margin-right: 20%;
    margin-left: 20%;
}

#mid{
    /* height: 30vh; */
    
    display: flex;
    justify-content: space-between;
    transition: 0.5s;
    max-width: 100vw;
}

#mid:hover{
    background: rgb(204, 213, 221);
}

#mainDiv{
    background: rgb(241, 243, 245);
    max-width: 100vw;
}


</style>