<template>

  <div id="mainDiv">

    <div id="left">
      <h1 id="titleLeft"> Dashboard </h1>
    </div>
    <div id="right">

      <div id="card">
        <div id="card-title">
          title
        </div>
        <div id="card-content">
          content
        </div>
        <div id="card-content">
          content
        </div>
        <div id="card-content">
          content
        </div>
        <div id="card-footer">
          footer
        </div>
      </div>

    </div>
  </div>
  
</template>

<style scoped>

#right #card{
  min-width: 100%;
  /* min-height: 40vh; */
  /* border: 0.5px solid #154bc0; */
  /* box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.2); */
  transition: 0.3s;
  /* margin-bottom: 5%; */
  /* padding-left: 100px; */

  margin: 30px;
  
  background: lightslategray;
}

#card:hover{
  border-radius: 5px 5px 0 0;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

#right #card #card-title{
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
  padding: 20px;
  margin-top: 50px;
}

#card-subtitle, #card-content{
  color: rgb(3, 45, 58);
  /* padding-left: 10px;
  margin-left: 100px; */
  text-align: left;
}

#card-footer{
  color: rgb(3, 45, 58);
  text-align: center;
  padding: 20px; 
  font-size: 20px;
  transition: 0.5s;
}

#card-footer:hover{
  color: rgb(243, 237, 237);
}

#mainDiv{
  min-height: 87vh;
}

#left{
  min-width: 40%;
  min-height: 87vh;

  background: white;
  float: left;
}

#left #titleLeft{
  margin: 10%;
  font-size: 70px;
  padding-left: 10%;
  padding-top: 10%;
  background:turquoise
}

#right{
  min-width: 70px;
  height: 100%;
  min-height: 87vh;
  /* background: lightblue; */
  /* float: left; */
}

</style>