<template>
  <div id="header">
    <div id="logo">SCOUTIUM</div>
    <div id="userPicture"></div>
  </div>
</template>

<script>
export default {
name: "header.vue"
}
</script>

<style scoped>
  #header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #02063F;
    width: 100%;
    height: 60px;
    padding: 0 18% 0 18%;
    box-sizing: border-box;
  }
  #logo{
    color: #12C990;
    font-weight: bolder;
    letter-spacing: 4px;
    font-size: 20px;
  }
  #userPicture{
    width: 40px;
    height: 40px;
    background-color: gray;
    border-radius: 50%;
  }
</style>
