<template>
  <div id="selectionRows">
    <div id="header"> Lineup </div>
    <div class="box" v-if="selectedPlayers.length !== 0">
      <player-card :state="'lineup'" v-for="selectedPlayer in selectedPlayers" :player="selectedPlayer"></player-card>
    </div>
    <div class="box" :class="selectedPlayers.length === 0 ? 'empty' : 'notEmpty'" v-if="selectedPlayers.length === 0">
      <span>You haven't selected any player for lineup yet.</span>
    </div>
  </div>
</template>

<script>
import playerCard from "./playerCard";
import { eventBus } from "../main";
import Modal from './substitutesModal'
export default {
  name: "selectionRows",
  props: ['playerList'],
  components: {
    playerCard,
    Modal
  },
  data() {
    return {
      selectedPlayers: [],
      subsCount:0
    };
  },
  mounted(){
    eventBus.$on('playerSelected',(payload)=>{
      if(this.selectedPlayers.length < 11) {
        this.selectedPlayers.push(payload)
        payload.selected = true
      }else{
        eventBus.$emit('lineupFull',true)
        if(this.subsCount < 3){
          this.$modal.show(
            Modal,
          {
            selectedPlayers: this.selectedPlayers,
            notSelectedPlayers: this.playerList.filter(
              i => i.selected === false
            )
          },
          { height: "auto", width: "420", styles: "border-radius: 10px" }
          );
        }else{
          alert("You can't pick more")
        }
      }
    })
    eventBus.$on('playerDeSelected',(payload)=>{
      let index = this.selectedPlayers.findIndex(i=> i.id === payload.id)
      this.selectedPlayers.splice(index,1)
      payload.selected = false
      eventBus.$emit('lineupFull',false)
    })
    eventBus.$on('subsCountIncrease',()=>{
      this.subsCount++;
    })
    eventBus.$on('subsCountDecrease',()=>{
      this.subsCount--;
    })
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
