<template>

  <div id="mainDiv">
    <b-icon icon="gear-fill" aria-hidden="true"></b-icon>
    <b-icon icon="eye-slash" aria-hidden="true"></b-icon>
    <b-icon icon="eye-fill" aria-hidden="true"></b-icon>

    

  </div>
  
</template>

<style>

#mainDiv div{
    float: left;
    clear: none;
    /* min-height: 87vh; */
}

#mainDiv #leftH{
  min-width: 30vw;
  min-height: 50vh;
  background: chartreuse;
}

#mainDiv #right{
  min-width: 70vw;
  min-height: 90vh;
  background: crimson;
}

#mainDiv #right #formG{
  min-width: 100%
}

</style>