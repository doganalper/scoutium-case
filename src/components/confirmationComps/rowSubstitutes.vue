<template>
  <div id="selectionRows">
    <div id="header">Substitutes</div>
    <div class="box">
      <div class="playerCard flexRow" v-for="player in substitutesList" :key="player.id">
        <div class="playerInfos flexRow">
          <div class="playerPhoto">
            <img :src="player.playerIn.photo" />
          </div>
          <div class="namePosition">
            <div class="playerName">{{ player.playerIn.name }}</div>
            <div class="playerPosition">{{ player.playerIn.position }}</div>
          </div>
        </div>
        <div id="changeTime">{{ player.changeTime }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "rowSubstitutes",
  props: ["substitutesList"],
  data() {
    return {};
  },
};
</script>

<style scoped>
#changeTime {
  color: #12c990;
  font-size: 1rem;
}
.playerName {
  font-size: 1rem;
}
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
  font-size: 20px;
}
.playerPosition {
  font-size: 14px;
  color: #9699be;
}
.flexRow {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.namePosition {
  margin-left: 10px;
}
.playerCard {
  box-sizing: border-box;
  padding: 5px;
  margin-right: 15px;
}
img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
#header {
  font-size: 18px;
  margin-bottom: 5px;
}
</style>
