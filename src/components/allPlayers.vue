<template>
  <div id="selectionRows">
    <div id="header"> All Players </div>
    <div class="box">
      <player-card v-for="playerInfo in playerList" :player="playerInfo" :key="playerInfo.id" :state="'allPlayers'"></player-card>
    </div>
  </div>
</template>

<script>
import playerCard from "./playerCard";
import { eventBus } from "../main";
import Modal from "./substitutesModal";
export default {
  name: "selectionRows",
  props: ["playerList"],
  components: {
    playerCard,
  },
  data() {
    return {
    };
  },

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
#header {
  font-size: 18px;
  margin-bottom: 5px;
}
.empty {
  display: flex;
  height: 635px;
  font-size: 15px;
  color: #9699be;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.box {
  height: 635px;
  overflow-y: auto;
}
</style>
