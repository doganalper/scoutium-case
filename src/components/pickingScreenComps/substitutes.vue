<template>
  <div id="selectionRows">
    <div id="header"> Substitutes </div>
    <div class="box" v-if="substitutes.length !== 0">
      <player-card v-for="selectedPlayer in substitutes" :player="selectedPlayer" :state="'substitutes'"></player-card>
    </div>
    <div class="box" :class="substitutes.length === 0 ? 'empty' : 'notEmpty'" v-if="substitutes.length === 0">
      <span>Please pick 11 players for lineup before creating any substitutions.</span>
    </div>
  </div>
</template>

<script>
import playerCard from "./playerCard";
import { eventBus } from "../../main";
export default {
  name: "selectionRows",
  components: {
    playerCard
  },
  data() {
    return {
      substitutes: []
    };
  },
  mounted() {
    eventBus.$on('substituteIn',(payload)=>{
      this.substitutes.push(payload)
    })
    eventBus.$on('deleteSub',(payload)=>{
      let index = this.substitutes.findIndex(i=> i.playerIn.id === payload.id)
      this.substitutes.splice(index,1)
    })
    eventBus.$on('getSubstitutes',()=>{
      eventBus.$emit('sentSubstitutes',this.substitutes)
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
  box-shadow: 0 9px 18px -3px rgba(0, 0, 0, 0.22);
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
