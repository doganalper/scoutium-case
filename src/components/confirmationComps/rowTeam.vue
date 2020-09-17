<template>
  <div id="selectionRows">
    <div class="box">
      <div id="teamLogo"></div>
      <span> Beşiktaş JK </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "rowTeam",
};
</script>

<style scoped>
#selectionRows {
  margin-top: 10px;
  width: 32.5%;
  padding: 15px;
  box-sizing: border-box;
  height: 700px;
  box-shadow: 0px 9px 18px -3px rgba(0, 0, 0, 0.22);
}
.box {
  height: 635px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
}
#teamLogo{
  width: 70px;
  height: 70px;
  background-color: black;
  border-radius: 50px;
}
</style>
