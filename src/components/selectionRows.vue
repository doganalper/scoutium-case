<template>
  <div id="selectionRows">
    <div id="header">{{ header }}</div>
    <div class="box" v-if="playerList != null && header === 'All Players'">
      <player-card
        v-for="playerInfo in playerList"
        :player="playerInfo"
        :key="playerInfo.id"
      ></player-card>
    </div>
    <div
      class="box"
      v-else-if="header === 'Lineup'"
      :class="selectedPlayerList.length === 0 ? 'empty' : 'notEmpty'"
    >
      <span v-if="selectedPlayerList.length === 0"
        >You haven't selected any player for lineup yet.</span
      >
      <player-card
        v-for="selectedPlayer in selectedPlayerList"
        :key="selectedPlayer.key"
        :player="selectedPlayer"
      >
      </player-card>
    </div>
    <div v-else-if="header === 'Substitutes'" class="empty">
      <span
        >Please pick 11 players for lineup before creating any substitutes</span
      >
    </div>
  </div>
</template>

<script>
import playerCard from "./playerCard";
import { eventBus } from "../main";
import header from "../public/header";
import Modal from "./substitutesModal";
export default {
  name: "selectionRows",
  props: ["playerList", "header"],
  components: {
    playerCard
  },
  data() {
    return {
      selectedPlayerList: [],
      selectedCount: 0
    };
  },
  mounted() {
    if (this.header === "Lineup") {
      eventBus.$on("selected", payload => {
        if (this.selectedCount < 11) {
          this.selectedPlayerList.push(payload);
          payload.selected = true;
          this.selectedCount++;
          console.log(this.selectedCount);
        } else {
          this.$modal.show(
            Modal,
            {
              selectedPlayers: this.selectedPlayerList,
              notSelectedPlayers: this.playerList.filter(
                i => i.selected === false
              )
            },
            { height: "auto", width: "420", styles: "border-radius: 10px" }
          );
        }
      });
      eventBus.$on("deselected", payload => {
        let index = this.selectedPlayerList.findIndex(
          player => player.id === payload.id
        );
        this.selectedPlayerList.splice(index, 1);
        payload.selected = false;
        this.selectedCount--;
        console.log(this.selectedCount);
        eventBus.$emit("lineupFull", false);
      });
    }
  },
  watch: {
    selectedCount(val) {
      if (val === 11) {
        eventBus.$emit("lineupFull", true);
      }
    }
  }
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
