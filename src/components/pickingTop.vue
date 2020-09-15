<template>
  <div id="pickingTop" class="flexRow">
    <div id="teamInfo" class="flexRow">
      <div id="teamLogo"></div>
      <span>Beşiktaş JK</span>
    </div>
    <button>Confirm</button>
  </div>
</template>

<script>
export default {
  name: "pickingTop"
}
</script>

<style scoped>
  button{
    width: 20%;
    height: 40px;
    background-color: #9699BE;
    border: none;
    border-radius: 10px;
    color: white;
    font-size: 18px;
  }
  .flexRow{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  #pickingTop{
    justify-content: space-between;
  }
  #teamLogo{
    width: 40px;
    height: 40px;
    background-color: black;
    border-radius: 50%;
  }
  #teamInfo{
    width: 13.5%;
    justify-content: space-between;
    font-size: 20px;
  }
</style>
