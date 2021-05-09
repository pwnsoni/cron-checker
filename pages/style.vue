<template>

  <div id="mainDiv">
    <div id = "leftH">

    </div>

    <div id="right">
      <div id="formG">
        <b-form-group
        id="fieldset-horizontal"
        label-cols-sm="10"
        label-cols-lg="10"
        content-cols-sm
        content-cols-lg="10"
        description="Let us know your name."
        label="Enter your name"
        label-for="input-horizontal"
      >
        <b-form-input id="input-horizontal"></b-form-input>
      </b-form-group>
    </div>
    </div>

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